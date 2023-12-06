<script>
import SignIn from "@/components/auth/SignIn.vue";
import SignUp from "@/components/auth/SignUp.vue";
export default {
components:{
  'v-signin':SignIn,
  'v-signup':SignUp
}
}

</script>

<template>
<div>
<!--  <div v-if="this.$route.params.paths == 'signin'">-->
<!--    <v-signin/>-->
<!--  </div>-->
<!--  <div v-else-if="this.$route.params.paths == 'signup'">-->
<!--    <v-signup/>-->
<!--  </div>-->
<!--  <div v-else>-->
<!--    <h2 style="color: red">Something went wrong</h2>-->
<!--  </div>-->
  <router-link to="/dashboard">sign in</router-link>
  <router-link to="/dashboard">sign in</router-link>
</div>
</template>

<style>

</style>