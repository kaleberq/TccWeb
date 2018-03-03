<style scoped src="./style.css">
</style>
<template>
 <div id="app">
  <v-app id="inspire">
      <v-toolbar  color="indigo" dark app>
     
      <v-toolbar-title >POLÍCIA MILITAR</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height id="login">
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="loginBox">
              
              <v-card-text>
                <h2 style="padding-bottom:60px; padding-top: 10px"> Login</h2>
                <v-form>
                  <v-text-field name="usuario" label="Usuário" v-model="usuario" type="text"></v-text-field>
          <v-text-field name="senha" label="Senha" v-model="senha"
            min="8"
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'password' : 'text'"
            counter>
                 </v-text-field>
                </v-form>
              </v-card-text>
              
                <v-spacer></v-spacer>
                <div class="text-md-center" style="padding-top: 0px">
                    <v-btn  color="vermelho">Login</v-btn>
                </div>
              
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text"> by Kalebe Misael</span>
    </v-footer>
  </v-app>
</div>
</template>
<script src="./script.js"></script>
