<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BannersMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('banners', function(Blueprint $table){
            $table->increments('id');
            $table->string('banner_url');
            $table->unsignedInteger('status_id');
            $table->unsignedInteger('city_id');
            $table->timestamps();

            $table->foreign('status_id')->references('id')->on('statuses')->onUpdate('no action')->onDelete('no action');
            $table->foreign('city_id')->references('id')->on('cities')->onUpdate('no action')->onDelete('no action');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('banners');
    }
}
