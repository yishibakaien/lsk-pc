<template lang="html">
  <section class="shopcar">
    <div class="shopcar__header">
      <div class="shopcar__header--button" :class="{'is-hiddenBorder':isShow}" @mouseover="isShow=true" @mouseout="isShow=false">
        <p class="shopcar__header--badge">
          <i class="iconfont icon-gouwuchekong_"></i>
          <span class="shopcar__header--inner">我的购物车</span>
          <span class="value">3</span>
        </p>
      </div>
    </div>
    <div class="shopcar__content" v-show="isShow" :class="{'is-hiddenBorder':isShow}" :style="{'top':getContentTop}">
      <span>dasdasjldkl<br></span>
      <span>dasdasjldkl<br></span>
      <span>dasdasjldkl<br></span>
      <span>dasdasjldkl<br></span>
      <span>dasdasjldkl<br></span>
      <span>dasdasjldkl<br></span>
      <span>dasdasjldkl<br></span>
      <span>dasdasjldkl<br></span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    getContentTop() {
      return
    }
  }
}
</script>

<style lang="scss" scoped>
:root {
    --height: 38px;
    --width:160px;
    --cirle-height:18px;
}
@b shopcar {
    position: relative;
    display: inline-block;
    @e header {
         @m button{
            padding: 0 20px;
            height: var(--height);
            line-height: var(--height);
            position: relative;
            color: $color-primary;
            border: 1px solid $color-grey-4;
            box-sizing: border-box;
            width: var(--width);
            background: $color-white;
            cursor: pointer;
            @when hiddenBorder {
                border-bottom-color: $color-white;
                z-index: 2;
            }
        }
        @m inner {
            padding-right: 8px;
        }
        @m badge{
          position: relative;
          .value{
            position: absolute;
            right: 0;
            top:2px;
            line-height: var(--cirle-height);
            text-align: center;
            circle:var(--cirle-height)  $color-primary;
            color: $color-white;
          }
        }
    }
    @e content {
        border: 1px solid $color-grey-4;
        position: absolute;
        left: auto;
        right: 0;
        top: calc(var(--height) - 1px);
        background: $color-white;
        min-width: 200px;
        padding: 10px;
    }
}
</style>
