<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Seeder;

class CitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        City::create([
            'name' => 'Bogotá D.C.',
            'acronym' => 'BOG',
            'status_id' => 1,
            'country_id' => 1
        ]);

        City::create([
            'name' => 'Medellín',
            'acronym' => 'BOG',
            'status_id' => 1,
            'country_id' => 1
        ]);
    }
}
