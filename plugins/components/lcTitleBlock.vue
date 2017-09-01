<template>
<div class="lc-title-block">
  <span class="lc-title-block__title" :style="bodyStyle">
    <slot></slot>
  </span>
  <div class="lc-title__block__menu">
    <slot name="menu"></slot>
  </div>
</div>
</template>

<script>
// 大标题（例如：————入驻信息————）
//
// **********
// ** 用 法 **
// **********
// <lc-title-block :bodyStyle="{fontSize:14px}"></lc-title-block>
export default {
  props: {
    bodyStyle: {
      type: Object,
      default: function() {
        return {
          fontSize: '32px'
        };
      }
    }
  }
};
</script>

<style lang="css" scoped>
:root{
  --title-block-border-color:#E5E5E5;
}
@component-namespace lc{
  @b title-block{
    text-align: center;
    margin: 30px 0;
    position: relative;
    @e menu{
      right: 0;
      bottom: 50%;
      transform: translateY(50%);
      position: absolute;
    }
    @e title{
      line-height: 45px;
      position: relative;
      &:before{
        content:' ';
        position: absolute;
        top:50%;
        left:0;
        background: var(--title-block-border-color);
        size: 230px 1px;
        transform: translate(-130%,-50%);
      }
      &:after{
        content:' ';
        position: absolute;
        top:50%;
        right:0;
        background: var(--title-block-border-color);
        size: 230px 1px;
        transform: translate(130%,-50%);
      }
    }
  }
}
</style>
