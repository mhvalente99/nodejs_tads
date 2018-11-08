<template>
  <div id="menu">
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.mdAndUp"
      app
      v-model="gaveta"
      class="mt-4">
      <v-list dense class="mt-5">
        <template v-for="item in lstMenu">
          <v-list-tile @click="$router.push(item.link)" :key="item.texto">
            <v-list-tile-action>
              <v-icon>{{item.icone}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              {{item.texto}}
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      lstMenu: [
        { icone: 'home', texto: 'Página Inicial', link: 'home' },
        { icone: 'person', texto: 'Cliente', link: 'cliente' },
        { icone: 'local_offer', texto: 'Produto', link: 'produto' },
        { icone: 'local_grocery_store', texto: 'Pedido', link: 'pedido' }
      ]
    }
  },
  props: [
    'gaveta'
  ]
}
</script>

<style scoped>
</style
