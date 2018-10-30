<!-- Essa tag`s nao sao muito utilizadas no vue <template>  dark app - Alinha com o app do App.vue -->
<template>
  <div id="cabecalho">
    <Menu :gaveta="inGaveta"/>
    <v-toolbar color="black darken-3" dark app fixed>
      <v-toolbar-title class="ml-0 pl-3" style="width: 300px">
        <v-toolbar-side-icon @click.stop="inGaveta = !inGaveta" />
        <span class="hidden-sm-and-down">Bortolato Acabamentos</span>
        <span class="hidden-sm-and-up">CRUD</span>
      </v-toolbar-title>

      <v-spacer />

      <div class="hidden-sm-and-down">
        <v-avatar size="32px" tile class="mr-3"> <!-- Do objeto para direita -->
          <img src="../assets/logo.png" alt="Avatar">
        </v-avatar>

        <span>Rogerio Campos</span>
      </div>
    </v-toolbar>
  </div>

</template>
<script>
import Menu from '@/components/Menu'
export default {
  components: {
    Menu
  },
  data () {
    return {
      inGaveta: false
    }
  },
  name: 'Cabecalho'
}
</script>

<style scoped>

</style>
