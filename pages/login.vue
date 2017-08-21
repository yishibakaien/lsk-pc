<template lang="html">
  <section class="login">
    <div class="login__header">
      <div class="login__header--left">
        <router-link tag="span" class="logo" to="/"></router-link>
        <strong class="login__header--link">欢迎登录蕾丝控</strong>
      </div>
      <div class="login__header--right">
        <i class="iconfont icon-tuoyuan1kaobei3"></i>
        <span>4008-013357</span>
      </div>
    </div>
    <div class="login__wrapper">
      <div class="login__wrapper--inner">
        <el-tabs v-model="loginTab" v-if="show.loginForm">
          <el-tab-pane label="用户登录" name="1">
          <!-- 用户登录 -->
            <el-form :model="userForm" :rules="rules" ref="userForm" class="login__form">
              <el-form-item prop="userMobile">
                <el-input v-model="userForm.userMobile" :maxLength="11">
                   <template slot="prepend"><i class="iconfont icon-shouji"></i></template>
                </el-input>
              </el-form-item>
              <el-form-item prop="userPWD">
                <el-input v-model="userForm.userPWD" type="password" :maxLength="16">
                   <template slot="prepend"><i class="iconfont icon-shouji"></i></template>
                </el-input>
              </el-form-item>
              <el-form-item prop="picCode" v-if="show.picCode">
                <el-input v-model="userForm.picCode" class="login__form--picCode">
                   <template slot="prepend"><i class="iconfont icon-zhaungtaiquxiao"></i></template>
                </el-input>
                <img v-lazy="PicCode" alt="验证码">
              </el-form-item>
              <div class="login__form--footer">
                <el-button type="text" @click="show.loginForm=!show.loginForm">忘记密码？</el-button>
              </div>
              <el-button type="primary" @click="handleLogin('userForm')" class="login__form--button">登录</el-button>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="APP下载" name="2">
            <img v-lazy="'/img/qrcode/app.png'" alt="app下载" width="150" height="150" class="login__qrcode">
            <p class="login__qrcode--text">扫码下载app</p>
          </el-tab-pane>
        </el-tabs>
        <!-- ======= -->
        <!-- 忘记密码 -->
        <el-button type="text" @click="show.loginForm=!show.loginForm" v-if="!show.loginForm"><i class="el-icon-arrow-left"></i>返回上一层</el-button>
        <el-form :model="pwdForm" :rules="rules" ref="pwdForm" class="login__form" label-width="94px" v-if="!show.loginForm">
          <el-form-item prop="userMobile" label="手机号">
            <el-input v-model="pwdForm.userMobile" :maxLength="11">
            </el-input>
          </el-form-item>
          <el-form-item prop="userPWD" label="新密码">
            <el-input v-model="pwdForm.userPWD" type="password" :maxLength="16">
            </el-input>
          </el-form-item>
          <el-form-item prop="confirmPwd" label="确认新密码">
            <el-input v-model="pwdForm.confirmPwd" type="password" :maxLength="16">
            </el-input>
          </el-form-item>
          <el-form-item prop="smsCode" label="短信验证码">
            <el-input v-model="pwdForm.smsCode" class="login__form--codeInput" :maxLength="6">
            </el-input>
             <timer-btn @click="handleGetCode">获取短信验证码</timer-btn>
          </el-form-item>
          <el-button type="primary" @click="handleFindPwd('pwdForm')" class="login__form--button">确认</el-button>
        </el-form>
        <!-- ======= -->
      </div>
    </div>
  </section>
