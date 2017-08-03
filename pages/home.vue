<template lang="html">
  <section>
    <header-bar></header-bar>
      <router-view></router-view>
  </section>
</template>

<script>
import HeaderBar from '@/components/Pages/HeaderBar'
export default {
  components:{
    HeaderBar
  }
}
</script>

<style lang="css">
</style>
