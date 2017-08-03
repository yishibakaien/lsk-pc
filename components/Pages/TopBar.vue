<template>
<div class="header__wrapper">
  <!-- ====== -->
  <!-- POPPER -->
  <!-- ====== -->
  <el-popover ref="personalSetting" placement="bottom" trigger="hover">
    <router-link :key="item.path" :to="item.path" v-for="item in menuData.order" tag="a" class="header__menu--item">
      {{item.name}}
    </router-link>
  </el-popover>
  <el-popover ref="myCollection" placement="bottom" trigger="hover">
    <router-link :key="item.path" :to="item.path" v-for="item in menuData.collection" tag="a" class="header__menu--item">
      {{item.name}}
    </router-link>
  </el-popover>
  <!-- ====== -->
  <!-- TOPBAR -->
  <!-- ====== -->
  <el-row class="header__wrapper--row">
    <el-col :span="2">蕾丝控首页</el-col>
    <el-col :span="12">
      <login-status></login-status>
    </el-col>
    <el-col :span="2" v-popover:personalSetting>
      <a>个人中心</a>
    </el-col>
    <el-col :span="2" v-popover:myCollection>
      <a>我的收藏</a>
    </el-col>
    <qrcode-item></qrcode-item>
  </el-row>
</div>
</template>

<script>
import PersonalMenuData from '@/utils/consts/personal-menu.json'
import QrcodeItem from './topBar/qrcode';
import LoginStatus from './topBar/loginStatus';
export default {
  data() {
    return {
      menuData: PersonalMenuData
    }
  },
  components: {
    QrcodeItem,
    LoginStatus
  }
}
</script>
<style lang="scss" scoped>
@b header {
     @e wrapper{
        background: #f2f2f2;
        color: #999;
        font-size: $font-size--tip;
        line-height: 33px;
        @m row {
          .el-col-2 {
              text-align: center;
          }
        }
    }
    @e menu {
        a {
            padding-right: 12px;
        }
        @m item {
             @include menu-item;
            display: block;
            text-align: center;
        }
    }
}
</style>
