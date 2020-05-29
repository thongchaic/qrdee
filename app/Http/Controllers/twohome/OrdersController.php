<?php

namespace App\Http\Controllers\twohome;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Models\Orders;
use App\Http\Models\Product;
use App\Http\Models\Members;
use App\Http\Models\User;
use Mqtt;
use Carbon\Carbon;
use App\Http\Models\TransactionProductItem;
use Illuminate\Support\Facades\Storage;

class OrdersController extends Controller
{
    public function index(Request $request, $id){
    
        if( $request->has('member')){
            $member = $request->get('member');
            $orders = Orders::with('product')->where('store_id','=',$id)
                    ->whereNull('delivered_at')
                    ->whereNull('canceled_at')
                    ->where('member_id',$member)
                    ->get();
                    
            return response()->json( $orders );
            
        }else{
            $orders = Orders::where('store_id','=',$id)
                ->whereNull('delivered_at')
                ->whereNull('canceled_at')
                ->groupBy('member_id')
                ->get(['member_id']);
            
                foreach($orders as $order){
                    $member = Members::where('id','=',$order->member_id)->select(['id','firstname','lastname','mobile_number','member_pic','address','latitude','longitude'])->first();
                    $order->member = $member;
                    $tmp = Orders::where('store_id','=',$id)
                        ->where('member_id','=',$member->id)
                        ->whereNull('delivered_at')
                        ->whereNull('canceled_at')
                        ->get();
                    $order->price = $tmp->sum('price');
                    $order->qty = $tmp->sum('qty');
                }
            return response()->json( $orders );
        }
       
    }
    
    public function store(Request $request,$id){
        
        $member = $request->get('member');
        $items = $request->get('cart');
        
        // for($i = 0; $i<count($items); $i++){
            
        // }
        $x = 0;
        foreach($items as $item){
            
            if(!empty($item['id'])){
                Orders::insertGetId([
                    'member_id' => $member,
                    'store_id'  => $id,
                    'product_id' => $item['id'],
                    'product_th' => $item['product_th'],
                    'price' => $item['price'],
                    'qty' => $item['qty'],
                    'notes' => $item['notes']
                ]);
                $x += $item['qty'];
            }else{
                Orders::insertGetId([
                    'member_id' => $member,
                    'store_id'  => $id,
                    'product_th' => $item['product_th'],
                    'price' => $item['price'],
                    'qty' => $item['qty'],
                    'notes' => $item['notes']
                ]);
                 $x += $item['qty'];
            }
        }
        
        Mqtt::ConnectAndPublish( "/2home/orders" , $x);
        return response()->json( compact('member') );
        
    }
    public function update(Request $request, $id){
        
        $order = Orders::with('product')->find($id);//
        if($order->product_id){
            
            TransactionProductItem::insert([
                    'product_th' => $order->product_th,
                    'member_id' => $order->member_id,
                    'store_id' =>  $order->store_id,
                    'product_id' => $order->product_id,
                    'price' => $order->price,
                    'cost' => $order->product->cost,
                    'amount' => $order->qty
            ]);
            
        }else{
             $product_id = Product::insertGetId([
                'store_id' => $order->store_id,
                'product_type_id' => 1,
                'product_th' => $order->product_th,     
                'price' => 0,
                'cost' => 0
             ]);
            TransactionProductItem::insert([
                    'product_th' => $order->product_th,
                    'member_id' => $order->member_id,
                    'store_id' =>  $order->store_id,
                    'product_id' => $product_id,
                    'price' => 0,
                    'cost' => 0,
                    'amount' => $order->qty
            ]);
        }
        
        $order->update(['delivered_at'=>Carbon::now()]);
        return response()->json( $order );
    }
    public function delete(Request $request, $id){
        $deleted = Orders::find($id)->update(['canceled_at'=>Carbon::now()]);
        return response()->json( compact('deleted') );
    }
    
    
    public function receipt(Request $request){
        
        $base64 = $request->get('receipt');
        $receipt = null;
        if (preg_match('/^data:image\/(\w+);base64,/', $base64) == 1) {
            $data = base64_decode(substr($base64,strpos($base64,',')+1));
            $receipt = str_random(24).'.jpg';
            Storage::disk('public')->put($receipt, $data);
        }
        if($receipt){
            $ids = $request->get('order_ids');
            foreach($ids as $id){
                Orders::find($id)->update(['receipt'=>$receipt]);
            }
        }
        return response()->json( $request->get('order_ids') );
    }
    
}
