<?php

namespace App\Http\Controllers\v2;

use App\Http\Controllers\v2\BaseController;
use App\Http\Models\Product;
use Illuminate\Http\Request;

class ProductsNController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
        // https://qrdee.co/api/v2/surin/products?searchTerm=&page=1&per_page=10
        // https://qrdee.co/api/v2/surin/stores?searchTerm=&page=1&per_page=10
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search_query = $request->searchTerm;
        $perPage = $request->per_page;
        $dataset = Product::select([
            'products.id', 'products.store_id', 'products.code_product', 'products.product_th', 'products.cost', 'products.price', 'products.instock', 
            'products.reorder_point', 'stores.store_name', 'products.product_type_id', 'products.details_th', 'thumbnail',
            'produtc_types.cat_th', 'products.updated_at',
        ])
            ->leftJoin('stores', 'products.store_id', '=', 'stores.id')
            ->leftJoin('produtc_types', 'products.product_type_id', '=', 'produtc_types.id')
            // ->where('products.store_id', '<>', 199)
            ->where(function ($query) use ($search_query) {
                if ($search_query) {
                    $query->orWhere("products.product_th", 'LIKE', '%' . $search_query . '%')
                        ->orWhere("products.code_product", 'LIKE', '%' . $search_query . '%');
                }
            })
            ->orderBy('products.id', 'desc')
            ->paginate($perPage)
            ->toArray();

        if ($search_query) {
            $dataset['searchTerm'] = $search_query ?: '';
        } else {
            $dataset['searchTerm'] = $search_query ? null : '';
        }

        return response()->json($dataset);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        $product = Product::find($id);
        $product->update($input);

        return $this->sendResponse([], 'Product updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();

        return $this->sendResponse([], 'Product deleted successfully.');
    }
}
