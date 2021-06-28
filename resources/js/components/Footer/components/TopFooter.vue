<template>
  <div class="top__footer">
    <v-container>
      <v-row>
        <v-col md="2">
          <v-col md="12" class="d-flex justify-center p-1">
            <img src="https://laika.com.co/assets/LAIKA.png" alt="" />
          </v-col>
          <v-col md="12" class="d-flex justify-center p-1">
            <h4 class="text-primary">Siguenos en:</h4>
          </v-col>
          <v-col md="12" class="d-flex justify-center p-1">
            <i class="mr-2 fab fa-youtube text-primary"></i>
            <i class="fab fa-instagram text-primary mr-2"></i>
            <i class="fab fa-facebook-square mr-2 text-primary"></i>
          </v-col>
        </v-col>
        <v-col md="2">
          <v-col md="12" class="p-1">
            <h4 class="text-primary title__top--footer">Acerca De Laika</h4>
          </v-col>
          <v-col md="12" class="p-1">
            <ul class="about__laika">
              <li>
                <a href="#">
                  <span class="text-primary text__top--footer"
                    >Sobre Laika</span
                  >
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="text-primary text__top--footer">Servicios</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="text-primary text__top--footer"
                    >Trabaja con nostros</span
                  >
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="text-primary text__top--footer">Blog</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="text-primary text__top--footer"
                    >Terminos Y Condiciones</span
                  >
                </a>
              </li>
            </ul>
          </v-col>
        </v-col>
        <v-col md="3">
          <v-col md="12" class="p-1">
            <h4 class="text-primary title__top--footer">Links De Interés</h4>
          </v-col>
          <v-col md="12" class="p-1">
            <ul class="about__laika">
              <li>
                <a href="#">
                  <span class="text-primary text__top--footer"
                    >Preguntas frecuentes</span
                  >
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="text-primary text__top--footer"
                    >¿Como comprar en Laika?</span
                  >
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="text-primary text__top--footer"
                    >Politica de Privacidad</span
                  >
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="text-primary text__top--footer"
                    >Contáctanos</span
                  >
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="text-primary text__top--footer"
                    >Politicas de Entrega</span
                  >
                </a>
              </li>
            </ul>
          </v-col>
        </v-col>
        <v-col md="3">
          <v-col md="12" class="p-1">
            <h4 class="text-primary title__top--footer">Información</h4>
          </v-col>
          <v-col md="12" class="p-1">
            <ul class="about__laika">
              <li>
                <a href="#">
                  <span class="text-primary text__top--footer"
                    >Teléfono:300918496</span
                  >
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="text-primary text__top--footer"
                    >serviciclientes@laika.com.co</span
                  >
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="text-primary text__top--footer"
                    >Bogotá D.C., Colombia</span
                  >
                </a>
              </li>
            </ul>
          </v-col>
        </v-col>
        <v-col md="2">
          <v-col md="12" class="p-1">
            <h4 class="text-primary title__top--footer">Suscrbete</h4>
          </v-col>
          <v-col md="12" class="p-1">
            <ul class="about__laika">
              <li>
                <a href="#">
                  <span class="text-primary text__small--top--footer"
                    >Recibe noticias y promociones al instante</span
                  >
                </a>
              </li>
              <li>
                <v-text-field
                  solo
                  v-model="email"
                  type="text"
                  class="input__top--footer"
                  placeholder="Correo Electronico"
                  append-icon="mdi-chevron-right"
                  @click:append="saveEmail"
                />
              </li>
              <li>
                <v-checkbox
                  class="text__small--top--footer"
                  v-model="checkbox"
                  label="He leido y acepto las politicas de privacidad."
                ></v-checkbox>
              </li>
            </ul>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "TopFooter",
  computed: {
    checkbox: {
      get() {
        return this.$store.state.footer.checkbox;
      },

      set(val) {
        this.$store.state.footer.checkbox = val;
      },
    },

    email: {
      get() {
        return this.$store.state.footer.email;
      },

      set(val) {
        this.$store.state.footer.email = val;
      },
    },
  },
  methods: {
    async saveEmail() {
      if (!this.checkbox) {
        this.$swal({
          icon: "error",
          text: "Debes aceptar las politicas de privacidad.",
        });
      } else {
        await this.$store.dispatch(
          "footer/saveEmail",
          { email: this.email },
          { root: true }
        );  
      }
    },
  },
};
</script>