<template lang="html">
  <nav class="nav">
    <router-link tag="a" :to="item.path" v-for="item in navItem" :key="item.path">{{item.name}}</router-link>
    <slot></slot>
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
  props: {
    navItem: {
      type: Array,
      default: function() {
        return navs;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@b nav{
  border-bottom: 2px solid blue;
}
</style>
