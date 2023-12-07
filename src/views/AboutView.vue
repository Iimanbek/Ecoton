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
                    <v-btn variant="outlined" color="green">
                      Принять меры
                    </v-btn>
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
                    <v-btn variant="outlined" color="green">
                      Принять меры
                    </v-btn>
                  </div>
                </div>
                <div class="cardddd">
                  <h2>Адресс Кочкоралиева 5б</h2>
                  <p>Дата и время утечки: 08.11.2023</p>
                  <p>Номер датчика: Зал-4, 4</p>
                  <div>
                    <v-btn variant="outlined" color="error">
                      Игнорировать
                    </v-btn>
                    <br>
                    <br>
                    <v-btn variant="outlined" color="green">
                      Принять меры
                    </v-btn>
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
    <div>
      <h2>Список датчиков в филиале</h2>
      <ol>
        <li v-for="i in 10">Датчик номер - {{i}}
        </li>
      </ol>
    </div>
  </div>
</template>

<style>
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
<script >
export default {
  data (){
    return{
      dialog: false,
    }
  },
}
</script>