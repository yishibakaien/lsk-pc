<template lang="html">
  <el-row :gutter="20">
    <el-col :span="4">
      <div class="person__menu">
        <div class="person__avatar">
          <div class="person__avatar--inner">
            <lc-image width="100" class="person__avatar--img" :src="userInfo.userHeadIcon"></lc-image>
            <i class="el-icon-picture person__avatar--photo"></i>
          </div>
          <p>用户账号</p>
        </div>
        <nav>
          <div class="person__menu--item" v-for="item in getNav">
            <div class="subItem" v-for="subItem in personNav[item]">
              <router-link active-class="is-active" :to="subItem.path">{{subItem.name}}</router-link>
            </div>
          </div>
        </nav>
      </div>
    </el-col>
    <el-col :span="20">
      <div class="person-content">
        <router-view></router-view>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  fetch({
    route,
    store,
    redirect
  }) {
    if (route.name === 'home-person') {
      redirect('/home/person/info')
    }
  },
  computed: {
    ...mapState({
      personNav: state => state.common.personNav,
      userInfo: state => state.user.userInfo
    }),
    getNav() {
      if (this.personNav) {
        return Object.keys(this.personNav)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
:root {
    --menu-padding: 16px;
}
@b person {
     @e menu{
        border: 1px solid $color-grey-5;
        padding: var(--menu-padding);
        @m item {
            border-top: 1px dotted $color-grey-5;
            text-align: center;
            .subItem {
                padding: 10px 0;
            }
            .is-active {
                color: $color-primary;
                position: relative;
                &:before {
                    content: "";
                    position: absolute;
                    width: 4px;
                    height: 100%;
                    background: $color-primary;
                    left: -10px;
                }
            }
        }
    }
    @e avatar {
        text-align: center;
        margin-bottom: var(--menu-padding);
        @m inner {
            position: relative;
            display: inline-block;
        }
        @m img {
            border-radius: 50%;
            margin-bottom: 10px;
        }
        @m photo {
            position: absolute;
            bottom: 20px;
            right: 10px;
            font-size: 18px;
        }
    }
}
</style>
