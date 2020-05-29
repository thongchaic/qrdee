<?php

namespace App\Http\Controllers\twohome;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Models\Members;
use Carbon\Carbon;
use App\Http\Models\TransactionProductItem;
use DB;
class MembersController extends Controller
{
    //
    public function index(){
       $members =  Members::where('store_id',402)
                    ->orderBy('created_at','desc')
                    ->get(['id','store_id','mobile_number','promptpay','firstname','lastname','key','latitude','longitude','address','member_pic', 'created_at','approved_at']);
       foreach($members as $member){
           $count = TransactionProductItem::where('member_id',$member->id)->count('member_id');
           $member->bought_count = $count;
       }
    //   $notapproved =  Members::where('store_id',402)
    //                 ->whereNull('approved_at')
    //                 ->orderBy('created_at')
    //                 ->get(['id','store_id','mobile_number','promptpay','firstname','lastname','latitude','longitude','address','member_pic', 'created_at','approved_at']);
       return response()->json( $members );
    }
    public function key(){
        $item = TransactionProductItem::where('store_id',402)->groupBy('member_id')->select('member_id', \DB::raw('count(member_id) as total'))->get(['member_id']);
        return  response()->json( $item );
    }
    
    public function destroy($id){
        $member = Members::find($id)->delete();
        return response()->json( $member );
    }
    
}