</template>
<script>
import TimerBtn from '@/components/page/register/timerBtn'
import {login, getVerifyCode, findPassWd, getRegSMSCode} from '@/services/user'
import {Encrypt} from '@/utils/utils'
export default {
  middleware: 'anonymous',
  data() {
    // =========
    //  校验密码
    // =========
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.pwdForm.confirmPwd !== '') {
            this.$refs.pwdForm.validateField('confirmPwd');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.pwdForm.userPWD) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      // =========
    return {
      show:{
       loginForm: true,
       picCode:false, 
      },
      loginTab: '1',
      PicCode:'',
      userForm: {
        userMobile: '',
        userPWD: '',
        picCode:''
      },
      pwdForm: {
        userMobile: '',
        confirmPwd: '',
        userPWD: '',
        smsCode: '',
        picCode: ''
      },
      rules: {
        userMobile: [{
          required: true,
          trigger: 'blur',
          message: '请输入用户的账号'
        }],
        userPWD: [{
          required: true,
          trigger: 'blur',
          message: '请输入用户的密码'
        }],
        picCode: [{
          required: true,
          trigger: 'blur',
          message: '请输入图片验证码'
        }],
        smsCode: [{
          required: true,
          trigger: 'blur',
          message: '请输入短信验证码'
        }],
        userPWD: [{ 
          validator: validatePass, 
          required: true,
          trigger: 'blur' 
        }],
        confirmPwd: [{ 
          validator: validatePass, 
          required: true,
          trigger: 'blur' 
        }]
      }
    }
  },
  components: {
    TimerBtn
  },
  methods: {
    // 找回密码
    handleFindPwd(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
        try{
          await findPassWd(this.pwdForm)
        }catch(e){
          this.pwdForm.userPWD = ''
          if (e === 2000004) {
            this.show.picCode = true
            this.PicCode = 'data:image/jpeg;base64,' + await getVerifyCode()
            this.$store.commit('user/SET_USER')
          }
        }
        }
      })
    },
    // 登录
    handleLogin(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
        this.userForm.userPWD = Encrypt(this.userForm.userPWD)
        try{
          await this.$store.dispatch('user/login', this.userForm)
          await this.$router.push({
          path: decodeURIComponent(this.$route.query.redirect || '/')
        });
        }catch(e){
          this.userForm.userPWD = ''
          if (e === 2000004) {
            this.show.picCode = true
            this.PicCode = 'data:image/jpeg;base64,' + await getVerifyCode()
          }
        }
        }
      })
    },
    async handleGetCode() {
      await getRegSMSCode({mobile: this.pwdForm.userMobile})
    }
  }
}
</script>

<style lang="scss" scoped>
@b login {
     @e wrapper{
        background: url("/img/bg/login.jpg")no-repeat;
        background-size: auto 100%;
        position: relative;
        background-position: center 10%;
        height: 600px;
        background-color: $color-white;
        @m inner {
            size: 350px 400px;
            position: absolute;
            right: 19.7%;
            top: 100px;
            background: $color-white;
        }
    }
    @e qrcode {
        margin-left: 100px;
        margin-top: 50px;
        border: 1px solid $color-grey-2;
        @m text {
            text-align: center;
            color: $color-grey-9;
            padding-top: 22px;
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
                background: url("/img/logo/logo.png")no-repeat;
                background-size: 100%;
                background-position-y: center;
                size: 200px 56px;
                display: inline-block;
                vertical-align: middle;
                margin-right: 30px;
                cursor:pointer;
            }
        }
        @m link {
            font-size: $font-size-6;
        }
    }
    @e form {
        padding: 10px;
        margin-top: 50px;
        padding: 0 35px;
        text-align: center;
        @m footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
        }
        @m button {
            width: 280px;
        }
        @m codeInput {
            width: 38%;
            margin-right: 3%;
        }
        @m picCode{
            width: 65%;
            margin-right: 2%;
           & + img{
              vertical-align:middle;
              height: 34px;
            }
        }
    }
}
</style>
<style lang="scss">
.login__wrapper {
    .el-input-group__prepend {
        // background: $color-white;
        font-size: $font-size-5;
        // color: $color-grey-6;
        padding: 0 3px;
        // &:after{
        //   content: '';
        //   position: absolute;
        //   size:1px 60%;
        //   background: $color-grey-6;
        //   top:50%;
        //   right: 0;
        //   transform: translateY(-50%);
        // }
    }
    .el-input__inner {
        // border-left: none;
    }
    .el-tabs__active-bar {
        background: transparent;
    }
    .el-tabs__nav {
        float: none;
    }
    .el-tabs__item {
        text-align: center;
        width: 50%;
        & + .el-tabs__item {
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
