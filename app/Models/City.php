<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;

    /**
     * The relationship between cities and statuses.
     * @return void
     */
    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    /**
     * The relationship between cities and countries.
     * @return void
     */
    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
