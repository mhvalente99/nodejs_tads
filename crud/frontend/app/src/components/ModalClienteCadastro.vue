<template>
  <div id="modalClienteCadastro">
    <v-dialog v-model="modal" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark>
          <v-btn icon dark @click.native="close(false)">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Cadastro de Cliente</v-toolbar-title>
        </v-toolbar>
        <v-layout row wrap justify-center>
          <v-flex xs8>
            <v-alert v-if="alertConfig.alertVisible"
              :value="true"
              :dismissible="alertConfig.alertDismissible"
              :icon="alertConfig.alertIcon"
              :type="alertConfig.alertType">
              {{ alertConfig.alertMessage }}
            </v-alert>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field v-model="cliente.codigo" label="ID" disabled />
              <v-text-field v-model="cliente.nome" label="Nome"/>
              <v-text-field v-model="cliente.telefone" label="Telefone"/>
              <v-text-field v-model="cliente.email" label="E-mail"/>
              <v-select v-model="cliente.situacao" label="Situação" :items="cbb.situacao"/>

              <v-btn color="primary" dark @click="salvarCliente">
                <v-icon class="mr-2">save</v-icon>
                Salvar
              </v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
export default {
  data () {
    return {
      cbb: {
        situacao: [
          {text: 'Ativo', value: 'A'},
          {text: 'Inativo', value: 'I'}
        ]
      },
      cliente: {
        codigo: '',
        nome: '',
        telefone: '',
        email: '',
        situacao: 'A'
      },
      valid : true
      ,
      alertConfig : {
        alertVisible : false,
        alertIcon: '',
        alertMessage: '',
        alertDismissible: '',
        alertType: ''
      }
    }
  },
  methods: {
    close (val) {
      this.$emit('cliente', val)
    },
    limpar () {
      this.cliente = {
        codigo: '',
        nome: '',
        telefone: '',
        email: '',
        situacao: 'A'
      }

      this.form = Object.assign({}, this.cliente)
      this.$refs.form.reset()
    },
    salvarCliente () {
      if (this.$refs.form.validate()) {
        if (!this.cliente.codigo) {
          this
            .axios
            .post('clientes', this.cliente)
            .then( (success) => {
              this.alertConfig = {
                alertMessage: 'Cadastrado com sucesso',
                alertVisible: true,
                alertIcon: 'check_circle',
                alertType: 'success',
                alertDismissible: true
              }

              this.limpar()
            })
            .catch( (error) => {
              this.alertConfig = {
                alertMessage: 'Erro ao salvar ' + error,
                alertVisible: true,
                alertIcon: 'error',
                alertType: 'error',
                alertDismissible: true
              }
            })
          }
          else {
            this
              .axios
              .put('clientes/' + this.cliente.codigo, this.cliente)
              .then( () => {
                this.alertConfig = {
                  alertMessage: 'Alterado com sucesso',
                  alertVisible: true,
                  alertIcon: 'check_circle',
                  alertType: 'success',
                  alertDismissible: true
                }

                this.limpar()
              })
              .catch( (error) => {
                this.alertConfig = {
                  alertMessage: 'Erro ao salvar ' + error,
                  alertVisible: true,
                  alertIcon: 'error',
                  alertType: 'error',
                  alertDismissible: true
                }
              })
          }
      }
    }
  },
  props: [
    'modal',
    'registro'
  ],
  watch: {
    registro: function (val) {
      if (val !== '') this.cliente = val
    }
  }
}
</script>

<style>

</style>
