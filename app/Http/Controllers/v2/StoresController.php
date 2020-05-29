<?php

namespace App\Http\Controllers\v2;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Models\Store;
use App\Http\Models\StoreStars;
use App\Http\Models\StoreComments;

class StoresController extends Controller
{
    //
    public function get(Request $request){
       
        if($request->has('latitude') && $request->has('longitude')){
            $radius = 150;
            $q = '';
            $offset = 0;
            if($request->has('radius')){
                $radius = $request->get('radius');
            }
            if($request->has('q')){
               $q = $request->get('q');
            }
            if($request->has('offset')){
               $offset = $request->get('offset');
            }
            return $this->searchByRadius($radius, $q, $offset, $request->get('latitude'),$request->get('longitude'));
        }
    }

    private function searchByRadius($radius = 150, $q='', $offset=0, $latitude, $longitude){
        $stores = Store::whereNotNull('latitude')
            ->whereNotNull('longitude')
            ->select([
                \DB::raw("round(( 6371 * acos( cos( radians($latitude) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians($longitude) ) + sin( radians($latitude) ) * sin( radians( latitude ) ) ) ) ,2) as distance"),
                'stores.store_name',
                'stores.store_pic',
                'stores.id',
                'stores.mobile_number',
                'stores.promptpay',
                'stores.latitude',
                'stores.longitude',
                'stores.firstname',
                'stores.lastname',
                'stores.delivery_price',
                'stores.free_delivery_price',
                'stores.store_type_id'
              ])
            ->leftJoin('products', 'stores.id', '=', 'products.store_id')
            ->having('distance', '<=', $radius)
            ->where('stores.verified',1)
            ->where(function ($query) use($q) {
               $query->where('stores.store_name','LIKE','%'.$q.'%')
                     ->orWhere('products.product_th', 'LIKE', '%' . $q . '%');
            })
            ->orderBy('distance')
            ->with('store_type')
            ->with(['product_count' =>function($q){
                return $q->whereNotNull('store_id');
            }])
            ->distinct()
            ->offset($offset)
            ->limit(2000)
            ->get();
        //$filltered = $stores->where('id','<>',null);//product_count
        $filltered = $stores->where('product_count','<>',null);//product_count
        foreach($filltered as $f){
            $f->star = round(StoreStars::where('store_id',$f->id)->avg('star'),0);
        }
        return response()->json( $filltered->values() );
    }
    
    public function update(Request $request,$id) {
        
        $store = Store::find($id);
        $store->store_name = $request->get('store_name');
        $store->promptpay = $request->get('promptpay');
        $store->mobile_number = $request->get('mobile_number');
        $store->latitude = $request->get('latitude');
        $store->longitude = $request->get('longitude');
        $store->store_type_id = $request->get('store_type_id');
        //$store->store_address = $request->get('store_address');
        $store->firstname = $request->get('firstname');
        $store->delivery_price = $request->get('delivery_price');
        
        $store->lastname = $request->get('lastname');
        
        if($request->has('free_delivery_price')){// app v0.1.4 support 
            $store->free_delivery_price = $request->get('free_delivery_price');
        }

        if($request->has('store_pic')){
            
            $base64 = $request->get('store_pic');
            if (preg_match('/^data:image\/(\w+);base64,/', $base64) == 1) {
                $data = base64_decode(substr($base64,strpos($base64,',')+1));
                $store_pic = str_random(24).'.jpg';
                Storage::disk('public')->put($store_pic, $data);
                $store->store_pic = $store_pic;
            }
            
        }

        $store->save();
        
        return response()->json([
            'id'=>$store->id,
            'store_name'=>$store->store_name,
            'promptpay' => $store->promptpay,
            'mobile_number' => $store->mobile_number,
            'access_token'=> $store->access_token,
            'latitude' => $store->latitude,
            'longitude' => $store->longitude,
            'store_type_id' => $store->store_type_id,
            'store_address' => $store->store_address,
            'firstname' => $store->firstname,
            'lastname' => $store->lastname,
            'delivery_price' => $store->delivery_price,
            'free_delivery_price' => $store->free_delivery_price,
            'store_pic' => $store->store_pic
        ]);


    }
}
