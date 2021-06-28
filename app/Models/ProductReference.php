<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductReference extends Model
{
    use HasFactory;

    /**
     * The relationship between Product References and cities.
     * @return void
     */
    public function city()
    {
        return $this->belongsTo(City::class);
    }
}
