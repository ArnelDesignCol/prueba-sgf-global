<template>
  <div class="topbar">
    <v-container class="d-flex justify-between align-center" fluid>
      <v-col lg="6">
        <v-row>
          <img
            src="https://laika.com.co/assets/home/secure_mc.png"
            alt="Laika universo peludo"
          />
          <span class="text-white mr-2">Compras seguras online </span>
          <span class="text-white ml-2">|</span>
          <img
            src="https://laika.com.co/assets/home/wallet_mc.png"
            alt="Laika universo peludo"
            class="ml-2 icon__top--bar"
          />
          <span class="text-white mr-2">Pago contra entrega </span>
          <span class="text-white ml-2">|</span>
          <img
            src="https://laika.com.co/assets/home/truck_mc.png"
            alt="Laika universo peludo"
            class="ml-2 icon__top--bar"
          />
          <span class="text-white">Entregas el mismo día </span>
        </v-row>
      </v-col>
      <v-col lg="6" class="d-flex justify-end align-center">
        <span class="text-white mr-3">Llámanos</span>
        <img
          src="/images/icons/PhoneIcon.png"
          alt="Laika universo peludo"
          class="mr-1 icon__top--bar"
          width="15"
          height="15"
        />
        <span class="text-white mr-5"> | 3009108496</span>
        <span class="text-white mr-2">Escríbenos</span>
        <img
          src="https://laika.com.co/assets/home/youtube_mc.png"
          alt="Laika universo peludo"
          class="ml-2 icon__top--bar"
        />
        <img
          src="https://laika.com.co/assets/home/facebook_mc.png"
          alt="Laika universo peludo"
          class="ml-2 icon__top--bar"
        />
        <img
          src="https://laika.com.co/assets/home/instagram_mc.png"
          alt="Laika universo peludo"
          class="ml-2 icon__top--bar"
        />
      </v-col>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "TopBar",
};
</script>