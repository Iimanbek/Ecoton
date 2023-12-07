<template>
  <div>
    <div class="form_wrapp">
      <v-card
          class="mx-auto pa-12 pb-8"
          elevation="8"
          max-width="448"
          rounded="lg"
      >
        <router-link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: black ;"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg></router-link>
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field
            v-model="mail"
            density="compact"
            placeholder="Email address"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password

          <a
              class="text-caption text-decoration-none text-blue"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
          >
            Forgot login password?</a>
        </div>

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

        <v-card
            class="mb-12"
            color="surface-variant"
            variant="tonal"
        >
          <v-card-text class="text-medium-emphasis text-caption">
            Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
          </v-card-text>
        </v-card>
<!--        @click="authIn"-->
        <router-link to="/dashboard/user/1">
        <v-btn
            block
            class="mb-8"
            color="blue"
            size="large"
            variant="tonal"
        >
         Log In
        </v-btn>
        </router-link>

        <v-card-text class="text-center">
          <router-link    class="text-blue text-decoration-none" to="/auth/signup">Sign up now <v-icon icon="mdi-chevron-right"></v-icon> </router-link>
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
    password:''
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
</style>