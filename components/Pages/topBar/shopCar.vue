<template lang="html">
  <section class="shopcar">
    <span class="shopcar--button">
      我的购物车
      <i class="shopcar--tag">0</i>
    </span>
    <div class="shopcar__item--inner">

    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@b shopcar{
  @m button{
    padding: 6px 30px;
    border: 1px solid #eaeaea;
    background: #999;
    position: relative;
    size:120px 50px;
    box-sizing: border-box;
  }
  @m tag{
    background: blue;
    padding: 4px;
    circle: 4px;
    top:0;
    right: 0;
    position: absolute;
  }
}
</style>
