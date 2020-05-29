<?php

namespace App\Http\Controllers\v2;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Models\StoreType;
use App\Http\Models\ProductType;


class Refs extends Controller
{
    //
    public function index(Request $request){
        if(!$request->has('t')){
             return response()->json(401, ['message'=>'request rejected!!']);
        }
        switch($request->get('t')){
            case 'store_types':
                return $this->store_types();
                break;
            case 'product_types':
                return $this->product_types();
                break;
            default:
                break;
        }
        
    }
    private function store_types(){
        return response()->json(StoreType::get());
    }
    private function product_types(){
        return response()->json(ProductType::get());
    }
    
}
