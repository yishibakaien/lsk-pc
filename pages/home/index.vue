<template lang="html">
  <section class="index-wrapper">
    <home-carousel></home-carousel>
    <home-latest></home-latest>
    <home-demand></home-demand>
    <home-design></home-design>
    <home-best></home-best>
  </section>
</template>

<script>
import HomeBest from '@/components/page/home/HomeBest'
import HomeCarousel from '@/components/page/home/HomeCarousel'
import HomeDemand from '@/components/page/home/HomeDemand'
import HomeDesign from '@/components/page/home/HomeDesign'
import HomeLatest from '@/components/page/home/HomeLatest'
export default {
  data() {
    return {
      Tab: {
        supply: '0',
        newFlower: '0'
      }
    }
  },
  methods: {

  },
  components: {
    HomeBest,
    HomeCarousel,
    HomeDemand,
    HomeDesign,
    HomeLatest
  }
}
</script>

<style lang="scss" scoped>
:root {
    // 广告位
    --advert-padding: 40px;
    // 内容区
    --padding-top: 600px;
}
@b index-wrapper {
    padding-top: var(--padding-top);
}
@b advert {
    padding: var(--advert-padding);
}
</style>
<style lang="scss">
.index-wrapper {
    .el-tabs__header {
        border-bottom: 2px solid $color-primary;
    }
    .el-tabs__nav {
        float: none;
        text-align: center;
    }
    .el-tabs__active-bar {
        background: transparent;
    }
    .el-tabs__item + .el-tabs__item {
        position: relative;
        &:before {
            content: '';
            position: absolute;
            transform: translateY(-50%);
            top: 50%;
            left: 0;
            width: 1px;
            height: 40%;
            background: $color-grey-4;
        }
    }
    .el-tabs__item.is-active {
        position: relative;
        &:after {
            position: absolute;
            content: '';
            width: 0;
            height: 0;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            border-bottom: 8px solid $color-primary;
            border-top: 8px solid transparent;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
        }
    }
}
</style>
