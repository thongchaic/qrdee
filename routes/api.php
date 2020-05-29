<?php

Route::get('/', function () {
    return response()->json(['version' => 1.0, 'app' => 'QRDEE API Services - V.1.0']);
});

Route::group(['prefix' => 'v2'], function ($app) {
    
    Route::get('/', function () {
        return response()->json(['version' => 2.0, 'app' => 'QRDEE API Services - V.2.0']);
    });

    Route::post('rider', 'v2\RegisterController@rider');
    Route::get('rider', 'v2\RiderControllers@index');
    Route::put('rider', 'v2\RiderControllers@update');


    
    Route::post('register', 'v2\RegisterController@store');
    Route::post('login', 'v2\LoginController@index');
    Route::post('trnqr/{id}', 'v2\TransactionsController@store');
    
    Route::post('orders', 'v2\OrdersController@store');
    Route::delete('orders/{storeid}/{memid}', 'v2\OrdersController@destroy');
    Route::put('orders/{id}', 'v2\OrdersController@update');
    Route::get('orders/{id}', 'v2\OrdersController@get');


    Route::put('cancel_req/{id}', 'v2\OrdersController@cancel_req');

    
    Route::get('myorders/{id}', 'v2\OrdersController@myorders');

    Route::get('products', 'v2\ProductsController@get');
    Route::get('products/{id}', 'v2\ProductsController@get');
    
    Route::get('stores', 'v2\StoresController@get');
    Route::put('stores/{id}', 'v2\StoresController@update');
    
    Route::post('products/{id}', 'v2\ProductsController@store');
    Route::put('products/{id}', 'v2\ProductsController@update');
    
    Route::delete('products/{id}', 'v2\ProductsController@destroy');
    Route::get('store_types', 'v2\Refs@store_types');
    Route::get('qr', 'v2\QRController@index');
    
    Route::get('refs', 'v2\Refs@index');
    
    Route::get('mqtt', 'v2\MQTTBridgeController@bridge');
    Route::post('mqtt', 'v2\MQTTBridgeController@bridge');
    
    Route::get('volume', 'v2\StatsController@volume');
    Route::get('bestseller', 'v2\StatsController@bestseller');

    Route::get('rating/store/{id}', 'v2\StoreRatingController@index');
    Route::post('rating/store/{id}', 'v2\StoreRatingController@store');
    
    Route::get('rating/product/{id}', 'v2\ProductRatingController@index');
    Route::post('rating/product/{id}', 'v2\ProductRatingController@store');
    
    Route::get('sell_stats/{id}', 'v2\TransactionsNController@stats');
    Route::get('stats/{id}', 'v2\TransactionsNController@index');
    
    Route::post('auth/register', 'v2\AuthController@register');
    Route::post('auth/login', 'v2\AuthController@login');
    
    // For SuperAdmin *******************************
    Route::group(['middleware' => ['auth:api', 'role:SuperAdmin', 'throttle:60,1']], function ($router) {
        Route::resource('/users', 'v2\UserController');
        Route::resource('/roles', 'v2\RolesController');
        Route::resource('/surin/stores', 'v2\StoresNController');
        Route::resource('/surin/products', 'v2\ProductsNController');
        Route::resource('/surin/transactions', 'v2\TransactionsNController');
        Route::resource('/surin/dashboard', 'v2\DashboardController');
    });
    
});


Route::group(['prefix' => 'sandbox/'], function ($app) {
// test trust on first use (TOFU)
    //https://courses.csail.mit.edu/6.857/2016/files/36.pdf
});

Route::get('/phpinfo', function () {
    phpinfo();
});

//login
Route::post('v1/login', 'AuthController@login');
// $app->post('flogin', 'AuthController@flogin');
// $app->post('glogin', 'AuthController@glogin');
Route::post('v1/delivery_register', 'DeliveryController@delivery_register');
Route::post('v1/register_user', 'UserController@register_user');
Route::post('v1/register', 'StoreController@register');

