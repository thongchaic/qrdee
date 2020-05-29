<?php

namespace App\Http\Controllers\v2;

use App\Http\Controllers\v2\BaseController;
use App\Http\Models\Transaction;
use App\Http\Models\TransactionProductItem;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TransactionsNController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $input = $request->all();

        if (isset($input['action'])) {
            switch ($input['action']) {
                case 'get_products':
                    $products = TransactionProductItem::select([
                        'id', 'code_product', 'product_th', 'price', 'cost', 'amount', 'created_at',
                    ])->where('transaction_id', $input['transaction_id'])->get()->toArray();

                    return $this->sendResponse($products, 'OK.');

                default:

                    break;
            }
        }

        $search_query = $request->searchTerm;
        $perPage = $request->per_page;
        $dataset = Transaction::select([
            'transactions.id', 'stores.store_name', 'transactions.created_at',
            \DB::raw('count(transaction_product_items.id) as total'),
            \DB::raw('sum(transaction_product_items.amount * transaction_product_items.cost) as cost'),
            \DB::raw('sum(transaction_product_items.amount * transaction_product_items.price) as price'),
        ])
            ->leftJoin('stores', 'transactions.store_id', '=', 'stores.id')
            ->leftJoin('transaction_product_items', 'transactions.id', '=', 'transaction_product_items.transaction_id')
            ->where('transactions.store_id', '<>', 199)
            ->where(function ($query) use ($search_query) {
                if ($search_query) {
                    $query->orWhere('stores.store_name', 'LIKE', '%' . str_replace(' ', '', $search_query) . '%');
                }
            })
            ->groupBy('transactions.id', 'stores.store_name', 'transactions.created_at')
            ->orderBy('transactions.id', 'desc')
            ->paginate($perPage)
            ->toArray();

        if ($search_query) {
            $dataset['searchTerm'] = $search_query ?: '';
        } else {
            $dataset['searchTerm'] = $search_query ? null : '';
        }

        return response()->json($dataset);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // $input = $request->all();
        // $store = Store::find($id);

        // if (isset($input['action'])) {
        //     switch ($input['action']) {
        //         case 'approve':
        //             $store->verified = 1;
        //             $store->save();
        //             return $this->sendResponse([], 'Store appreved successfully.');
        //         break;

        //         case 'unapprove':
        //             $store->verified = 0;
        //             $store->save();
        //             return $this->sendResponse([], 'Store unappreved successfully.');
        //         break;

        //         default:

        //             break;
        //     }
        // }

        // $store->update($input);
        // return $this->sendResponse([], 'Store updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $transaction = Transaction::find($id);
        $tran_items = TransactionProductItem::where('transaction_id', $transaction->id)->delete();
        $transaction->delete();

        return $this->sendResponse([], 'Transaction deleted successfully.');
    }

    public function stats($id)
    {

        // $profile = Auth::user();
        // $profile =
        // if (empty($profile)) {
        //     return response()->json([
        //         'status' => 'error',
        //         'code' => -1,
        //         'data' => 'Authorization failed!']
        //         , 401);
        // }
        /*
        $begin = date('Y-m-d ' . str_pad($request->input('hr'), 2, '0', STR_PAD_LEFT) . ':00:00');
        $end = date('Y-m-d ' . str_pad(($request->input('hr') + 1), 2, '0', STR_PAD_LEFT) . ':00:00');
         */

        $begin = date('Y-m-d 00:00:01');
        $end = date('Y-m-d 23:59:59');

        $daily_income = Transaction::where('created_at', '>', $begin)
            ->where('created_at', '<', $end)
            ->where('verified', '=', 1)
            ->where('store_id', '=', $id)
            ->sum('price');

        $daily_trn_ok = Transaction::where('created_at', '>', $begin)
            ->where('created_at', '<', $end)
            ->where('verified', '=', 1)
            ->where('store_id', '=', $id)
            ->count();
        $daily_trn_cancel = Transaction::where('created_at', '>', $begin)
            ->where('created_at', '<', $end)
            ->where('verified', '=', 0)
            ->where('store_id', '=', $id)
            ->count();

        $hourly = Transaction::where('created_at', '>', $begin)
            ->where('created_at', '<', $end)
            ->where('verified', '=', 1)
            ->where('store_id', '=', $id)
            ->get()->groupBy(function ($date) {
            return Carbon::parse($date->created_at)->format('h');
        });
        $monthly = Transaction::where('created_at', '>=', date('Y'))
            ->where('verified', '=', 1)
            ->where('store_id', '=', $id)
            ->get()->groupBy(function ($date) {
            return Carbon::parse($date->created_at)->format('Y-m');
        });

        // รายได้ปีนี้
        $year = date('Y');
        $monthly_sum = array();
        $monthly_sum_label = array();
        $mtotal = 0;
        for ($i = 1; $i <= 12; $i++) {
            $ttmon = 0;
            $mobj = $year . '-' . str_pad($i, 2, '0', STR_PAD_LEFT);

            if (isset($monthly[$mobj])) {
                $tmp = $monthly[$mobj];
                for ($j = 0; $j < count($tmp); $j++) {
                    $ttmon += $tmp[$j]->price;
                    $mtotal += $tmp[$j]->price;
                }
            }
            array_push($monthly_sum, $ttmon);
            array_push($monthly_sum_label, $mobj);
        }
        $monthly_data = array('data' => $monthly_sum, 'label' => $monthly_sum_label, 'total' => $mtotal);

        // รายได้วันนี้
        $hourly_sum = array();
        $hourly_sum_label = array();
        $htotal = 0;
        for ($i = 1; $i <= 24; $i++) {
            $hobj = str_pad($i, 2, '0', STR_PAD_LEFT);
            $hcost = 0;
            if (isset($hourly[$hobj])) {
                $tmp = $hourly[$hobj];
                for ($j = 0; $j < count($tmp); $j++) {
                    $hcost += $tmp[$j]->price;
                    $htotal += $tmp[$j]->price;
                }
            }
            array_push($hourly_sum, $hcost);
            array_push($hourly_sum_label, $hobj);
        }
        $hourly_data = array('data' => $hourly_sum, 'label' => $hourly_sum_label, 'total' => $htotal);

        $year = date('Y');
        $month = date('m');
        $dinm = cal_days_in_month(CAL_GREGORIAN, $month, $year);
        $mbegin = date('Y-m-d', strtotime($year . '-' . $month . '-1'));
        $mend = date('Y-m-d', strtotime($year . '-' . $month . '-' . $dinm));

        $daily = Transaction::where('created_at', '>', $mbegin) // days in month
            ->where('created_at', '<', $mend)
            ->where('verified', '=', 1)
            ->where('store_id', '=', $id)
            ->get()->groupBy(function ($date) {
            return Carbon::parse($date->created_at)->format('d');
        });
        $test = null; // $daily['04'];
        $daily_sum = array();
        $daily_sum_label = array();
        $dtotal = 0;
        for ($i = 1; $i <= $dinm; $i++) {
            $dobj = str_pad($i, 2, '0', STR_PAD_LEFT);
            $ttcost = 0;
            if (isset($daily[$dobj])) {
                $tmp = $daily[$dobj];
                for ($j = 0; $j < count($tmp); $j++) {
                    $ttcost += $tmp[$j]->price;
                    $dtotal += $tmp[$j]->price;
                }
            }
            array_push($daily_sum, $ttcost);
            array_push($daily_sum_label, $dobj);
            //$daily_sum[$dobj] = $ttcost;
        }

        $daily_data = array('data' => $daily_sum, 'label' => $daily_sum_label, 'total' => $dtotal);
        $data = array(
            'date' => date('d'), 'month' => date('F'), 'year' => date('Y'), 'server_date' => date('Y-m-d'), 'server_time' => date('Y-m-d H:i:s'),
            'daily_income' => $daily_income,
            'daily_trn_ok' => $daily_trn_ok,
            'daily_trn_cancel' => $daily_trn_cancel,
            'hourly' => $hourly_data,
            'daily' => $daily_data,
            'monthly' => $monthly_data,
            'tmp' => ['x' => 'x'],
        );

        return response()->json([
            'status' => 'success',
            'code' => 0,
            'data' => $data,
        ], 200);

    }
}
