<template lang="html">
  <nav>
    <router-link tag="a" :to="item.path" v-for="item in navs" :key="item.path">{{item.name}}</router-link>
  </nav>
</template>

<script>
import navs from '@/utils/consts/nav.config.json'
export default {
  data() {
    return {
      navs: navs
    }
  },
  methods:{
    nav(path){
      return `/${this.navs[0].path}/${path}`
    }
  }
};
</script>

<style lang="css">
</style>
