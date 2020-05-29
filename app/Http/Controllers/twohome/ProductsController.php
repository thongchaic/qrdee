<?php

namespace App\Http\Controllers\twohome;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Models\ProductType;
use App\Http\Models\Product;
use App\Http\Models\Store;
use Illuminate\Support\Facades\Storage;
use App\Http\Models\ProductStars;
use App\Http\Models\ProductComments;
use Carbon\Carbon;
use App\Http\Models\TransactionProductItem;
use DB;
class ProductsController extends Controller
{
    public function index(Request $request, $id=0){
        
        //return response()->json( $request->all() );
        if($request->has('id')){
            return response()->json( Product::where('id',$request->get('id'))->first() );
        }
        if($id<=0){
            return response()->json(['message'=>'request rejected!']);
        }
        $q = $request->get('q');
        if(!$q){
            $q='';
        }
        $offset=0;
        if($request->has('offset')){
            $offset=$request->get('offset');
        }
        $products = Product::where('store_id',$id)
            ->where('product_th','LIKE','%'.$q.'%')
            ->with('total')
            // ->with(['total'=>function($q){
            //     $q->select(DB::raw('sum(amount) as bonusQuantity'));
            // }])
            //->with('comments')
            ->offset($offset)
            ->limit(200)
            ->get(['id','product_th','details_th','thumbnail','price','cost','product_type_id']);
        // foreach($products as $p){
        //     $p->star = round(ProductStars::where('product_id',$p->id)->avg('star'),0);
        // }
        return response()->json( $products );
        
    }
    
    public function store(Request $request){
        
        $thumbnail = null;
        if($request->has('thumbnail')){
            
            $base64 = $request->get('thumbnail');
            if (preg_match('/^data:image\/(\w+);base64,/', $base64) == 1) {
                $data = base64_decode(substr($base64,strpos($base64,',')+1));
                $thumbnail = str_random(24).'.jpg';
                Storage::disk('public')->put($thumbnail, $data);
                
            }
         }
        
         $body = [
            'store_id' => 402,
            'product_type_id' => $request->get('product_type_id'),
            'product_th' => $request->get('product_th'),     
            'details_th' => $request->get('details_th'),
            'price' => $request->get('price'),
            'cost' => $request->get('cost')
         ];
         if($thumbnail){
             $body = array_merge($body, ['thumbnail' => $thumbnail]);
         }
         
         $product = Product::insert($body);
         
         return response()->json( $body );
        
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
            return response()->json( $data_update );
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
    
    
    public function bestseller(Request $request,$id=0){
        //TransactionProductItem::
        $offset = 0;
        if($request->has('offset')){
            $offset = $request->get('offset');
        }
        
        if($id == 402){
            $items = TransactionProductItem::where('store_id',402)
                ->select(\DB::raw('sum(amount) as totoal_sell, sum(price) as totoal_price, product_id as product_id'))
                ->groupBy('product_id')
                ->orderBy('totoal_sell', 'desc')
                ->with('product_info')
                ->limit(100)
                ->get();
            $filtered = $items->where('product_info','<>',null);
            return response()->json( $filtered->values() );
        }else{
            $items = TransactionProductItem::where('member_id',$id)
                ->select(\DB::raw('sum(amount) as totoal_sell, sum(price) as totoal_price, product_id as product_id'))
                ->groupBy('product_id')
                ->orderBy('totoal_sell', 'desc')
                ->with('product_info')
                ->limit(100)
                ->get();
            $filtered = $items->where('product_info','<>',null);
            return response()->json( $filtered->values() );
        }
        
        return response()->json( 'something went wrong!!' );
        
    }
    
    
    
}
