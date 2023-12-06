<script>
export default {
  data: () => ({
    items: [
      {title: 'Главная'},
      {title: 'О нас'},
      {title: 'Наши партнеры'},
      {title: 'Отзывы'},
      {title: 'Контакты'},
    ],
  }),
}
</script>

<template>
  <div>
    <div class="wrap">
      <div class="logo">
        <h3>RmPro</h3>
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
    <div>
      <div class="image_wrap">
        <div class="header-title">
          <img src="../../public/media/images/welcome.png"/>
        </div>
        <div class="header__title">
          <img src="../../public/media/images/exmaplescreen.png" /></div>
        <div class="header___title">
        </div>
      </div>
    </div>
    <div class="part_wrap">
      <br>
      <h2>Наши партнеры (например)</h2>
      <br>
      <div class="partners">
        <div>
          <img src="../../public/media/images/partners.png"/>

          <p>Продают датчики</p>
        </div>
        <div>120 теплиц</div>
        <div>50 Отелей</div>
        <div>500 ресторанов</div>
      </div>
    </div>
  </div>
</template>

<style>
.partners img{
  width: 100%;
  object-fit: cover;
}
.part_wrap{
  text-align: center;
  color: #1a73e8;
}
.partners div{
  color: white;
  width: 80px;
  height: 80px;
  background: #1565c0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.partners{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.image_wrap img{
  width: 100%;
  object-fit: contain;
}
.header_img img{
  width: 100%;
}
.header_img{
  width: 90%;
  margin: 0 auto auto ;
}
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