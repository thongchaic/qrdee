<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class ServiceType extends Model
{

    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'service_types';
    protected $fillable = [
      'id',
      'service_id',
      'service_th',
      'service_en'
    ];
    protected $filter = [
      'id',
      'service_id',
      'service_th',
      'service_en'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function service(){
        return $this->hasOne('\App\Http\Models\Service', 'id', 'service_id')->withTrashed();
    }

}
