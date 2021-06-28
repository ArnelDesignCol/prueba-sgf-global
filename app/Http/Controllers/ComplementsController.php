<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;

class ComplementsController extends Controller
{
    /**
     * This function is used from obtain the cities with its relations.
     * @return array with the data obtained from the request.
     */
    public function getCities()
    {
        $cities = City::with(['status', 'country'])->get();
        return $this::response(true, array('type' => 'success', 'content' => 'Hecho.'), $cities);
    }
}
