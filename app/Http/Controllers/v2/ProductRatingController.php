<?php

namespace App\Http\Controllers\v2;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Models\Product;
use App\Http\Models\ProductStars;
use App\Http\Models\ProductComments;

class ProductRatingController extends Controller
{
    public function index(Request $request,$id){
        $star = round(ProductStars::where('product_id',$id)->whereNotNull('star')->avg('star'),0);
        $comments = ProductComments::where('product_id',$id)->whereNotNull('comment')->orderBy('created_at','desc')->limit(10)->get(['comment']);
        return response()->json(compact('star','comments'));
    }
    
    public function store(Request $request,$id){
        
        if($request->has('comment')){
           return $this->addComment( $id, $request->get('comment') );
        }
        if($request->has('star')){
           return $this->addStar( $id, $request->get('star') );
        }
       
    }
    
    private function addComment($product_id,$comment){
         ProductComments::insert([
            'product_id'  =>  $product_id,
            'comment'      =>  $comment
        ]);
        return response()->json(compact('store_id','comment'));
    }
    
    private function addStar($product_id,$star){
        ProductStars::insert([
            'product_id'  =>  $product_id,
            'star'      =>  $star
        ]);
        return response()->json(compact('store_id','star'));
    }
}
