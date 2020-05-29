<?php

namespace App\Http\Controllers\v2;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Models\Store;
use App\Http\Models\AccessLog;
use App\Http\Models\AccessToken;
use App\Http\Models\ProductCategory;
use Auth;
use App\Http\Models\User;

class RegisterController extends Controller
{
    public function store(Request $request){

        // if(Store::where('promptpay', '=', $request->input('promptpay'))->exists()){
        //     return response()->json(['message'=>'ร้านนี้มีอยู่แล้ว!!']);
        // }
        
        $store_name = $request->input('store_name');
        $latitude = $request->input('latitude');
        $longitude = $request->input('longitude');
        $store_type_id = $request->input('store_type_id');
        $promptpay =  $request->input('promptpay');
        $access_token = base64_encode(str_random(51));
        $delivery_price = 20;
        $free_delivery_price = 300;
        $store_id = Store::insertGetId([
            'password' =>  Hash::make($request->input('password')),
            'promptpay' => $promptpay,
            'mobile_number' => $promptpay,
            'store_name' => $store_name,
            'latitude' => $latitude,
            'longitude' => $longitude,
            'access_token' => $access_token,
            'store_type_id' => $store_type_id,
            'delivery_price' => $delivery_price,
            'free_delivery_price' => $free_delivery_price,
            'verified' => 1
        ]);

        ProductCategory::insert([
            'store_id' => $store_id,
            'cat_th' => 'ทั่วไป',
            'cat_en' => 'common'
        ]);

        AccessToken::insert([
            'store_id' => $store_id,
            'access_token' => $access_token,
            'platform' => $request->header('user-agent')
        ]);

        return response()->json([
            'id'=>$store_id,
            'store_name'=>$store_name,
            'promptpay' => $promptpay,
            'mobile_number' => $promptpay,
            'access_token'=>$access_token,
            'latitude' => $latitude,
            'longitude' => $longitude,
            'store_type_id' => $store_type_id,
            'store_address' => null,
            'firstname' => null,
            'lastname' => null,
            'delivery_price' => $delivery_price,
            'free_delivery_price' => $free_delivery_price,
            'store_pic' => null
        ]);
    }

    public function rider(Request $request){

        $user = User::create([
            'member_type_id' => 2,
            'car_number'    => $request->get('car_number'),
            'firstname'    => $request->get('firstname'),
            'lastname'    => $request->get('lastname'),
            'mobile_number'    => $request->get('mobile_number'),
            'password'    =>Hash::make($request->input('password'))
        ]);

            


        return response()->json( $user );
    }
    
}
