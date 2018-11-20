<template>
  <div id="cliente">
    <Cabecalho />
    <v-content class="ma-3">
      <h1>Cliente</h1>
      <hr />
      <v-layout wrap>
        <v-alert v-if="alertConfig.alertVisible"
          :value="true"
          :dismissible="alertConfig.alertDismissible"
          :icon="alertConfig.alertIcon"
          :type="alertConfig.alertType">
          {{ alertConfig.alertMessage }}
        </v-alert>
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
          <td>
            <v-btn small fab flat @click="editarCliente(props.item)">
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn small fab flat @click="modal.mensagem = true, cliente = props.item">
              <v-icon>delete</v-icon>
            </v-btn>
          </td>
        </template>
        <template slot="no-data">
          <v-btn flat color="primary" @click="buscarDados">
            <v-icon class="mr-2">autorenew</v-icon>
            Recarregar
          </v-btn>
        </template>
      </v-data-table>
      <div style="position: relative">
        <v-btn absolute small dark fab top right @click="modal.cliente = !modal.cliente">
          <v-icon>add</v-icon>
        </v-btn>
      </div>
    </v-content>

    <ModalClienteCadastro :modal="modal.cliente" :registro="cliente" v-on:cliente="closeCliente"/>

    <v-dialog v-model="modal.mensagem" max-width="290">
      <v-card>
        <v-card-title class="headline">Atenção !</v-card-title>
        <v-card-text>
          Deseja realmente excluir ?
        </v-card-text>

        <v-card-actions>
          <v-spacer/>
          <v-btn color="red darken-1" flat @click="modal.mensagem = false">
            Cancelar
          </v-btn>

          <v-btn color="green darken-1" flat @click="excluirCliente(cliente), modal.mensagem = false">
            Sim
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Cabecalho from '@/components/Cabecalho'
import ModalClienteCadastro from '@/components/ModalClienteCadastro'

export default {
  created () {
    this.buscarDados()
  },
  components: {
    Cabecalho,
    ModalClienteCadastro
  },
  data () {
    return {
      alertConfig : {
        alertVisible : false,
        alertIcon: '',
        alertMessage: '',
        alertDismissible: '',
        alertType: ''
      },
      cliente : {},
      filtro: '',
      modal: {
        cliente : false,
        mensagem: false
      },
      tblCliente: {
        cabecalho: [
          {text: '#', value: 'id'},
          {text: 'Nome', value: 'nome'},
          {text: 'Telefone', value: 'telefone'},
          {text: 'E-mail', value: 'email'},
          {text: 'Situação', value: 'situacao'},
          {text: 'Opções', value: 'opcoes'}
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
    },
    closeCliente (val) {
      this.buscarDados()
      this.modal.cliente = val
    },
    editarCliente (val) {
      this.cliente = val
      this.modal.cliente = true
    },
    excluirCliente(val) {
      this
        .axios
        .delete('clientes/' + val.codigo)
        .then( (success) => {
          this.alertConfig = {
            alertMessage: 'Excluido com sucesso',
            alertDismissible: true,
            alertType: 'success',
            alertIcon: 'check_circle',
            alertVisible: true
          }

          this.buscarDados()
        })
        .catch( (error) => {
          this.alertConfig = {
            alertMessage: 'Erro ao excluir ' + error,
            alertDismissible: true,
            alertType: 'error',
            alertIcon: 'error',
            alertVisible: true
          }
        })
    }
  }
}
</script>

<style>
</style>
