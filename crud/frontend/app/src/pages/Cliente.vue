<template>
  <div id="cliente">
    <Cabecalho />
    <v-content class="ma-3">
      <h1>Cliente</h1>
      <hr />
      <v-layout wrap>
        <v-flex xs12>
          <v-text-field v-model="filtro" label="Filtro"/>
        </v-flex>
      </v-layout>
      <v-data-table :headers="tblCliente.cabecalho" :items="tblCliente.item" :search="filtro"
      hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.codigo }}</td>
          <td>{{ props.item.nome }}</td>
          <td>{{ props.item.telefone }}</td>
          <td>{{ props.item.email }}</td>
          <td>{{ props.item.situacao | situacao }}</td>
        </template>
      </v-data-table>
    </v-content>
  </div>
</template>

<script>
import Cabecalho from '@/components/Cabecalho'
export default {
  created () {
    this.buscarDados()
  },
  components: {
    Cabecalho
  },
  data () {
    return {
      filtro: '',
      tblCliente: {
        cabecalho: [
          {text: '#', value: 'id'},
          {text: 'Nome', value: 'nome'},
          {text: 'Telefone', value: 'telefone'},
          {text: 'E-mail', value: 'email'},
          {text: 'Situação', value: 'situacao'}
        ],
        item: [
          {
            id: '10',
            nome: 'Matheus Henrique',
            telefone: '(44) 9 97542216',
            email: 'teste@mh.com.br',
            situacao: 'A'
          },
          {
            id: '11',
            nome: 'Camille',
            telefone: '(44) 9 97542216',
            email: 'camille@mh.com.br',
            situacao: 'I'
          }
        ]
      }
    }
  }, filters: {
    situacao: (situacao) => {
      if (!situacao) return
      if (situacao === 'A') return 'Ativo'
      else return 'Inativo'
    }
  },
  methods: {
    buscarDados() {
      this.axios.get('clientes').then((success) => {
        this.tblCliente.item = success.data
        console.log(success)
      })
    }
  }
}
</script>

<style>
</style>
