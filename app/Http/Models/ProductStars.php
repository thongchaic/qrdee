<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductStars extends Model
{
    use SoftDeletes;
    protected $table = 'product_stars';
    
}
