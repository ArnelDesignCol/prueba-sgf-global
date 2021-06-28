<template>
  <div class="banners">
    <v-container>
      <carousel :perPage="1" :autoplay="true" :autoplayTimeout="5000">
        <slide v-for="(item, index) in banners" :key="index">
          <img :src="item.banner_url" alt="" />
        </slide>
      </carousel>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Banners",
  created() {
    this.$store.dispatch("banners/getBanners");
  },
  computed: {
    banners: {
      get() {
        return this.$store.state.banners.banners;
      },
    },
  },
};
</script>