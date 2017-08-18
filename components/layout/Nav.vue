<template lang="html">
  <nav class="nav">
    <span class="nav__lace"></span>
    <router-link tag="span" :to="item.path" v-for="item in navItem" :key="item.path" class="nav__item" active-class="is-active" exact>{{item.name}}/{{item.iN8nName}}</router-link>
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
:root{
  --height: 52px;
}
@b nav{
  height:var(--height);
  line-height: var(--height);
  transition: .1s;
  text-align: center;
  background-color: $color-primary;
  position: relative;
  @e lace{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    height: 14px;
    width: 100%;
    background: url('~static/img/material/lace.png') repeat no-repeat;
  }
  @e item{
    display: inline-block;
    min-width: 160px;
    color:$color-white;
    cursor: pointer;
    @when active{
      background: $color-extra-primary;
    }
  }
}
</style>
