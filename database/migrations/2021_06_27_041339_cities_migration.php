<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CitiesMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cities', function(Blueprint $table){
            $table->increments('id');
            $table->string('name');
            $table->string('acronym');
            $table->unsignedInteger('status_id');
            $table->unsignedInteger('country_id');
            $table->timestamps();

            $table->foreign('status_id')->references('id')->on('statuses')->onUpdate('no action')->onDelete('no action');
            $table->foreign('country_id')->references('id')->on('countries')->onUpdate('no action')->onDelete('no action');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cities');
    }
}
