<template lang="html">
  <section class="shopcar">
    <div class="shopcar__header">
      <div class="shopcar__header--button" :class="{'is-hiddenBorder':isShow}" @mouseover="isShow=true" @mouseout="isShow=false">
        <el-badge :value="3">
          <span class="shopcar__header--inner">我的购物车</span>
        </el-badge>
        <i class="el-icon-arrow-right shopcar__header--arrow"></i>
      </div>
    </div>
    <div class="shopcar__content" v-show="isShow" :class="{'is-hiddenBorder':isShow}" :style="{'top':getContentTop}">
      sadjkl<br>
      sadjkl<br>
      sadjkl<br>
      sadjkl<br>
      sadjkl<br>
      sadjkl<br>
      sadjkl<br>
      sadjkl<br>
      sadjkl<br>
      sadjkl<br>
      sadjkl<br>
      sadjkl<br>
      sadjkl<br>
      sadjkl<br>
      sadjkl<br>
      sadjkl<br>
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
:root{
  --height: 38px;
}
@b shopcar {
    position: relative;
    display: inline-block;
    @e header {
         @m button{
            padding:0 30px;
            height: var(--height);
            line-height: var(--height);
            position: relative;
            border: 1px solid #eaeaea;
            box-sizing: border-box;
            width: 160px;
            background: #fff;
            @when hiddenBorder {
                border-bottom-color: #fff;
                z-index: 2;
            }
        }
        @m inner {
            padding-right: 8px;
        }
        @m arrow {
            position: absolute;
            right: 10px;
            top: 50%;
            color: grey;
            transform: translateY(-50%);
        }
    }
    @e content {
        border: 1px solid #eaeaea;
        position: absolute;
        left: auto;
        min-width: 200px;
        right: 0;
        top: calc(var(--height) - 1px);
    }
}
</style>
