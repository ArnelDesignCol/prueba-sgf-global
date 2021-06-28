<template>
  <v-container class="categories">
    <h2 class="text-primary">Categorias</h2>
    <v-container>
      <v-row class="mt-10 mb-10 d-flex justify-center">
        <v-col md="3" sm="6" cols="12">
          <v-card>
            <v-row class="d-flex justify-center align-center">
              <img
                src="https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_ALIMENTOS.png"
                alt=""
              />
              <span class="text-primary">Alimentos</span>
            </v-row>
          </v-card>
        </v-col>
        <v-col md="3" sm="6" cols="12">
          <v-card>
            <v-row class="d-flex justify-center align-center">
              <img
                src="https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_SNACKS.png"
                alt=""
              />
              <span class="text-primary">Snacks</span>
            </v-row>
          </v-card>
        </v-col>
        <v-col md="3" sm="6" cols="12">
          <v-card>
            <v-row class="d-flex justify-center align-center">
              <img
                src="https://laikapp.s3.amazonaws.com/dev_images_categories/1614033964Categoria_farmacia.png"
                alt=""
              />
              <span class="text-primary">Farmapet</span>
            </v-row>
          </v-card>
        </v-col>
        <v-col md="3" sm="6" cols="12">
          <v-card>
            <v-row class="d-flex justify-center align-center">
              <img
                src="https://laikapp.s3.amazonaws.com/dev_images_categories/1613668386Categoria_higiene_2.png"
                alt=""
              />
              <span class="text-primary">Cuidado e higiene</span>
            </v-row>
          </v-card>
        </v-col>
        <v-col md="3" sm="6" cols="12">
          <v-card>
            <v-row class="d-flex justify-center align-center">
              <img
                src="https://laikapp.s3.amazonaws.com/dev_images_categories/1612554392Juguetes.png"
                alt=""
              />
              <span class="text-primary">Juguetes</span>
            </v-row>
          </v-card>
        </v-col>
        <v-col md="3" sm="6" cols="12">
          <v-card>
            <v-row class="d-flex justify-center align-center">
              <img
                src="https://laikapp.s3.amazonaws.com/images_categories/categoria_accesorios+(1).png"
                alt=""
              />
              <span class="text-primary">Accesorios</span>
            </v-row>
          </v-card>
        </v-col>
        <v-col md="3" sm="6" cols="12">
          <v-card>
            <v-row class="d-flex justify-center align-center">
              <img
                src="https://laikapp.s3.amazonaws.com/dev_images_categories/1613595491Categoria_pet_owner.png"
                alt=""
              />
              <span class="text-primary">Para PetLovers</span>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
export default {
  name: "Categories",
};
</script>