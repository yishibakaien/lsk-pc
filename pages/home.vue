<template lang="html">
  <section>
    <header-bar></header-bar>
    <nav-item></nav-item>
    <router-view></router-view>
  </section>
</template>

<script>
import NavItem from '@/components/layout/Nav'
import HeaderBar from '@/components/layout/HeaderBar'
export default {
  components: {
    HeaderBar,
    NavItem
  }
}
</script>

<style lang="css">
</style>
