<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Seeder;

class CountriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Country::create([
            'name' => 'Colombia',
            'acronym' => 'COL',
            'status_id' => 1,
            'flag' => 'https://laikapp.s3.amazonaws.com/dev_images_general/Avatar%20Colombia.png'
        ]);
    }
}
