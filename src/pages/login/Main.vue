<template>
  <v-container fluid id="login">
    <v-slide-y-transition mode="out-in">
      <v-layout class="loginBox" column align-center>
        
        <h2> Login</h2>
        <v-form>
          <v-text-field name="usuario" label="Usuário" color="padrao" v-model="usuario" type="text"></v-text-field>
          <v-text-field name="senha" label="Senha" color="padrao" v-model="senha"
            min="8"
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'password' : 'text'"
            counter>
          </v-text-field>
          <div class="text-xs-center">
           <v-btn round color="padrao" dark>Entrar</v-btn>
          </div>
        </v-form>
      </v-layout>
    </v-slide-y-transition>
    <img src="@/assets/camera.png" alt="Vuetify.js" class="camera">
    <img src="@/assets/carr.png" alt="Vuetify.js" class="car">
  </v-container>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css">
</style>
