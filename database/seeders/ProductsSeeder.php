<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductReference;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $product = Product::create([
            'name' =>  'Pedigree Alimento Húmedo Para Perro Cachorro Carne Sobre',
            'product_image_url' => 'https://laikapp.s3.amazonaws.com/dev_images_products/1469_PEDIGREE_ALIMENTO_H%C3%9AMEDO_PARA_PERRO_CACHORRO_CARNE_SOBRE_1596236426_500x500.png',
            'brand' => 'Pedigree',
            'status_id' => 1,
        ]);

        ProductReference::create([
            'product_id' => $product->id,
            'reference' => '100Gr',
            'price' => '2250',
            'price_laika_member' => '2000',
            'status_id' => 1,
            'city_id' => 1
        ]);

        ProductReference::create([
            'product_id' => $product->id,
            'reference' => '100Gr',
            'price' => '2250',
            'price_laika_member' => '2000',
            'status_id' => 1,
            'city_id' => 2
        ]);

        ProductReference::create([
            'product_id' => $product->id,
            'reference' => '300Gr',
            'price' => '3250',
            'price_laika_member' => '2500',
            'status_id' => 1,
            'city_id' => 2
        ]);

        $product1 = Product::create([
            'name' => 'Dog Chow Todos Los Tamaños Con Carne',
            'product_image_url' => 'https://laikapp.s3.amazonaws.com/dev_images_products/18829_PURINA___DOG_CHOW_TODOS_LOS_TAMA__OS_CON_CARNE_1602345049_500x500.jpg',
            'brand' => 'Dog Chow',
            'status_id' => 1,
        ]);

        ProductReference::create([
            'product_id' => $product1->id,
            'reference' => '300Gr',
            'price' => '3250',
            'price_laika_member' => '2500',
            'status_id' => 1,
            'city_id' => 1
        ]);

        $product2 = Product::create([
            'name' => 'Dog Chow Festival Pavo Y Pollo Lata',
            'product_image_url' => 'https://s3.us-east-1.amazonaws.com/laikapp/images_products/4fac35df1436a1afd4fc74a0ddb4729e.jpg',
            'brand' => 'Dog Chow',
            'status_id' => 1,
        ]);

        ProductReference::create([
            'product_id' => $product2->id,
            'reference' => '300Gr',
            'price' => '3250',
            'price_laika_member' => '2500',
            'status_id' => 1,
            'city_id' => 1
        ]);

        $product3 = Product::create([
            'name' => 'Arena Petys Aglomerante para gatos 10 Kg',
            'product_image_url' => 'https://laikapp.s3.amazonaws.com/dev_images_products/43096_Arena_Petys_Aglomerante_para_gatos_10_Kg_1619014821_0_1000x1000.jpg',
            'brand' => 'Petys',
            'status_id' => 1,
        ]);

        ProductReference::create([
            'product_id' => $product3->id,
            'reference' => '10Kg',
            'price' => '34838',
            'price_laika_member' => '30967',
            'status_id' => 1,
            'city_id' => 1
        ]);

    }
}
