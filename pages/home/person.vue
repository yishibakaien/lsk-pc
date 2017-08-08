<template lang="html">
  <el-row :gutter="20">
    <el-col :span="4">
      <div class="person__menu">
        <div class="person__avatar">
          <div class="person__avatar--inner">
            <lc-image width="120" :error="require('@/assets/img/default/touxiang.jpg')" class="person__avatar--img"></lc-image>
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
  getNameByRoute
} from '@/utils/utils'
import {
  mapGetters
} from 'vuex'
export default {
  fetch({
    route,
    redirect
  }) {
    if (route.name === 'home-person') {
      redirect('/home/person/info')
    }
  },
  computed: {
    ...mapGetters(['personNav']),
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
        border: 1px solid #eaeaea;
        padding: var(--menu-padding);
        @m item {
            border-top: 1px dotted #eaeaea;
            text-align: center;
            .subItem {
                padding: 10px 0;
            }
            .is-active {
                color: blue;
                position: relative;
                &:before {
                    content: "";
                    position: absolute;
                    width: 4px;
                    height: 100%;
                    background: blue;
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
            circle: 50px #fff;
            margin-bottom: 10px;
        }
        @m photo {
            position: absolute;
            bottom: 10px;
            right: 4px;
            font-size: 18px;
        }
    }
}
</style>
