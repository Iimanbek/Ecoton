<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Главная',
        path:'#home'
      },
      {
        title: 'О нас',
        path:'#'
      },
      {
        title: 'Наши партнеры',
        path:'#partners'
      },
      {
        title: 'Отзывы',
        path:''
      },
      {
        title: 'Контакты',
        path:'#contacts'
      },
    ],
  }),
}
</script>

<template>
  <div>
    <div class="wrap">
      <div class="logo">
        <h3 id="home">RmPro</h3>
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
              <v-list-item-title>
                <a :href="item.path">{{item.title }}</a>
              </v-list-item-title>
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
          <img src="../../public/media/images/exmaplescreen.png" />
          <p class="data_real">Текущие данные дымавого извещателя вашего бизнеса  </p>
        </div>
        <div class="header___title">
        </div>
      </div>
    </div>
    <div class="part_wrap">
      <br>
      <h2 id="partners">Наши партнеры (например)</h2>
      <br>
      <div class="partners">
        <div>
          <img src="../../public/media/images/partners.png"/>

          <p>Продажа датчиков</p>
        </div>
        <div>120 теплиц</div>
        <div>50 Отелей</div>
        <div class="vip">Здесь можете быть вы</div>
      </div>
    </div>
    <div class="footer">
      <div  class="fcf-body">

        <div id="fcf-form">
          <h3 id="contacts" class="fcf-h3">Contact us</h3>

          <form id="fcf-form-id" class="fcf-form-class" method="post" action="contact-form-process.php">

            <div class="fcf-form-group">
              <label for="Name" class="fcf-label">Your name</label>
              <div class="fcf-input-group">
                <input type="text" id="Name" name="Name" class="fcf-form-control" required>
              </div>
            </div>

            <div class="fcf-form-group">
              <label for="Email" class="fcf-label">Your email address</label>
              <div class="fcf-input-group">
                <input type="email" id="Email" name="Email" class="fcf-form-control" required>
              </div>
            </div>

            <div class="fcf-form-group">
              <label for="Message" class="fcf-label">Your message</label>
              <div class="fcf-input-group">
                <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
              </div>
            </div>

            <div class="fcf-form-group">
              <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
*{
  scroll-behavior: smooth;
}
.data_real{
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 25px;
  position: absolute;
  background: white;
  top: 33%;
  text-align: center;
  left: 16%;
  width: 70%;
  z-index: 10;
  color: #1a73e8;
}
.header__title{
  position: relative;
}
.header-title img{
  border-bottom: 1px solid white;
}
.header-title{
  background: rgb(238 240 242);
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#fcf-button{
  color: white;
}
#fcf-form {
  display:block;
}

.fcf-body {
  margin: 0;
  font-family: -apple-system, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
  padding: 30px;
  padding-bottom: 10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  max-width: 100%;
}

.fcf-form-group {
  margin-bottom: 1rem;
}

.fcf-input-group {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: stretch;
  align-items: stretch;
  width: 100%;
}

.fcf-form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  outline: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.fcf-form-control:focus {
  border: 1px solid #313131;
}

select.fcf-form-control[size], select.fcf-form-control[multiple] {
  height: auto;
}

textarea.fcf-form-control {
  font-family: -apple-system, Arial, sans-serif;
  height: auto;
}

label.fcf-label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

.fcf-credit {
  padding-top: 10px;
  font-size: 0.9rem;
  color: #545b62;
}

.fcf-credit a {
  color: #545b62;
  text-decoration: underline;
}

.fcf-credit a:hover {
  color: #0056b3;
  text-decoration: underline;
}

.fcf-btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .fcf-btn {
    transition: none;
  }
}

.fcf-btn:hover {
  color: #212529;
  text-decoration: none;
}

.fcf-btn:focus, .fcf-btn.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.fcf-btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.fcf-btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.fcf-btn-primary:focus, .fcf-btn-primary.focus {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.fcf-btn-lg, .fcf-btn-group-lg>.fcf-btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.fcf-btn-block {
  display: block;
  width: 100%;
}

.fcf-btn-block+.fcf-btn-block {
  margin-top: 0.5rem;
}

input[type="submit"].fcf-btn-block, input[type="reset"].fcf-btn-block, input[type="button"].fcf-btn-block {
  width: 100%;
}
.footer{
  margin-top: 100px;
  height: 20vh;
  background: #1a73e8;
}
.vip{
  font-weight: 900;
}
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
  z-index: 100;
}
</style>