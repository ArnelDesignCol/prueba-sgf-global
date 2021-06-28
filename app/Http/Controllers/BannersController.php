<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;

class BannersController extends Controller
{
    /**
     * This function is used from obtain all banners by city.
     * @param integer $request->city, with the city of the end user.
     * @return array witth the data obtained in the request.
     */
    public function getBanners(Request $request)
    {
        if(isset($request->city)){
            $banners = Banner::whereCityId($request->city)->whereStatusId($this->activeStatus)->get();
            return $this::response(true, array('type' => 'success', 'content' => 'Hecho.'), $banners);
        }else{
            $banners = Banner::whereCityId($this->bogotaCity)->whereStatusId($this->activeStatus)->get();
            return $this::response(true, array('type' => 'success', 'content' => 'Hecho.'), $banners);
        }
    }
}
