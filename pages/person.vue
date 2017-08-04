<template lang="html">
  <el-row>
    <el-tol :span="4">
      <div class="person-menu">
        <div class="person-menu__avatar">
          <div class="person-menu__avatar--inner">
            <img src="" alt="">
            <i class="el-icon-picture"></i>
          </div>
          <p>用户账号</p>
        </div>
      </div>
    </el-tol>
    <el-tol :span="20">
      <div class="person-content">
        <router-view></router-view>
      </div>
    </el-tol>
  </el-row>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
</style>
