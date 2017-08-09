<template lang="html">
  <section class="home">
    <header-bar></header-bar>
    <nav-item>
      <span class="home__nav--phone"><i class="iconfont icon-tuoyuan1kaobei3"></i>4008-013357</span>
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
  position: relative;
  @e nav{
    @m phone{
      position: absolute;
      right: 10px;
      color:$color-white;
      font-size: $font-size-5;
      font-weight: 600;
      padding-left: 14px;
    }
  }
  @e main {
    margin-top: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 16px;
    min-height: 350px;
  }
}
</style>
