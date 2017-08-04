<template lang="html">
  <el-row>
    <el-col :span="4">
      <div class="person-menu">
        <div class="person-menu__avatar">
          <div class="person-menu__avatar--inner">
            <img src="" alt="">
            <i class="el-icon-picture"></i>
          </div>
          <p>用户账号</p>
        </div>
        <nav>
          <div v-for="item in getNav">
            <div v-for="subItem in personNav[item]">
              <router-link :to="subItem.path">{{subItem.name}}</router-link>
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
import personNav from '@/utils/consts/personal-menu.json'
export default {
  data() {
    return {
      personNav: personNav
    }
  },
  computed: {
    getNav() {
      return Object.keys(personNav)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
