<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Members extends Model
{
    use SoftDeletes;
    protected $table = 'members';
    
    protected $fillable = [
        'id',
        'mobile_number',
        'latitude',
        'longitude',
        'firstname',
        'lastname',
        'address',
        'promptpay',
        'member_pic'
    ];
    
}
