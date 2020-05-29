<?php

namespace App\Http\Controllers\v2;

use App\Http\Controllers\v2\BaseController;
use App\Http\Models\Store;
use Illuminate\Http\Request;

class StoresNController extends BaseController
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
        $search_query = $request->searchTerm;
        $perPage = $request->per_page;
        $dataset = Store::select([
            'stores.id', \DB::raw("concat(stores.firstname, ' ', stores.lastname) as full_name"), 'stores.verified',
            'stores.initial', 'stores.firstname', 'stores.lastname', 'stores.promptpay', 'stores.store_address', 'stores.store_type_id', 'stores.store_status_id',
            'stores.store_name', 'stores.mobile_number', 'store_status.status_th', 'store_types.store_type_th', 'stores.updated_at',
        ])
            ->leftJoin('store_status', 'stores.store_status_id', '=', 'store_status.id')
            ->leftJoin('store_types', 'stores.store_type_id', '=', 'store_types.id')
            ->where(function ($query) use ($search_query) {
                if ($search_query) {
                    $query->orWhere(\DB::raw("concat(stores.firstname, ' ', stores.lastname)"), 'LIKE', '%' . str_replace(' ', '', $search_query) . '%')
                        ->orWhere("stores.store_name", 'LIKE', '%' . $search_query . '%');
                }
            })
            ->orderBy('id','desc')
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
        $input = $request->all();
        $store = Store::find($id);

        if (isset($input['action'])) {
            switch ($input['action']) {
                case 'approve':
                    $store->verified = 1;
                    $store->save();
                    return $this->sendResponse([], 'Store appreved successfully.');
                    break;

                case 'unapprove':
                    $store->verified = 0;
                    $store->save();
                    return $this->sendResponse([], 'Store unappreved successfully.');
                    break;

                default:

                    break;
            }
        }

        $store->update($input);
        return $this->sendResponse([], 'Store updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $store = Store::find($id);
        $store->delete();

        return $this->sendResponse([], 'Store deleted successfully.');
    }
}
