<template>
  <div>
    <SelectPet />
    <Banners />
    <Categories/>
    <Brands/>
    <Products />
    <v-fab-transition>
      <v-btn
        color="transparent"
        fab
        large
        dark
        bottom
        right
        class="v-btn--example whatsapp"
        fixed
      >
        <img
          src="https://laika.com.co/assets/whatsapp_1.png"
          alt=""
          style="width: 64px"
        />
      </v-btn>
    </v-fab-transition>
    <v-fab-transition>
      <v-btn
        color="primary"
        fab
        large
        dark
        bottom
        right
        class="v-btn--example"
        fixed
      >
        <v-icon>mdi-message</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>
<script>
import Banners from "./components/banners.vue";
import SelectPet from "./components/SelectPet.vue";
import Products from "./components/Products.vue";
import Categories from "./components/Categories.vue";
import Brands from "./components/Brands.vue";
export default {
  name: "Home",
  components: { SelectPet, Banners, Products, Categories, Brands },
};
</script>