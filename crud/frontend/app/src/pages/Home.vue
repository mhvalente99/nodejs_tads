<template>
  <div class="hello">
    <Cabecalho />
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
      hello: 'Hello Word'
    }
  },
  name: 'home'
}
</script>

<style scoped>

</style>
