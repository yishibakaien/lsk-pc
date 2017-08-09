<template lang="html">
  <section class="login">
    <div class="login__header">
      <div class="login__header--left">
        <span class="logo"></span>
        <strong>欢迎登录蕾丝控</strong>
      </div>
      <div class="login__header--right">
        <i class="iconfont icon-tuoyuan1kaobei3"></i>
        <span>4008-013357</span>
      </div>
    </div>
    <div class="login__wrapper">
      <div class="login__wrapper--inner">
        <el-tabs v-model="loginTab" @tab-click="handleClick">
          <el-tab-pane label="用户登录" name="1">
            <el-form :model="userForm" :rules="rules" ref="userForm" class="login__form">
              <el-form-item prop="account">
                <el-input v-model="userForm.name"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="userForm.name" type="password" ></el-input>
              </el-form-item>
              <div class="login__form--footer">
                <el-checkbox v-model="checked">记住密码</el-checkbox>
                <el-button type="text">忘记密码？</el-button>
              </div>
              <el-button type="primary" @click="handleLogin('userForm')" class="login__form--button">登录</el-button>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="APP下载" name="2">配置管理</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      loginTab: '1',
      userForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [{
          required: true,
          message: '请输入用户的账号'
        }],
        password: [{
          required: true,
          message: '请输入用户的密码'
        }],
      }
    }
  },
  methods: {
    handleClick() {

    },
    handleLogin(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@b login {
     @e wrapper{
        background: url("~assets/img/bg/login.jpg")no-repeat;
        background-size: auto 100%;
        position: relative;
        background-position: center 10%;
        height: 600px;
        background-color: $color-white;
        @m inner {
            size: 350px 400px;
            position: absolute;
            right: 19.7%;
            top:100px;
            background: $color-white;
        }
    }
    @e header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        size: 1200px 110px;
        margin: 0 auto;
        @m right {
            color: $color-primary;
            font-size: $font-size-5;
        }
        @m left {
            .logo {
                background: url("~assets/img/logo/logo.png")no-repeat;
                background-size: 100%;
                background-position-y: center;
                size: 200px 56px;
                display: inline-block;
                vertical-align: middle;
                margin-right: 30px;
            }
        }
    }
    @e form{
      padding: 10px;
      margin-top: 50px;
      text-align: center;
      @m footer{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 40px;
      }
      @m button{
        width: 280px;
      }
    }
}
</style>
<style lang="scss">
.login__wrapper {
    .el-tabs__active-bar {
        background: transparent;
    }
    .el-tabs__nav {
        float: none;
    }
    .el-tabs__item {
        text-align: center;
        width: 50%;
        & + .el-tabs__item{
          position: relative;
          &:after {
              content: '';
              position: absolute;
              height: 50%;
              width: 1px;
              background: $color-grey-2;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
          }
        }

    }
}
</style>
