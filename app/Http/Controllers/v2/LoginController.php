<?php

namespace App\Http\Controllers\v2;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Models\Store;
use App\Http\Models\AccessLog;
use App\Http\Models\AccessToken;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Auth;

class LoginController extends Controller
{

  public function index(Request $request){

      $promptpay = $request->get('promptpay');
      $password = $request->input('password');
      $store = Store::where('mobile_number',$promptpay)->orderBy('id','desc')->first();
      
      if( !Hash::check( $password , $store->password )){
        return response()->json([
            'status' => 'error',
            'code'=>-1,
            'data' => 'Invalid password!!']
            , 401);
      }
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
