<template lang="html">
  <section>
    <header-bar></header-bar>
    <nav-item>
      <span class="home__nav--phone">4008-013357</span>
    </nav-item>
    <div class="home__main">
      <router-view></router-view>
    </div>
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

<style lang="scss" scoped>
@b home{
  @e nav{
    @m phone{
      position: absolute;
      right: 10px;
    }
  }
  @e main {
    margin-top: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 16px;
  }
}
</style>
