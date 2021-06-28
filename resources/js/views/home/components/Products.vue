<template>
  <v-container class="products">
    <h2 class="text-primary">Un universo lleno de ofertas</h2>
    <carousel
      :perPage="width"
      :autoplay="true"
      :autoplayTimeout="5000"
      class="carousel__products"
    >
      <slide v-for="(item, index) in products" :key="index">
        <v-card class="mx-auto my-12 card__products" height="auto">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="100"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="300"
            :src="item.product_image_url"
            class="img-card"
          ></v-img>

          <v-card-title>{{ item.name }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>
            <v-row>
              <v-col md="12" cols="12">
                <v-row class="m-0">
                  <h2
                    class="my-4 text-title"
                    v-for="(i, ind) in item.product_references"
                    :key="ind"
                  >
                    $ {{ i.price }}
                  </h2>
                </v-row>
              </v-col>

              <v-col md="12" cols="12">
                <v-row class="d-flex align-center m-0">
                  <h2
                    class="my-4 text-title text-danger"
                    v-for="(i, ind) in item.product_references"
                    :key="ind"
                  >
                    $ {{ i.price_laika_member }}
                  </h2>
                  <img
                    src="/images/laikamember.png"
                    alt=""
                    class="ml-5"
                    style="width: 20%; height: 20px"
                  />
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Referencias</v-card-title>

          <v-card-text>
            <v-chip-group
              v-model="item.id"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip v-for="(i, ind) in item.product_references" :key="ind">
                {{ i.reference }}
              </v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn class="button__add--cart"> Agregar Al Carrito </v-btn>
          </v-card-actions>
        </v-card>
      </slide>
    </carousel>
  </v-container>
</template>
<script>
export default {
  name: "Products",
  data: () => ({
    width: 0,
    price: 0,
  }),
  created() {
    this.$store.dispatch("products/getProducts");
    window.addEventListener('resize', this.widthProducts);
    console.log(window.addEventListener('resize', this.widthProducts))
    this.widthProducts();
  },
  methods: {
    selectedReference(data, index) {
      this.products.map((item, index) => {
        if (item.name == data.name) {
          this.price = item.product_references[index].price;
        }
      });
    },
    widthProducts() {
      let body = document.body.clientWidth;
      console.log(body)
      if (body >= 1280) {
        this.width = 4;
      } else if(body <= 539){
        this.width = 1;
      } else if(body > 540 && body <= 768){
        this.width = 2;
      } else if(body > 769 && body <= 1024){
        this.width = 3;
      } else if(body > 1025 && body <= 1279){
        this.width = 3;
      } 
    },
  },
  computed: {
    products() {
      return this.$store.state.products.products;
    },
  },
};
</script>