<script>
</script>

<template>
  <div>
    <div class="wrap">
      <router-link to="/auth/signin">sign in</router-link>
      <router-link to="/auth/signup">sign up</router-link>
    </div>
      <h2>Sorry for the empty page</h2>
  </div>
</template>

<style>
h2{
  color:#1565c0 ;
  text-align: center;
  font-size: 16px;
}
.wrap{
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px ;
}
.wrap a{
  padding: 10px 15px;
  background:#1565c0;
  color: white;
  text-decoration: none;
  border-radius: 5px ;
}
</style>