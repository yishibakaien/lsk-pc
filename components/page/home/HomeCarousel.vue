<template lang="html">
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
          <img class="customized__inner--img" v-lazy="'/img/logo/flower_diy.png'" alt="花型定制">
        </div>
      </div>
      <div class="customized" @click="handleDIYClothes">
        <div class="customized__inner">
        <p class="customized__inner--title">版衣定制</p>
        <span>
          Customized<br>Clothes
        </span>
        <img class="customized__inner--img" v-lazy="'/img/logo/design_diy.png'"  alt="版衣定制">
      </div>
    </div>
    </div>
  </el-carousel>
</template>

<script>
export default {
  methods: {
    handleDIYFolwer() {},
    handleDIYClothes() {
      this.$router.push('/home/clothes/custom')
    }
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
@b index-wrapper{
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
