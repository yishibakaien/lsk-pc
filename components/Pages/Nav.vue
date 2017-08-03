<template lang="html">
  <nav>
    <router-link tag="a" :to="item.path" v-for="item in navs">{{item.name}}</router-link>
  </nav>
</template>

<script>
import navs from '@/utils/consts/nav.config.json'
export default {
  data() {
    return {
      navs: navs
    }
  }
};
</script>

<style lang="css">
</style>
