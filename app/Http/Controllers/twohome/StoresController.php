<?php

namespace App\Http\Controllers\twohome;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Models\Store;

class StoresController extends Controller
{
    public function info(){
        
        $store = Store::select(['id','store_name','firstname','lastname','promptpay','mobile_number','store_pic','latitude','address','longitude','facebook','line','created_at'])->find(402);

        return response()->json( $store );

    }
}
