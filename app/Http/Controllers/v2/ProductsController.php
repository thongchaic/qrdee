<?php

namespace App\Http\Controllers\v2;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Models\ProductType;
use App\Http\Models\Product;
use App\Http\Models\Store;
use Illuminate\Support\Facades\Storage;
use App\Http\Models\ProductStars;
use App\Http\Models\ProductComments;
use Carbon\Carbon;

class ProductsController extends Controller
{
    public function get(Request $request, $id=0){
        
        if($request->has('id')){
            return response()->json( Product::where('id',$request->get('id'))->first() );
        }
        if($id<=0){
            return response()->json(['message'=>'request rejected!']);
        }
        $products = Product::where('store_id',$id)->with('comments')->get(['id','product_th','details_th','thumbnail','price']);
        foreach($products as $p){
            $p->star = round(ProductStars::where('product_id',$p->id)->avg('star'),0);
        }
        return response()->json( $products );
        
    }
    
    public function store(Request $request,$id){
        
        $thumbnail = null;
        if($request->has('thumbnail')){
            
            $base64 = $request->get('thumbnail');
            if (preg_match('/^data:image\/(\w+);base64,/', $base64) == 1) {
                $data = base64_decode(substr($base64,strpos($base64,',')+1));
                $thumbnail = str_random(24).'.jpg';
                Storage::disk('public')->put($thumbnail, $data);
                
            }else{
                $thumbnail = $base64;
            }
         }
        
         $data = [
            'store_id' => $id,
            'product_type_id' => $request->get('product_type_id'),
            'product_th' => $request->get('product_th'),     
            'details_th' => $request->get('details_th'),
            'price' => $request->get('price'),
            'cost' => $request->get('cost'),
            'thumbnail' => $thumbnail
         ];
         
         $product = Product::insert($data);
         
         return response()->json( $data );
        
    }
    
    public function update(Request $request, $id){
        
        $thumbnail = null;
        // $base64 = $request->get('thumbnail');
        // return response()->json( preg_match('/^data:image\/(\w+);base64,/', $base64) );

        if($request->has('thumbnail')){
            
            $base64 = $request->get('thumbnail');
            $data = null;
            if (preg_match('/^data:image\/(\w+);base64,/', $base64) == 1) {
                $data = base64_decode(substr($base64,strpos($base64,',')+1));
                $thumbnail = str_random(24).'.jpg';
                Storage::disk('public')->put($thumbnail, $data);
            }
            
            $data_update = [
                'product_type_id' => $request->get('product_type_id'),
                'product_th' => $request->get('product_th'),     
                'details_th' => $request->get('details_th'),
                'price' => $request->get('price'),
                'cost' => $request->get('cost')
            ];
            
            if($data) {
                $data_update = array_merge($data_update, ['thumbnail' => $thumbnail]);
            }
         
            $product = Product::where('id',$id)->update($data_update);
            
         }else{
            //  $data_update = [
            //     'product_type_id' => $request->get('product_type_id'),
            //     'product_th' => $request->get('product_th'),     
            //     'details_th' => $request->get('details_th'),
            //     'price' => $request->get('price'),
            //     'cost' => $request->get('cost')
            // ];
            // $product = Product::where('id',$id)->update($data_update);
         }
         
         return response()->json( $product );
        
    }
    
    public function destroy($id){
        $product = Product::where('id',$id)->delete();
        return response()->json( $product );
    }
    
    
    
}
