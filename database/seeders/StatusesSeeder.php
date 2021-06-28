<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Seeder;

class StatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Status::create([
            'name' => 'Activo',
            'model' => 'All'
        ]);

        Status::create([
            'name' => 'Inactivo',
            'model' => 'All'
        ]);
    }
}
