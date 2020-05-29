<?php

namespace App\Http\Controllers\v2;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mqtt;

class MQTTBridgeController extends Controller
{
    public function bridge(Request $request){
        
        $topic = $request->get('topic');
        $msg = $request->get('msg');
        
        Mqtt::ConnectAndPublish( $topic ,  $msg );
        
        return response()->json( $request->all() );
        
    }
}
