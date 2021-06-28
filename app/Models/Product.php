<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * The relationship between products and products references.
     * @return void
     */
    public function product_references()
    {
        return $this->HasMany(ProductReference::class, 'product_id', 'id');
    }
}
