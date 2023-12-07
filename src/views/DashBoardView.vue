<script>
export default {
  data (){
    return{
      dialog: false,
    }
  },
  methods:{
  }
}
</script>

<template>
  <div>
    <div class="navv">
      <div class="logo">
        <router-link to="/"><h3 id="home">RmPro</h3></router-link>
      </div>
      <div class="notifications">
        <div class="text-center">
          <v-btn
              class="text-none"
              @click="dialog = true"
          >
            <v-badge content="3" color="error">
              <v-icon>mdi-bell-outline</v-icon>
            </v-badge>
          </v-btn>

          <v-dialog
              v-model="dialog"
              width="auto"
          >
            <v-card>
              <v-list-item-title class="cardddd-wrap">
                <div class="cardddd">
                  <h2>Адресс Московская 45А</h2>
                  <p>Дата и время утечки: 01.11.2023</p>
                  <p>Номер датчика: Зал-1, 2</p>
                  <div>
                    <v-btn variant="outlined" color="error">
                      Игнорировать
                    </v-btn>
                    <br>
                    <br>
                    <a href="tel:112">
                    <v-btn @click="mery" variant="outlined" color="green">
                      Позвонить МЧС
                    </v-btn>
                    </a>
                  </div>
                </div>
                <div class="cardddd">
                  <h2>Адресс Ломоносова 1А</h2>
                  <p>Дата и время утечки: 05.9.2023</p>
                  <p>Номер датчика: Зал-1, 2</p>
                  <div>
                    <v-btn variant="outlined" color="error">
                      Игнорировать
                    </v-btn>
                    <br>
                    <br>
                    <a href="tel:112">
                      <v-btn @click="mery" variant="outlined" color="green">
                        Позвонить МЧС
                      </v-btn>
                    </a>
                  </div>
                </div>
                <div class="cardddd">
                  <h2>Адресс Кочкоралиева 5б</h2>
                  <p>Дата и время утечки: 08.11.2023</p>
                  <p>Номер датчика: Зал-4, 4</p>
                  <div>
                    <v-btn  variant="outlined" color="error">
                      Игнорировать
                    </v-btn>
                    <br>
                    <br>
                    <a href="tel:112">
                      <v-btn @click="mery" variant="outlined" color="green">
                        Позвонить МЧС
                      </v-btn>
                    </a>
                  </div>
                </div>
              </v-list-item-title>
              <v-card-actions>
                <v-btn color="primary" block @click="dialog = false">Закрыть окно</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <a href="#">Profile</a>
      </div>
    </div>
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
    <div>
      <div class="filial-list">
        <h2>Список филиалов</h2>
        <div class="filial-list-inner">
          <div class="filial" v-for="i in 5">
            <router-link to="/dashboard/user/:id/filial/2">{{i}} - точка</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.filial-list-inner{
  display: flex;
  flex-wrap: wrap;
  width: 325px;
  margin: 0 auto auto ;
  gap: 4px;
}
.filial{
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0 0 2px 2px #598eda;
  width: 100px;
  height: 100px;
  margin: 30px;
}
.filial-list h2{
  color: #1a73e8;
  text-align: center;
  margin: 20px 0;
}
.cardddd h2{
  font-size: 15px;
}
.cardddd{
  margin: 10px auto auto ;
  background:  lightgrey;
  overflow: hidden;
  width: 95% !important ;
  padding: 10px;
}
.cardddd-wrap{
  width: 100%;
  display: flex !important;
  flex-direction: column  !important;
}
.navv{
  display: flex;
  justify-content: space-between;
  align-items: center ;
  padding: 15px 20px;
  background: white;
  border-radius: 0 0 10px 10px ;
}
.notifications{
  display: flex;
  justify-content: center;
  align-items: center;
}
.notifications a{
  padding: 8px 10px;
  background:#1565c0;
  color: white;
  text-decoration: none;
  border-radius: 5px ;
  margin-left: 10px ;
}
</style>