// cooperative
Route::post('v1/member_inputss', 'CooperativeController@member_input');
Route::get('v1/cooperativememberss', 'CooperativeController@cooperativememberss');
Route::post('v1/cooperative_register', 'CooperativeController@cooperative_register');
Route::get('v1/cooperativemembers', 'CooperativeController@cooperativemembers');
Route::get('v1/cooperative_card/{id_card}', 'CooperativeController@cooperative_cards');
Route::get('v1/cooperativememberss_get/{id_card}', 'CooperativeController@cooperativememberss_get');
Route::delete('v1/member_delet/{id}', 'CooperativeController@member_delet');
Route::delete('v1/members_delet/{id}', 'CooperativeController@members_delet');
Route::post('v1/member_update/{id}', 'CooperativeController@member_update');
Route::get('v1/member/{id}', 'CooperativeController@member');
Route::post('v1/member_create', 'CooperativeController@member_create');
Route::resource('v1/cooperativemember', 'CooperativeController');
Route::get('v1/product_store/{id}', 'CooperativeController@product_store');
Route::get('v1/search_productss/{id}', 'CooperativeController@index');

Route::group(['prefix' => 'v1', 'middleware' => 'token'], function ($app) {
    $app->delete('delete_store/{id}', 'StoreController@delete_store');
    $app->post('products/update_product/{id}', 'ProductController@update_product');
    $app->resource('products', 'ProductController');
    // $app->post('new_product', 'ProductController@new_product');
    $app->post('products/destroy/{id}', 'ProductController@destroy');
    $app->get('produtc_type', 'RefController@produtc_type');
    $app->get('store_id/{id}', 'ProductController@store_id');
    $app->get('productscustomer/{id}', 'ProductController@productscustomer');
    $app->get('token', 'StoreController@tokenss');

    // เพิ่��สินค้า
    $app->post('products/store', 'ProductController@store'); //new_product

    $app->post('store_img', 'ProductController@store_img'); //new_store_img
    $app->get('dis', 'UserController@map_apis');
    $app->get('diss', 'UserController@map_apis');

    $app->get('store_type', 'RefController@store_type');
    $app->get('ref', 'RefController@ref');
    $app->get('store', 'StoreController@store');
    $app->get('stores', 'StoreController@stores');
    $app->get('storeall', 'StoreController@storeall');
    $app->post('update_store/{id}', 'StoreController@update_store');
    // $app->post('register', 'StoreController@register');//ยังไม่ได้ทั้งหมด
    $app->get('map_delivery', 'StoreController@map_api_delivery');
    $app->post('newmaps', 'StoreController@newmaps');
    $app->post('newmapsstore', 'StoreController@newmapsstore');

//Delivery
    $app->get('delivery_type', 'RefController@delivery_type');
    $app->get('delivery', 'DeliveryController@delivery');
    $app->delete('delete_delivery/{id}', 'DeliveryController@delete_delivery');
    $app->post('update_delivery/{id}', 'DeliveryController@update_delivery');

    // $app->post('update_delivery_status/{id}', 'DeliveryController@update_delivery_status');
    $app->get('delivery_status', 'DeliveryController@delivery_statuss');

    $app->get('product_logistic', 'DeliveryController@product_logistic');

    $app->get('delivery_statu', 'RefController@delivery_statu');
    $app->get('show_in_maps', 'DeliveryController@show_in_maps'); //ยังไม่ทำ
    $app->get('code_randomss', 'DeliveryController@code_randoms');

    //User

    $app->get('users', 'UserController@user');
    $app->post('update_user/{id}', 'UserController@update_user');
    $app->post('user_store_map/{id}', 'UserController@user_store_map');
    // $app->get('dis', 'UserController@map_apis');
    // $app->get('diss', 'UserController@map_apis');
    $app->get('allproduct/{id}', 'ProductController@allproduct');
    $app->get('map_d', 'UserController@map_d');
    $app->get('map_to/{id}', 'DeliveryController@map_to');
    $app->post('users_post', 'UserController@users_post');

    $app->get('sell_statss', 'TransactionController@stats');
    $app->get('sell_statss_order', 'TransactionController@sell_statss_order');
    $app->get('order', 'TransactionController@order');
    $app->delete('delete_order/{id}', 'TransactionController@delete_order');
    $app->delete('delete_logistic/{id}', 'DeliveryController@delete_logistic');
    $app->get('orders', 'TransactionController@orders');
    $app->get('order_store/{code_randoms}', 'TransactionController@order_store');
    $app->get('transaction_orders/{id}', 'TransactionController@transaction_orders');
    $app->get('customers', 'UserController@customer');
    $app->post('new_transaction', 'TransactionController@new_transaction');
    $app->post('new_transactionstore', 'TransactionController@new_transactionstore');
    $app->get('transaction', 'TransactionController@transaction');
    $app->get('transactions', 'TransactionController@transactions');
    $app->post('verify_transaction', 'TransactionController@verify_transaction');
    $app->post('verify_transactions', 'TransactionController@verify_transactions');
    $app->post('update_transaction/{id}', 'TransactionController@update_transaction');
    $app->get('transaction_store_maps/{store_id}', 'TransactionController@transaction_store_maps');
    $app->get('store_promptpay/{store_id}', 'TransactionController@store_promptpay');

    $app->post('transaction_order_input', 'TransactionController@transaction_order_input');
    $app->get('verified_transactionstore/{id}', 'TransactionController@verified_transactionstore');
    $app->post('verified_transactionstores', 'TransactionController@verified_transactionstores');

//transac_stat_info
    $app->post('transac_stat_info', 'TransactionController@transac_stat_info');
    $app->get('stats', 'TransactionController@stats');
    $app->get('sell_stats', 'TransactionController@sell_stats');
    $app->post('promptpayQR', 'QRController@promptpayQR');
    $app->post('promptpayQRs', 'QRController@promptpayQRs');

    $app->get('transaction_code_t', 'TransactionController@transaction_code_t');
    $app->get('transaction_codes', 'TransactionController@transaction_codes');
    $app->get('transaction_code/{code_randoms}', 'TransactionController@transaction_code');
    $app->post('transaction_delivery_show', 'TransactionController@transaction_delivery_show');
    $app->get('transaction_delivery_shows', 'TransactionController@transaction_delivery_shows');

    $app->get('product_store/{id}', 'SearchController@product_store');
    $app->get('search_products/{id}', 'SearchController@index');
    $app->get('search_code_randoms/{id}', 'TransactionController@search_code_randoms');

    // $app->post('product','ProductController@product');
    // $app->get('product_category','ProductController@product_category');
    // $app->post('update_product_category','ProductController@update_product_category');
    //$app->post('new_product_category','ProductController@new_product_category');
    // $app->post('update_product','ProductController@update_product');
    // $app->post('new_product','ProductController@new_product');
    // $app->get('search_product','ProductController@search_product');

    //$app->get('phpinfo' , 'QRController@phpinfo');
    // $app->get('xx',function(){return "XX";});

    // store_front
    $app->get('store_fronts', 'StoreFrontController@store_fronts');
    $app->get('store_front_products', 'StoreFrontController@store_front_products');

    $app->prefix('ref')->group(function () use ($app) {

        $app->resource('product_category', 'Ref\ProductCategoryController');

    });

});



