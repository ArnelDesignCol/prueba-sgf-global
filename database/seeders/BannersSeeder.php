<?php

namespace Database\Seeders;

use App\Models\Banner;
use Illuminate\Database\Seeder;

class BannersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Banner::create([
            'banner_url' => 'https://laikapp.s3.amazonaws.com/dev_images_banners/1620148926ganate%20una%20casa%20para%20tu%20peludo_Mesa%20de%20trabajo%201%20copia.jpg',
            'status_id' => 1,
            'city_id' => 1
        ]);

        Banner::create([
            'banner_url' => 'https://laikapp.s3.amazonaws.com/dev_images_banners/1622145501ICONOS_Mesa%20de%20trabajo%201%20copia%204%20copy%2012.png',
            'status_id' => 1,
            'city_id' => 1
        ]);

        Banner::create([
            'banner_url' => 'https://laikapp.s3.amazonaws.com/dev_images_banners/1620148926ganate%20una%20casa%20para%20tu%20peludo_Mesa%20de%20trabajo%201%20copia.jpg',
            'status_id' => 1,
            'city_id' => 1
        ]);

        Banner::create([
            'banner_url' => 'https://laikapp.s3.amazonaws.com/dev_images_banners/1623446231GRANDE%20itau%20banner%20ok-02%20%281%29.png',
            'status_id' => 1,
            'city_id' => 1
        ]);
    }
}
