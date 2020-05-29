<?php

namespace App\Http\Controllers\v2;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QRController extends Controller
{
    //
    public function index(Request $request){
        $promptpay = $request->get('promptpay');
        $price = $request->get('price');
        $pp = new \KS\PromptPay();
        $prompt_payload = $pp->generatePayload( $promptpay , $price);
        return response()->json(compact('promptpay','price','prompt_payload'));
        
    }
    
}
