<?php

namespace App\Http\Controllers\v2;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Models\Store;
use App\Http\Models\Transaction;
use App\Http\Models\TransactionProductItem;
use Carbon\Carbon;


class StatsController extends Controller
{

    public function get(Request $request,$id=0){
        
        if($id <= 0){
            return response()->json( 401, ['message'=>'store not found!!'] );
        }
    
        $store = Store::find($id);
        //daily 
        //monthly 
        //yearly 
        //all (optional)
        return response()->json( $store );
    }
    public function volume(Request $request){
        
        $now = Carbon::now('+7:00');
        $daily = round(Transaction::whereBetween('created_at',[$now->copy()->startOfDay(),$now->copy()->endOfDay()])->sum('price'));
        $weekly = round(Transaction::whereBetween('created_at',[$now->copy()->startOfWeek(),$now->copy()->endOfWeek()])->sum('price'));
        $monthly = round(Transaction::whereBetween('created_at',[$now->copy()->startOfMonth(),$now->copy()->endOfMonth()])->sum('price'));
        $yearly = round(Transaction::whereBetween('created_at',[$now->copy()->startOfYear(),$now->copy()->endOfYear()])->sum('price'));
        $total = round(Transaction::sum('price'));
        
        
        $trn_daily = Transaction::whereBetween('created_at',[$now->copy()->startOfDay(),$now->copy()->endOfDay()])
                ->selectRaw('DATE_FORMAT(created_at,"%H:%i")  as xField, SUM(price) as price')
                ->groupBy(\DB::raw('xField'))
                ->get(['price','xField']);
                
        $trn_weekly = Transaction::whereBetween('created_at',[$now->copy()->startOfWeek(),$now->copy()->endOfWeek()])
                ->selectRaw('DATE_FORMAT(created_at,"%d,%H:00")  as xField, SUM(price) as price')
                ->groupBy(\DB::raw('xField'))
                ->get(['price','xField']);
                
        $trn_monthly = Transaction::whereBetween('created_at',[$now->copy()->startOfMonth(),$now->copy()->endOfMonth()])
                ->selectRaw('DATE_FORMAT(created_at,"%d-%m")  as xField, SUM(price) as price')
                ->groupBy(\DB::raw('xField'))
                ->get(['price','xField']);
                
        $trn_yearly = Transaction::whereBetween('created_at',[$now->copy()->startOfYear(),$now->copy()->endOfYear()])
                ->selectRaw('DATE_FORMAT(created_at,"%m-%y")  as xField, SUM(price) as price')
                ->groupBy(\DB::raw('xField'))
                ->get(['price','xField']);

        return response()->json( compact('daily','weekly','monthly','yearly','total','trn_daily','trn_weekly','trn_monthly','trn_yearly') );
        
    }
    public function bestseller(Request $request){
        $trn = TransactionProductItem::selectRaw('sum(amount) as total_amount, sum(price) as total_price, product_id')
                ->groupBy('product_id')
                ->orderBy('total_amount','desc')
                ->limit(1000)
                ->with('product')
                ->get(['product_id']);
         return response()->json( $trn );
    }
    
}
