<script>
export default {
  data: () => ({
    items: [
      {title: 'Главная'},
      {title: 'О нас'},
      {title: 'Наши партнеры'},
      {title: 'Контакты'},
      {title: 'Отзывы'},
    ],
  }),
}
</script>

<template>
  <div>
    <div class="wrap">
      <div class="logo">
        <h3>RMPRO</h3>
      </div>
      <div>
        <router-link to="/auth/signin">sign in</router-link>
        <router-link to="/auth/signup">sign up</router-link>
      </div>
    </div>
    <div class="nav-wrap">
      <nav>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn style="background: #1565c0;" v-bind="props">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" style="fill: white;"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </nav>
    </div>
  </div>
</template>

<style>
.logo{
  color:#1565c0 ;
}
.wrap{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px ;
  background: white;
  padding: 20px 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 1px grey;
  margin: 10px;
}
.wrap a{
  padding: 8px 10px;
  background:#1565c0;
  color: white;
  text-decoration: none;
  border-radius: 5px ;
  margin-left: 10px ;
}
nav{
  position: fixed;
  bottom: 50px;
  right: 20px;
}
</style>