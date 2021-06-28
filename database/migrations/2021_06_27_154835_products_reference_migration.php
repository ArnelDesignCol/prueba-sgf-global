<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ProductsReferenceMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_references', function(Blueprint $table){
            $table->increments('id');
            $table->unsignedInteger('product_id');
            $table->string('reference');
            $table->string('price');
            $table->string('discount')->nullable();
            $table->string('type_discount')->nullable();
            $table->string('price_laika_member')->nullable();
            $table->unsignedInteger('status_id');
            $table->unsignedInteger('city_id');
            $table->timestamps();

            $table->foreign('status_id')->references('id')->on('statuses')->onUpdate('no action')->onDelete('no action');
            $table->foreign('city_id')->references('id')->on('cities')->onUpdate('no action')->onDelete('no action');
            $table->foreign('product_id')->references('id')->on('products')->onUpdate('no action')->onDelete('no action');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_references');
    }
}
