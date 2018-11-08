<template>
  <div id="cliente">
    <Cabecalho />
    <v-content class="ma-3">
      <h1>Cliente</h1>
      <hr />
      <v-data-table :headers="tblCliente.cabecalho"
        :items="tblCliente.item" hide-actions
        class="elevation-1">

      </v-data-table>
    </v-content>
  </div>
</template>

<script>
import Cabecalho from '@/components/Cabecalho'
export default {
  components: {
    Cabecalho
  },
  data () {
    return {
      tblCliente: {
        cabecalho: [
          {text: '#', value: 'id'},
          {text: 'Nome', value: 'nome'},
          {text: 'Telefone', value: 'telefone'},
          {text: 'E-mail', value: 'email'},
          {text: 'Situação', value: 'situacao'}
        ],
        item: []
      }
    }
  }
}
</script>

<style>
</style>
