<template>
  <div class="select__pet mt-5">
    <v-container>
      <v-row class="d-flex justify-center align-center">
        <v-col cols="4" class="mr-2" :class="classesDog" @click.prevent="selectPet('dog')">
          <img
            src="https://laika.com.co/assets/home/dog_mc.png"
            alt=""
            class="mr-2"
          />
          <span class="text-primary">Perro</span>
        </v-col>
        <v-col cols="4" :class="classesCat" @click.prevent="selectPet('cat')">
            <img
              src="https://laika.com.co/assets/home/cat_mc.png"
              alt=""
              class="mr-2"
            />
            <span class="text-primary">Gato </span>
        </v-col>
      </v-row>
      <v-col cols="12" class="d-flex justify-center align-center mt-5">
          <img src="/images/laikamember.png" alt="" />
      </v-col>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "SelectPet",
  data: () => ({
    classesDog: ["d-flex", "align-center", "perro-select", "selected_pet"],
    classesCat: ["d-flex", "align-center", "gato-select"],
  }),
  methods: {
    selectPet(pet) {
      if (pet == "dog") {
        if (this.$store.state.header.pet != pet) {
          this.classesCat.pop();
          this.classesDog.push("selected_pet");
          this.$store.state.header.pet = "dog";
        }
      } else {
        if (this.$store.state.header.pet != pet) {
          this.classesDog.pop();
          this.classesCat.push("selected_pet");
          this.$store.state.header.pet = "cat";
        }
      }
    },
  },
};
</script>