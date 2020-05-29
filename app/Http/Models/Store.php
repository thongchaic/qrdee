<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Store extends Authenticatable
{
    use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'stores';
    protected $fillable = [
        'id',
        'username',
        'email',
        'password',
        'facebook',
        'google',
        'line',
        'promptpay',
        'citizen_number',
        'mobile_number',
        'initial',
        'firstname',
        'lastname',
        'store_name',
        'latitude',
        'longitude',
        'store_pic',
        'store_type_id',
        'store_status_id',
        'store_type',
        'last_access',
        'verified',
        'license_exp_date',

    ];
    protected $filter = [
        'id',
        'username',
        'email',
        'facebook',
        'google',
        'line',
        'promptpay',
        'mobile_number',
        'initial',
        'firstname',
        'lastname',
        'store_name',
        'latitude',
        'longitude',
        'store_type_id',
        'store_status_id',
        'store_pic',
        'store_type',
        'last_access',
        'verified',
        'license_exp_date',

    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'encrypted_private_key',
    ];

    public function store_status()
    {
        return $this->hasOne('\App\Http\Models\StoreStatus', 'id', 'store_status_id');
    }
    public function store_type()
    {
        return $this->hasOne('\App\Http\Models\StoreType', 'id', 'store_type_id');
    }
    public function product_count(){
        return $this->hasOne('\App\Http\Models\Product', 'store_id', 'id')->select(\DB::raw('store_id, count(*) as count'))->groupBy('store_id');
    }
    public function rating(){
         return $this->hasMany('\App\Http\Models\StoreStars', 'store_id', 'id');
    }
    

}
