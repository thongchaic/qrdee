<?php

namespace App\Http\Controllers\v2;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Models\Orders;
use App\Http\Models\Store;
use App\Http\Models\Members;
use Carbon\Carbon;

class RiderControllers extends Controller
{
    public function index(Request $request){
        
        $orders = Orders::selectRaw('store_id,member_id')
            ->whereNull('delivered_at')
            ->whereNotNull('requested_at')
            ->whereNull('accepted_at')
            ->distinct()
            ->get();
        foreach($orders as $order){
            $store = Store::selectRaw('promptpay, mobile_number, store_name, delivery_price, free_delivery_price, latitude, longitude, store_pic')->find($order->store_id);
            $member =  Members::selectRaw('firstname, lastname, latitude, longitude, mobile_number')->find($order->member_id);

            $order->distance = $this->distance($store->latitude, $store->longitude,$member->latitude, $member->longitude,"K");

            $order->store = $store;
            $order->member = $member;


            $order->items = Orders::with('product')->whereNull('delivered_at')
                    ->whereNotNull('requested_at')
                    ->whereNull('accepted_at')
                    ->get();
                
        }

        return response()->json( $orders );
    }
    public function update(Request $request){

      $ids = $request->get('ids');
      $type = $request->get('type');

      if($type==1){

     
        if(count($ids)>0){
          $order = Orders::whereNull('accepted_at')->where('id',$ids[0])->first();
          if($order){

            foreach($ids as $id){
              Orders::whereNull('accepted_at')->where('id',$id)->update([
                'accepted_at' =>  Carbon::now()
              ]);
            }

            return response()->json(  ['code'=>0,'msg'=>$ids ] );
          }else{
            return response()->json( ['code'=>-1,'msg'=>"การส่งนี้ถูกจองแล้ว"] );
          }
        }
      }else if($type == 2){
        foreach($ids as $id){
          Orders::where('id',$id)->update([
            'delivered_at' =>  Carbon::now()
          ]);
        }
        return response()->json(  ['code'=>0,'msg'=>$ids ] );
      }else if($type == 3){

      }

      return response()->json( $request->all() );
    }
    private function distance($lat1, $lon1, $lat2, $lon2, $unit) {
        if (($lat1 == $lat2) && ($lon1 == $lon2)) {
          return 0;
        }
        else {
          $theta = $lon1 - $lon2;
          $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
          $dist = acos($dist);
          $dist = rad2deg($dist);
          $miles = $dist * 60 * 1.1515;
          $unit = strtoupper($unit);
      
          if ($unit == "K") {
            return ($miles * 1.609344);
          } else if ($unit == "N") {
            return ($miles * 0.8684);
          } else {
            return $miles;
          }
        }
      }
      
      
    
}
