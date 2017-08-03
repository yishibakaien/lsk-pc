<template lang="html">
  <el-row class="headerBar">
    <el-col :span="6">
      <div class="headerBar__logo"></div>
    </el-col>
    <el-col :span="12" class="headerBar__search">
      <el-input></el-input>
    </el-col>
    <el-col :span="6">
      <shop-car></shop-car>
    </el-col>
  </el-row>
</template>

<script>
import ShopCar from './topBar/shopCar.vue';
export default {
  components:{
    ShopCar
  }
}
</script>

<style lang="scss" scoped>
@b headerBar{
  margin-top: 10px;
  display: flex;
  align-items: center;
  @e logo{
    background: url("~static/image/logo/logo.png")no-repeat;
    background-size: 100%;
    size: 200px 56px;
    @include center;
  }
  @e search{
    padding: 0 20px;
  }
}
</style>
