<template lang="html">
  <div class="header__menu">
    <a @click="handleLogin">请登录</a>
    <router-link to="/register" tag="a">免费注册</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="scss" scoped>
@b header {
     @e menu{
        a {
            padding: 0 4px;
        }
    }
}
</style>
