<template>
  <div id="cabecalho">
    <Menu :gaveta="inGaveta" />
    <v-toolbar color="black darken-3" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
      <v-toolbar-title class="ml-0 pl-3" style="width: 300px">
        <v-toolbar-side-icon @click.stop="inGaveta = !inGaveta" />
        <span class="hidden-sm-and-down">Bortolato Acabamentos</span>
        <span class="hidden-sm-and-up">3º Ano</span>
      </v-toolbar-title>
      <v-spacer />
      <div class="hidden-sm-and-down">
        <v-avatar size="32px" tile class="mr-3">
          <img src="../assets/logo.png" alt="Avatar">
        </v-avatar>
        <span>NOME USUARIO</span>
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
  name: 'cabecalho'
}
</script>

<style scoped>
</style>