Route::group(['prefix' => '2home'], function ($app) {
    Route::get('/', function () {
        return response()->json(['version' => 1.0, 'app' => '2Home API']);
    });
    
    Route::post('login', 'twohome\AuthController@login');
    Route::post('register/{id}', 'twohome\AuthController@register');
    
    Route::get('info', 'twohome\StoresController@info');
    
    
    Route::get('members', 'twohome\MembersController@index');
    Route::get('members/key', 'twohome\MembersController@key');
    Route::put('members/{id}', 'twohome\MembersController@update');
    Route::delete('members/{id}', 'twohome\MembersController@destroy');
    
    Route::get('products/{id}', 'twohome\ProductsController@index');
    Route::put('products/{id}', 'twohome\ProductsController@update');
    Route::post('products', 'twohome\ProductsController@store');
    Route::delete('products/{id}', 'twohome\ProductsController@destroy');
    
    Route::post('orders/{id}', 'twohome\OrdersController@store');
    Route::get('orders/{id}', 'twohome\OrdersController@index');
    Route::put('orders/{id}', 'twohome\OrdersController@update');
    Route::delete('orders/{id}', 'twohome\OrdersController@delete');
    
    Route::put('receipt', 'twohome\OrdersController@receipt');
    
    Route::get('news/{id}', 'twohome\NewsController@index');
    Route::post('news', 'twohome\NewsController@store');
    Route::delete('news/{id}', 'twohome\NewsController@destroy');
    
    Route::get('bestseller/{id}', 'twohome\ProductsController@bestseller');

    Route::get('refs', 'v2\Refs@index');
});
