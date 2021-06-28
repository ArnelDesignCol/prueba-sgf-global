<template>
  <div class="header">
    <TopBar />
    <v-app-bar
      fixed
      color="primary"
      height="100px"
      class="desktop__header mt-15 mb-15"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-container>
        <v-row>
          <v-col lg="6">
            <v-row>
              <v-row class="d-flex align-center">
                <v-col lg="2">
                  <v-toolbar-title>
                    <img src="/images/Logo.png" alt="" />
                  </v-toolbar-title>
                </v-col>
                <v-col lg="7" class="products__browser">
                  <v-select :components="{ OpenIndicator }"></v-select>
                </v-col>
                <v-col lg="3" class="city__select">
                  <v-select
                    :components="{ OpenIndicator: Chevron }"
                    :options="cities"
                    v-model="city"
                    label="name"
                  >
                    <template slot="selected-option" slot-scope="option">
                      <v-row>
                        <img
                          :src="option.country.flag"
                          alt=""
                          v-if="option.country"
                          class="mr-2"
                        /><span class="text-white">{{ option.acronym }}</span>
                      </v-row>
                    </template>
                  </v-select>
                </v-col>
              </v-row>
            </v-row>
          </v-col>
          <!-- Right Items Of Header -->
          <v-col lg="6" class="d-flex justify-end">
            <v-col md="10" class="d-flex justify-end">
              <span class="text-white">Crear Cuenta</span>
            </v-col>
            <v-col md="2">
              <v-badge color="#d50000" content="4">
                <img
                  src="https://laika.com.co/assets/home/cart_mc.png"
                  alt=""
                />
              </v-badge>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-col md="12" class="menus">
      <v-container>
        <v-row>
          <v-menu open-on-hover bottom offset-y class="dog-submenus">
            <template v-slot:activator="{ on, attrs }">
              <v-row v-bind="attrs" v-on="on">
                <v-col md="2">
                  <img
                    src="https://laika.com.co/assets/home/dog_mc.png"
                    alt=""
                  />
                </v-col>
                <v-col md="6">
                  <span>Compras para tu perro</span>
                </v-col>
                <v-col md="2">
                  <i class="fas fa-chevron-right"></i>
                </v-col>
              </v-row>
            </template>
            <v-row class="dog-menu">
              <v-col lg="9">
                <v-row>
                  <v-col md="2">
                    <img
                      src="https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_ALIMENTOS.png"
                      alt=""
                    />
                  </v-col>
                  <v-col md="6" class="d-flex align-center">
                    <h5>Alimentos</h5>
                  </v-col>
                  <v-col md="2" class="d-flex align-center">
                    <i class="fas fa-chevron-right"></i>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col md="2">
                    <img
                      src="https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_SNACKS.png"
                      alt=""
                    />
                  </v-col>
                  <v-col md="6" class="d-flex align-center">
                    <h5>Snacks</h5>
                  </v-col>
                  <v-col md="2" class="d-flex align-center">
                    <i class="fas fa-chevron-right"></i>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col md="2">
                    <img
                      src="https://laikapp.s3.amazonaws.com/dev_images_categories/1614033964Categoria_farmacia.png"
                      alt=""
                    />
                  </v-col>
                  <v-col md="6" class="d-flex align-center">
                    <h5>Farmapet</h5>
                  </v-col>
                  <v-col md="2" class="d-flex align-center">
                    <i class="fas fa-chevron-right"></i>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col md="2">
                    <img
                      src="https://laikapp.s3.amazonaws.com/dev_images_categories/1613668386Categoria_higiene_2.png"
                      alt=""
                    />
                  </v-col>
                  <v-col md="6" class="d-flex align-center">
                    <h5>Cuidado e Higiene</h5>
                  </v-col>
                  <v-col md="2" class="d-flex align-center">
                    <i class="fas fa-chevron-right"></i>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col md="2">
                    <img
                      src="https://laikapp.s3.amazonaws.com/dev_images_categories/1612554392Juguetes.png"
                      alt=""
                    />
                  </v-col>
                  <v-col md="6" class="d-flex align-center">
                    <h5>Juguetes</h5>
                  </v-col>
                  <v-col md="2" class="d-flex align-center">
                    <i class="fas fa-chevron-right"></i>
                  </v-col>
                </v-row>
              </v-col>
              <v-col lg="3" class="d-flex align-end">
                <img src="/images/menu.png" alt="" style="height: auto" />
              </v-col>
            </v-row>
          </v-menu>
          <v-menu open-on-hover bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-row v-bind="attrs" v-on="on">
                <v-col md="2">
                  <img
                    src="https://laika.com.co/assets/home/cat_mc.png"
                    alt=""
                  />
                </v-col>
                <v-col md="6">
                  <span>Compras para tu gato</span>
                </v-col>
                <v-col md="2">
                  <i class="fas fa-chevron-right"></i>
                </v-col>
              </v-row>
            </template>
            <v-row class="dog-menu">
              <v-col lg="9">
                <v-row>
                  <v-col md="2">
                    <img
                      src="https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_ALIMENTOS.png"
                      alt=""
                    />
                  </v-col>
                  <v-col md="6" class="d-flex align-center">
                    <h5>Alimentos</h5>
                  </v-col>
                  <v-col md="2" class="d-flex align-center">
                    <i class="fas fa-chevron-right"></i>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col md="2">
                    <img
                      src="https://laikapp.s3.amazonaws.com/images_categories/categoria_arenas+(1).png"
                      alt=""
                    />
                  </v-col>
                  <v-col md="6" class="d-flex align-center">
                    <h5>Arenas</h5>
                  </v-col>
                  <v-col md="2" class="d-flex align-center">
                    <i class="fas fa-chevron-right"></i>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col md="2">
                    <img
                      src="https://laikapp.s3.amazonaws.com/dev_images_categories/1614033964Categoria_farmacia.png"
                      alt=""
                    />
                  </v-col>
                  <v-col md="6" class="d-flex align-center">
                    <h5>Farmapet</h5>
                  </v-col>
                  <v-col md="2" class="d-flex align-center">
                    <i class="fas fa-chevron-right"></i>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col md="2">
                    <img
                      src="https://laikapp.s3.amazonaws.com/dev_images_categories/1613668386Categoria_higiene_2.png"
                      alt=""
                    />
                  </v-col>
                  <v-col md="6" class="d-flex align-center">
                    <h5>Cuidado e Higiene</h5>
                  </v-col>
                  <v-col md="2" class="d-flex align-center">
                    <i class="fas fa-chevron-right"></i>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col md="2">
                    <img
                      src="https://laikapp.s3.amazonaws.com/dev_images_categories/1612554392Juguetes.png"
                      alt=""
                    />
                  </v-col>
                  <v-col md="6" class="d-flex align-center">
                    <h5>Juguetes</h5>
                  </v-col>
                  <v-col md="2" class="d-flex align-center">
                    <i class="fas fa-chevron-right"></i>
                  </v-col>
                </v-row>
              </v-col>
              <v-col lg="3" class="d-flex align-end">
                <img src="/images/menu.png" alt="" style="height: auto" />
              </v-col>
            </v-row>
          </v-menu>
          <v-menu open-on-hover bottom offset-x>
            <template v-slot:activator="{ on, attrs }">
              <v-row v-bind="attrs" v-on="on">
                <v-col md="6">
                  <span>Ofertas</span>
                </v-col>
                <v-col md="2">
                  <i class="fas fa-chevron-right"></i>
                </v-col>
              </v-row>
            </template>
          </v-menu>
          <v-menu open-on-hover bottom offset-x>
            <template v-slot:activator="{ on, attrs }">
              <v-row v-bind="attrs" v-on="on">
                <v-col md="6">
                  <span>Servicios</span>
                </v-col>
                <v-col md="2">
                  <i class="fas fa-chevron-right"></i>
                </v-col>
              </v-row>
            </template>
          </v-menu>
          <v-menu open-on-hover bottom offset-x>
            <template v-slot:activator="{ on, attrs }">
              <v-row v-bind="attrs" v-on="on">
                <v-col md="8">
                  <span>Blog </span>
                </v-col>
                <v-col md="2">
                  <i class="fas fa-chevron-right"></i>
                </v-col>
              </v-row>
            </template>
          </v-menu>
          <v-menu open-on-hover bottom offset-x>
            <template v-slot:activator="{ on, attrs }">
              <v-row v-bind="attrs" v-on="on">
                <v-col md="6">
                  <img src="/images/laikamember.png" alt="" />
                </v-col>
                <v-col md="2">
                  <i class="fas fa-chevron-right"></i>
                </v-col>
              </v-row>
            </template>
          </v-menu>
        </v-row>
      </v-container>
    </v-col>
    <v-app-bar color="primary" elevate-on-scroll class="mobile__header">
      <v-container>
        <v-row class="d-flex align-center justify-space-between">
          <v-col md="6" sm="6" cols="6">
            <v-row class="d-flex align-center">
              <v-col md="2" sm="2" cols="4">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
              </v-col>
              <v-col md="3" sm="5" cols="6">
                <v-toolbar-title>
                  <img src="/images/Logo.png" alt="" />
                </v-toolbar-title>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="6" sm="6" cols="6">
            <v-row class="d-flex align-center justify-end">
              <v-col md="4" sm="8" cols="8" class="city__select">
                <v-select
                  :components="{ OpenIndicator: Chevron }"
                  :options="cities"
                  v-model="city"
                  label="name"
                >
                  <template slot="selected-option" slot-scope="option">
                    <v-row>
                      <img
                        :src="option.country.flag"
                        alt=""
                        v-if="option.country"
                        class="mr-2"
                      /><span class="text-white">{{ option.acronym }}</span>
                    </v-row>
                  </template>
                </v-select>
              </v-col>
              <v-col md="2" sm="2" cols="4">
                <v-badge color="#d50000" content="4">
                  <img
                    src="https://laika.com.co/assets/home/cart_mc.png"
                    alt=""
                  />
                </v-badge>
              </v-col>
            </v-row>
          </v-col>
          <v-col lg="12" sm="12" cols="12" class="products__browser">
            <v-select :components="{ OpenIndicator }"></v-select>
          </v-col>
        </v-row>
      </v-container>
      <template #extention></template>
    </v-app-bar>
  </div>
</template>
<script>
import TopBar from "./components/TopBar.vue";
import OpenIndicator from "../Indicators/OpenIndicator.vue";
import Chevron from "../Indicators/Chevron.vue";
export default {
  name: "Header",
  components: {
    TopBar,
  },
  data: () => ({
    OpenIndicator: OpenIndicator,
    Chevron: Chevron,
  }),
  async created() {
    await this.$store.dispatch("header/getCities");
  },
  computed: {
    cities() {
      return this.$store.state.header.cities;
    },

    city: {
      get() {
        return this.$store.state.header.city;
      },

      set(val) {
        this.$store.state.header.city = val;
      },
    },
  },
};
</script>