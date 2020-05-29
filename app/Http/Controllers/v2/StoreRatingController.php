<?php

namespace App\Http\Controllers\v2;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Models\Store;
use App\Http\Models\StoreStars;
use App\Http\Models\StoreComments;


class StoreRatingController extends Controller
{
    
    public function index(Request $request,$id){
        $star = round(StoreStars::where('store_id',$id)->whereNotNull('star')->avg('star'),0);
        $comments = StoreComments::where('store_id',$id)->whereNotNull('comment')->orderBy('created_at','desc')->limit(10)->get(['comment']);
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
    
    private function addComment($store_id,$comment){
         StoreComments::insert([
            'store_id'  =>  $store_id,
            'comment'      =>  $comment
        ]);
        return response()->json(compact('store_id','comment'));
    }
    
    private function addStar($store_id,$star){
        StoreStars::insert([
            'store_id'  =>  $store_id,
            'star'      =>  $star
        ]);
        return response()->json(compact('store_id','star'));
    }
    
}
