<?php

namespace App\Http\Controllers\Ref;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Models\ProductCategory;
use Auth;

class ProductCategoryController extends Controller
{
  public function index() {
    $store = Auth::user();
    if( empty($store) ){
    return response()->json([
        'status' => 'fail',
        'code'=>-1,
        'data' => 'Authorization failed!']
        , 401);
    }

    $cats = ProductCategory::where('store_id','=',$store->id)
        ->where('cat_status','=',1)
        ->get();

    return response()->json($cats);
  }
}
