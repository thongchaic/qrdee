<?php

namespace App\Http\Controllers\v2;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Models\Orders;
use App\Http\Models\Product;
use App\Http\Models\Members;
use App\Http\Models\User;
use Mqtt;
use Carbon\Carbon;

class OrdersController extends Controller
{
    //
    public function get(Request $request, $id){
        
        $orders = Orders::where('store_id','=',$id)
                //->where('order_status_id','<',2)
                ->whereNull('delivered_at')
                ->groupBy('member_id')
                ->get(['member_id']);
                
        foreach($orders as $order){
            $member = Members::where('id','=',$order->member_id)->select(['id','firstname','lastname','mobile_number','promptpay','latitude','longitude'])->first();
            $order->member = $member;
            $tmp = Orders::with('product')
                ->where('store_id','=',$id)
                ->where('member_id','=',$member->id)
                //->where('order_status_id','<',2)
                ->whereNull('delivered_at')
                ->get();
            $order->price = $tmp->sum('price');
            $order->orders = $tmp;
        }
                  
        return response()->json( $orders );
        
    }
    
    public function store(Request $request){
        
        $member = $request->get('member');
        
        if(!$member['id']){
            //new member 
            $member['id'] = Members::insertGetId([
                'mobile_number' => $member['mobile_number'],
                'latitude' => $request->get('latitude'),
                'longitude' => $request->get('longitude'),
                'firstname' => $member['firstname'],
                'lastname'=> $member['lastname']
            ]);
            User::insertGetId([
                'mobile_number' => $member['mobile_number'],
                'latitude' => $request->get('latitude'),
                'longitude' => $request->get('longitude'),
                'firstname' => $member['firstname'],
                'lastname'=> $member['lastname']
            ]);
            
        }else{
            
            Members::find($member['id'])->update([
                'mobile_number' => $member['mobile_number'],
                'latitude' => $request->get('latitude'),
                'longitude' => $request->get('longitude'),
                'firstname' => $member['firstname'],
                'lastname'=> $member['lastname']
            ]);
            // User::find($member['id'])->update([
            //     'mobile_number' => $member['mobile_number'],
            //     'latitude' => $request->get('latitude'),
            //     'longitude' => $request->get('longitude'),
            //     'firstname' => $member['firstname'],
            //     'lastname'=> $member['lastname']
            // ]);
            
            
        }
        
        $items = $request->get('items');
        
        foreach($items as $item){
              Orders::insertGetId([
                'member_id' => $member['id'],
                'store_id'  => $item['store_id'],
                'product_id' => $item['product_id'],
                'price' => $item['price'],
                'qty' => $item['qty'],
                'latitude' => $request->get('latitude'),
                'longitude' => $request->get('longitude'),
                'notes' => $request->get('notes')
            ]);
            Mqtt::ConnectAndPublish( "/qrdee/store/".$item['store_id'] ,  $item['price'] );
        }
        return response()->json( compact('member','items') );
    }
    
    public function destroy($storeid,$memid){
        $del = Orders::where('store_id',$storeid)
            ->where('member_id',$memid)
            //->where('order_status_id','<',2)
            ->whereNull('delivered_at')
            ->delete();
        return response()->json( $del );
        
    }

    public function cancel_req(Request $request, $id){
        $order = Orders::find($id);
        $order->requested_at = null;
        $order->save();
        return response()->json( $order );

    }

    public function update(Request $request, $storeid){


        //********** ORDERS */
        if($request->has('request_riders')){

            $memid = $request->get('member_id');
            $order = Orders::where('store_id',$storeid)
                ->where('member_id',$memid)
                ->update([
                    'requested_at' => Carbon::now()
                ]);
            return response()->json( $order );
    
        }

        $memid = $request->get('member_id');
        $order = Orders::where('store_id',$storeid)
            ->where('member_id',$memid)
            ->update([
                'order_status_id'=>3, 
                'delivered_at' => Carbon::now()
            ]);
        return response()->json( $order );
    }
    
    public function myorders(Request $request, $id){
        
        $orders = Orders::where('member_id',$id)
            //->where('order_status_id','<',2)
            ->whereNull('delivered_at')
            ->with('product')
            ->with('store')
            ->get();
        
        return response()->json( $orders );
    }
    public function riderOrders(){
       
    }
}
