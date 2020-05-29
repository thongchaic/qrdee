<?php

namespace App\Http\Controllers\v2;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Models\Transaction;
use App\Http\Models\Product;
use App\Http\Models\TransactionProductItem;
use App\Http\Models\Store;

class TransactionsController extends Controller
{
    public function store(Request $request,$id){
        
        $store = Store::where('id',$id)->first();
        $products  = $request->get('products');
        $price  = $request->get('price');
        $prompt_payload  = $request->get('prompt_payload');
        
        // $pp = new \KS\PromptPay();
        // $playload = $pp->generatePayload( $store->promptpay , $price);

        $trn_token = 'trn_'.base64_encode(str_random(60));
        $body = [
            'trn_token' => $trn_token,
            'price' => $price,
            'store_id' => $store->id,
            'prompt_payload' => $prompt_payload,
            'verified'=> 1
        ];
        $trn_id = Transaction::insertGetId($body);
        
        if($products){
            foreach($products as $product){
                TransactionProductItem::insert([
                    'transaction_id' => $trn_id,
                    'product_th' => $product['product_th'],
                    'store_id' =>  $store->id,
                    'product_id' => $product['id'],
                    'price' => $product['price']
                ]);
            }
        }
        
        return response()->json($body);
        
    }
}
