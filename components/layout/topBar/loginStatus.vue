<template lang="html">
  <div class="header__menu">
    <span v-if="!userInfo">
      <router-link to="/login" tag="a">请登录</router-link>
      <router-link to="/register" tag="a">免费注册</router-link>
    </span>
    <span v-else>
      <router-link to="/home/person" tag="a">{{userInfo.userName}}</router-link>
      <a @click="handleLogout">[退出]</a>
    </span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo'
    })
  },
  methods: {
    handleLogin() {
      this.$router.push('/login')
    },
    handleLogout() {
      this.$store.dispatch('user/loginOut')  
    }
  }
}
</script>

<style lang="scss" scoped>
@b header {
     @e menu{
        a {
            padding: 0 10px;
            &:last-child {
                border-left: 1px solid $color-grey-4;
            }
        }
    }
}
</style>
