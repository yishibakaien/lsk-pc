<template lang="html">
  <section>
    <div class="register__header">
      <div class="register__header--wrapper">
        <div class="register__header--left">
         <router-link tag="span" class="logo" to="/"></router-link>
          <strong class="register__header--link">欢迎注册蕾丝控</strong>
        </div>
        <div class="register__header--right">
          已有账号？<router-link tag="strong" to="/login" class="register__header--link is-link">请登录</router-link>
        </div>
      </div>
    </div>
    <div class="register__content">
      <el-form :model="registerForm" :rules="rules" refs="registerForm" label-width="80px">
        <el-form-item label="手机号码" prop="userMobile">
          <el-input v-model="registerForm.userMobile" placeholder="请输入您的手机号码" :maxLength="11"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="smsCode">
          <el-input :maxLength="6" v-model="registerForm.smsCode" class="register__form--verifyCode"></el-input>
          <timer-btn @click="handleGetCode" :disabled="isDisabledSms">获取短信验证码</timer-btn>
        </el-form-item>
        <el-form-item label="密码" prop="userPWD">
          <el-input type="password" v-model="registerForm.userPWD" placeholder="请输入您的登录密码" :maxLength="16"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPwd">
          <el-input type="password" v-model="registerForm.confirmPwd" placeholder="请再次输入您的登录密码" :maxLength="16"></el-input>
        </el-form-item>
        <el-form-item label="公司名称" prop="companyName">
          <el-input v-model="registerForm.companyName" placeholder="
  请输入公司名称，个人用户请填写“个人”" :maxLength="20"></el-input>
        </el-form-item>
        <el-form-item label="联系人" prop="phone">
          <el-input v-model="registerForm.phone" placeholder="请输入联系人" :maxLength="20"></el-input>
        </el-form-item> 
        <el-form-item prop="checked">
          <el-checkbox v-model="registerForm.checked">我已阅读并同意</el-checkbox>
        </el-form-item>
        <el-button class="register__content--button" type="primary" :disabled="!registerForm.checked">完成注册</el-button>
      </el-form>
    </div>
  </section>
</template>

<script>
import TimerBtn from '@/components/page/register/timerBtn'
import {getRegSMSCode} from '@/services/user'
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
          if (this.registerForm.confirmPwd !== '') {
            this.$refs.registerForm.validateField('confirmPwd');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.userPWD) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    // ======
    return {
      registerForm: {
        phone: '',
        companyName: '',
        userPWD: '',
        confirmPwd: '',
        companyName: '',
        checked:''
      },
      rules:{
        userPWD: [
            { validator: validatePass, trigger: 'blur' }
          ],
        confirmPwd: [
            { validator: validatePass2, trigger: 'blur' }
          ],
      }
    }
  },
  computed: {
    isDisabledSms() {
      return this.registerForm.phone.length === 0
     }
  },
  components: {
    TimerBtn
  },
  methods: {
    handleGetCode() {
      try{
        getRegSMSCode({mobile:this.registerForm.phone})
      } catch(e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
:root{
  --button-left:80px;
}
@b register{
  @e header {
    box-shadow: $border-shadow;
      @m wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        size: 1200px 110px;
        margin: 0 auto;
      }
      @m right {
          color: $color-primary;
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
      @m link{
        color: $color-black;
        font-size: $font-size-6;
        &:hover{
          color:$color-grey-10;
        }
        @when link{
          cursor: pointer;
          font-size: $font-size-4;
        }
      }
  }
  @e form {
    @m verifyCode{
      width: 170px;
      margin-right: 20px;
    }
  }
  @e content{
    max-width: 400px;
    margin: 100px auto;
    @m button{
      margin-left: var(--button-left);
      width: calc(100% - 20%);
    }
  }
}
</style>
