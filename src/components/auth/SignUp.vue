<template>
  <div>
    <div class="form_wrapp">
      <v-card
          class="mx-auto pa-12 pb-8"
          elevation="8"
          max-width="448"
          rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field
            v-model="mail"
            density="compact"
            placeholder="Email address"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
        ></v-text-field>

        <v-text-field
            v-model="password"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
        ></v-text-field>



        <v-btn
            block
            class="mb-8"
            color="blue"
            size="large"
            variant="tonal"
            @click="authIn()"
        >
          Sign Up
        </v-btn>

        <v-card-text class="text-center">
          <router-link    class="text-blue text-decoration-none" to="/auth/signin">Sign in now <v-icon icon="mdi-chevron-right"></v-icon> </router-link>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script>
import {useAuthStore} from "@/stores/counter";
import {mapStores} from "pinia";

export default {
  data: () => ({
    visible: false,
    mail:'',
    password:'',
  }),
  computed:{
    ...mapStores(useAuthStore)
  },
  methods: {
    authIn() {
      if (this.mail && this.password){
        this.authStore.authIn(this.$route.params.paths, this.mail, this.password);
      }else{
        alert('put something in input')
      }
    },
  },

  beforeRouteEnter(to, from, next) {
    // Вызовите метод authIn при входе на страницу
    next(vm => {
      vm.authIn();
    });
  },
  beforeRouteUpdate(to, from, next) {
    // Вызовите метод authIn при обновлении маршрута
    this.authIn();
    next();
  },
}
</script>
<style>
.form_wrapp{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a73e8;
}
.form_wrapp > div{
  width: 90%;
}
</style>