<<<<<<< HEAD
<template lang="html">
  <section>
    <el-row>
      <!-- ======== -->
      <!-- Carousel -->
      <!-- ======== -->
      <el-col :span="20">
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="4">
        <!-- ======== -->
        <!-- 定制 -->
        <!-- ======== -->
      </el-col>
    </el-row>
    <!-- ======== -->
    <!-- 最新花型 -->
    <!-- ======== -->
    <index-section></index-section>
    <!-- 广告位1 -->
    <div class="">
    </div>
    <!-- ======== -->
    <!-- 优质商家&&最新入驻 -->
    <!-- ======== -->
    <el-row :gutter="10">
      <!-- 优质商家 -->
      <el-col :span="12"></el-col>
      <!--最新入驻  -->
      <el-col :span="12"></el-col>
    </el-row>
    <!-- 广告位2 -->
    <div class="">
    </div>
    <!-- ======== -->
    <!-- 供应求购 -->
    <!-- ======== -->
    <index-section></index-section>
    <!-- ======== -->
    <!-- 版衣专区 -->
    <!-- ======== -->
    <index-section></index-section>
  </section>
</template>

<script>
import IndexSection from '@/components/page/home/IndexSection';
export default {
  components: {
    IndexSection
  }
}
</script>

<style lang="css">
</style>
=======
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
>>>>>>> 5ad032fee8e25de0eeb06703ac3e729486074978
