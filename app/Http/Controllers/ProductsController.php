<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /**
     * This function iss used from obtain all products by city.
     * @param integer $request->city, with the city of end user.
     * @return array with the data obtained of resquest.
     */
    public function getProducts(Request $request)
    {
        if(isset($request->city)){
            // $products = Product::with(['product_references'])->whereHas('product_references', function($query) use ($request){
            //     $query->whereCityId($request->city);
            // })->get();
        }else {
            $products = Product::with(['product_references' => function($query){
                $query->whereHas('city', function($q){
                    $q->where('id', 1);
                });
            }])->get();
        }
        
        return $this::response(true, array('type' => 'success', 'content' => 'Hecho'), $products);
    }
}
