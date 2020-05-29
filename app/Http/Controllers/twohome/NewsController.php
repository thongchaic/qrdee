<?php

namespace App\Http\Controllers\twohome;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Models\News;
use Mqtt;

class NewsController extends Controller
{
    public function index(Request $request, $id){
        $offset = 0;
        if($request->has('offset')){
            $offset = $request->get('offset');
        }
        $news = News::offset($offset)
                    ->orderBy('created_at','desc')
                    ->limit(100)
                    ->get();
        return response()->json( $news );

    }
    public function store(Request $request){
        $news = News::insert($request->all());
        return response()->json( $news );
    }
    public function destroy($id){
        $news = News::find($id)->delete();
        return response()->json( $news );
    }
}
