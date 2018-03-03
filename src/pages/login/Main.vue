<template>
  <v-container fluid id="login">
    <v-layout align-center justify-center>
      <v-card class="loginBox" column align-center>
        <h2> Login</h2>
        <v-form>
          <v-text-field name="usuario" label="Usuário" v-model="usuario" type="text"></v-text-field>
          <v-text-field name="senha" label="Senha" v-model="senha"
            min="8"
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'password' : 'text'"
            counter>
          </v-text-field>
          <div class="text-xs-center">
           <v-btn round dark @click="verificaAutanticacao()">Entrar</v-btn>
          </div>
        </v-form>
      </v-card>
    </v-layout>
    <!--<img src="@/assets/logo_policia.png" alt="Vuetify.js" class="logo_policia">-->
  </v-container>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css">
</style>
