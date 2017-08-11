<template lang="html">
  <el-row class="headerBar">
    <el-col :span="6">
      <router-link to="/" class="headerBar__logo" tag="a"></router-link>
    </el-col>
    <el-col :span="12" class="headerBar__search">
      <search></search>
    </el-col>
    <el-col :span="6">
      <shop-car></shop-car>
    </el-col>
  </el-row>
</template>

<script>
import ShopCar from './headerBar/ShopCar';
import Search from './headerBar/Search';
export default {
  components:{
    ShopCar,
    Search
  }
}
</script>

<style lang="scss" scoped>
@b headerBar{
  margin: 16px 0;
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
