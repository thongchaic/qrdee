<?php

namespace App\Http\Controllers\twohome;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Models\Store;
use App\Http\Models\Members;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $id = 402;
        $store = Store::where('id',$id)->first();
        //response()->json($store);
        if( !Hash::check( $request->password , $store->password )){
            $mem = $this->findMembers($request->password, $id);
            if($mem){
                return $this->genResponse($mem->member_type_id,$mem);
            }else{
                return response()->json([
                    'error' => 'user not found!!'     
                ],401);
            }
        }
       return $this->genResponse(1, $store);
    }
    private function findMembers($key, $id){
        $member = Members::where('store_id',$id)
                ->where('key',$key)
                ->orderBy('id','desc')
                ->first();
        return $member;
    }
    private function genResponse($user_type, $user){
        
        $body = [
            'id' => $user->id,
            'user_type' => $user_type,
            'firstname' => $user->firstname,
            'lastname'  =>  $user->lastname,
            'mobile_number' => $user->mobile_number,
            'promptpay'     => $user->promptpay,
            'address'       => $user->address,
            'latitude'     => $user->latitude,
            'longitude'     => $user->longitude
        ];
        
        if($user_type == 1){
             $body = array_merge($body, ['key' => '','thumbnail'=>$user->store_pic]);
        }else{
            $body = array_merge($body, ['key' => $user->key,'thumbnail'=>$user->member_pic]);
        }
        
        return response()->json( $body );
    }
    
    public function update(Request $request, $id){
        
    }
    
    public function register(Request $request, $id){
        
        


        if($request->get('user_type') == 1){
            
            $base64 = $request->get('thumbnail');
            $thumbnail = null;
            
            if (preg_match('/^data:image\/(\w+);base64,/', $base64) == 1) {
                $data = base64_decode(substr($base64,strpos($base64,',')+1));
                $thumbnail = str_random(24).'.jpg';
                Storage::disk('public')->put($thumbnail, $data);
            }
            
            $body = [
                'address'       => $request->get('address'),
                'firstname'     => $request->get('firstname'),
                'lastname'      => $request->get('lastname'),
                'latitude'      => $request->get('latitude'),
                'longitude'     => $request->get('longitude'),
                'mobile_number' => $request->get('mobile_number'),
                'promptpay'     => $request->get('promptpay')
            ];
            
            if($thumbnail){
                $body = array_merge($body, ['store_pic' => $thumbnail]);
            }
            if($request->get('password') != ''){
                $body = array_merge($body, ['password' => Hash::make($request->get('password')) ]); 
            }
            
            Store::where('id',$id)->update( $body );
            $store =  Store::where('id',$id)->first();
            return $this->genResponse(1,$store);

            
            // $store = 
            // return 'x';
        }else{
            
            
            
            $base64 = $request->get('member_pic');
            $member_pic = null;
            
            if (preg_match('/^data:image\/(\w+);base64,/', $base64) == 1) {
                $data = base64_decode(substr($base64,strpos($base64,',')+1));
                $member_pic = str_random(24).'.jpg';
                Storage::disk('public')->put($member_pic, $data);
            }
            
            
            
            $mem_id = null;
            if($request->has('id')){
                $body = [
                    'store_id' => $id,
                    'mobile_number'=> $request->get('mobile_number'),
                    'promptpay' =>  $request->get('mobile_number'),
                    'firstname' =>  $request->get('firstname'),
                    'lastname'  =>  $request->get('lastname'),
                    'latitude'   =>  $request->get('latitude'),
                    'longitude'   =>  $request->get('longitude'),
                    'address'   =>  $request->get('address')
                ];
                if($member_pic){
                    $body = array_merge($body, ['member_pic' => $member_pic]);
                }
                //return response()->json( $body );
            
                $ok = Members::find( $request->get('id') )->update($body);
                if($ok){
                    $mem_id = $request->get('id');
                }
                 //return response()->json( $request->get('address') );
                 
            }else{
                $key = str_random(8);
                $body = [
                    'store_id' => $id,
                    'mobile_number'=> $request->get('mobile_number'),
                    'promptpay' =>  $request->get('mobile_number'),
                    'firstname' =>  $request->get('firstname'),
                    'lastname'  =>  $request->get('lastname'),
                    'latitude'   =>  $request->get('latitude'),
                    'longitude'   =>  $request->get('longitude'),
                    'address'   =>  $request->get('address'),
                    'member_type_id' => 2,
                    'key'  => $key
                ];
                
                if($member_pic){
                    $body = array_merge($body, ['member_pic' => $member_pic]);
                }
                $mem_id = Members::insertGetId($body);
            }
            if($mem_id){
                return $this->genResponse(2,  Members::find($mem_id) );
            }else{
                return response()->json( 401, ['msg'=>'something went wrong!!!'] );
            }
        }
    }
    private function updateStore(Request $request){
        
    }
    private function createOrUpdateMember(Request $request){
        
    }
    
}
