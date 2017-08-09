<template>
<div class="header__wrapper">
  <!-- ====== -->
  <!-- POPPER -->
  <!-- ====== -->
  <el-popover ref="personalSetting" placement="bottom" trigger="hover">
    <router-link :key="item.path" :to="handleGoTo(item.path)" v-for="item in personNav.order" tag="a" class="header__menu--item">
      {{item.name}}
    </router-link>
  </el-popover>
  <el-popover ref="myCollection" placement="bottom" trigger="hover">
    <router-link :key="item.path" :to="handleGoTo(item.path)" v-for="item in personNav.collection" tag="a" class="header__menu--item">
      {{item.name}}
    </router-link>
  </el-popover>
  <!-- ====== -->
  <!-- TOPBAR -->
  <!-- ====== -->
  <el-row class="header__wrapper--row">
    <el-col :span="2">
      <router-link to="/" tag="a"><i class="iconfont icon-shouye"></i>蕾丝控首页</router-link>
    </el-col>
    <el-col :span="12">
      <login-status></login-status>
    </el-col>
    <el-col :span="2" v-popover:personalSetting>
      <router-link :to="handleGoTo('info')">个人中心</router-link>
    </el-col>
    <el-col :span="2" v-popover:myCollection>
      <router-link :to="handleGoTo('collectionStore')">我的收藏</router-link>
    </el-col>
    <qrcode-item></qrcode-item>
  </el-row>
</div>
</template>

<script>
import PersonalMenuData from '@/utils/consts/personal-menu.json'
import QrcodeItem from './topBar/qrcode';
import LoginStatus from './topBar/loginStatus'
import {
  mapGetters
} from 'vuex'
export default {
  methods: {
    handleGoTo(path) {
      return `/home/person/${path}`
    }
  },
  computed: {
    ...mapGetters(['personNav'])
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
        font-size: $font-size-1;
        line-height: 33px;
        @m row {
            .el-col-2 {
                text-align: center;
                position: relative;
                &:after {
                    content: '';
                    position: absolute;
                    transform: translateY(-50%);
                    top: 50%;
                    right: 0;
                    width: 1px;
                    height: 60%;
                    background: $color-grey-4;
                }
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
