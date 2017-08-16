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
      <!-- ======== -->
      <!-- Carousel -->
      <!-- ======== -->
      <el-carousel height="600px" class="index-wrapper__carousel">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
        <div class="index-wrapper__carousel--button">
          <div class="customized">
            <div class="customized__inner" @click="handleDIYFolwer">
              <p class="customized__inner--title">花型定制</p>
              <span>
                Customized<br>Pattern
              </span>
              <img class="customized__inner--img" src="~assets/img/logo/flower_diy.png" alt="花型定制">
            </div>
          </div>
          <div class="customized" @click="handleDIYClothes">
            <div class="customized__inner">
            <p class="customized__inner--title">版衣定制</p>
            <span>
              Customized<br>Clothes
            </span>
            <img class="customized__inner--img" src="~assets/img/logo/design_diy.png" alt="版衣定制">
          </div>
        </div>
        </div>
      </el-carousel>
    <!-- ======== -->
    <!-- 最新花型 -->
    <!-- ======== -->
    <index-title title="最新花型" subTitle="Latest flower pattern"></index-title>
    <el-tabs v-model="Tab.newFlower" @tab-click="handleClick">
      <el-tab-pane label="全部" name="0">全部</el-tab-pane>
      <el-tab-pane label="面料" name="1">面料</el-tab-pane>
      <el-tab-pane label="大边" name="2">大边</el-tab-pane>
      <el-tab-pane label="小边" name="3">小边</el-tab-pane>
      <el-tab-pane label="睫毛" name="4">睫毛</el-tab-pane>
    </el-tabs>
    <!-- 广告位1 -->
    <lc-image width="1200" height="90" class="index-wrapper__advert"></lc-image>
    <!-- ======== -->
    <!-- 优质商家&&最新入驻 -->
    <!-- ======== -->
    <el-row :gutter="10">
      <!-- 优质商家 -->
      <el-col :span="12"></el-col>
      <!--最新入驻  -->
      <el-col :span="12"></el-col>
    </el-row>
    <!-- ======== -->
    <!-- 供应求购 -->
    <!-- ======== -->
    <index-title title="供应求购" subTitle="Supply Purchase"></index-title>
    <el-tabs v-model="Tab.supply" @tab-click="handleClick">
      <el-tab-pane label="供应" name="0">供应</el-tab-pane>
      <el-tab-pane label="求购" name="1">求购</el-tab-pane>
    </el-tabs>
    <!-- ======== -->
    <!-- 版衣专区 -->
    <!-- ======== -->
    <index-title title="版衣专区" subTitle="Supply Purchase"></index-title>
    <index-title title="优质商家" subTitle="Supply Purchase"></index-title>
  </section>
</template>

<script>
import IndexTitle from '@/components/page/home/IndexSection';
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
    handleClick() {},
    handleDIYFolwer() {
    },
    handleDIYClothes() {
      this.$router.push('/home/clothes/custom')
    }
  },
  components: {
    IndexTitle
  }
}
</script>

<style lang="scss" scoped>
:root {
    // 轮播
    --carousel-top: 124px;
    --carousel--button-right: 20%;
    // 定制按钮
    --customized-width: 292px;
    --customized-height: 230px;
    --customized-border-width: 16px;
    // 广告位
    --advert-padding: 40px;
    // 内容区
    --padding-top: 600px;
}
@b index-wrapper {
    padding-top: var(--padding-top);
    @e carousel {
        background: $color-grey-8;
        position: relative;
        position: absolute;
        top: var(--carousel-top);
        left: 0;
        right: 0;
        @m button {
            position: absolute;
            right: var(--carousel--button-right);
            top: 50%;
            transform: translateY(-50%);
            z-index: 2;
        }
    }
}
@b advert {
    padding: var(--advert-padding);
}
@b customized {
    size: var(--customized-width) var(--customized-height);
    border: var(--customized-border-width) solid $color-grey-1;
    padding: calc(var(--customized-border-width) - 4px);
    background: transparent;
    margin-bottom: 10px;
    box-sizing: border-box;
    @e inner {
        background: $color-white;
        height: 100%;
        padding: 8px;
        box-sizing: border-box;
        position: relative;
        @m title {
            color: $color-primary;
            font-weight: 700;
        }
        @m img {
            position: absolute;
            bottom: 20px;
            right: 20px;
        }
    }
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
