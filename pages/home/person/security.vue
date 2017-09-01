<template lang="html">
  <section class="security">
    <el-row :gutter="10">
      <el-col :span="4">您当前的账号</el-col>
      <el-col :span="20">{{userInfo.userMobile}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <i class="iconfont icon-xuanzhe"></i>
        登录密码
      </el-col>
      <el-col :span="17">建议您定期更换密码，设置安全性高的密码可以使帐号更安全</el-col>
      <el-col :span="3">
        <el-button class="security__wrapper--button" @click="Dialog.editPwd=true">修改</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <i class="iconfont icon-xuanzhe"></i>
        手机号码
      </el-col>
      <el-col :span="17">绑定手机：139****6967，若手机丢失或停用，请及时更换</el-col>
      <el-col :span="3">
        <el-button class="security__wrapper--button" @click="Dialog.editPhone=true">更换</el-button>
      </el-col>
    </el-row>
    <!-- ====== -->
    <!-- 对话框 -->
    <!-- ====== -->
    <!-- 1.修改密码 -->
    <el-dialog title="修改密码" :visible.sync="Dialog.editPwd" size="tiny" :before-close="handleCloseEditPwd">  
      <el-form :model="pwdForm" :rules="rules" ref="pwdForm" label-width="100px">
        <el-form-item label="原密码" prop="userPasswd">
          <el-input v-model="pwdForm.userPasswd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPasswd">
          <el-input v-model="pwdForm.newPasswd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPwd">
          <el-input v-model="pwdForm.confirmPwd" type="password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="handleEditPwd('addressForm')">确定</el-button>
        <el-button @click="handleCloseEditPwd">取消</el-button>
      </el-form>
    </el-dialog>
    <!-- 2.修改手机 -->
    <el-dialog title="更换手机号码" :visible.sync="Dialog.editPhone" size="tiny" :before-close="handleCloseEditPhone">
      <div class="security__dialog">
        <p>1、更换手机号码需先做登录密码校验，请输入当前账号登录密码；</p>
        <p>2、更换号码后，下次登录使用新号码登录，当前手机号：{{userInfo.userMobile}}；</p>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="登录密码" prop="userPasswd">
          <el-input v-model="ruleForm.userPasswd"></el-input>
        </el-form-item>
        <el-form-item label="新手机" prop="mobile">
          <el-input v-model="ruleForm.mobile" placeholder="请填写你新的手机号码"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="smsCode">
          <el-input v-model="ruleForm.smsCode" class="security__form--smsCode"></el-input>  
          <timer-btn @click="handleGetCode" :disabled="isDisabledSms">获取短信验证码</timer-btn>
        </el-form-item>
      </el-form>
       <el-button type="primary" @click="handleEditPhone('ruleForm')">确定</el-button>
        <el-button @click="handleCloseEditPhone">取消</el-button>
    </el-dialog>
  </section>
</template>
<script>
import {mapGetters} from 'vuex'
import {Encrypt} from '@/utils/utils'
import TimerBtn from '@/components/page/register/timerBtn'
import {checkPasswd, restPasswd, getRegSMSCode} from '@/services/user'
export default {
  data() {
    // =========
    //  校验密码
    // =========
    var validateOldPass = async (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入旧密码'));
        } else {
          let {data} = await checkPasswd({userPasswd: Encrypt(value)})
          data.data ? callback() : callback('密码错误，请重新输入')
        }
      };
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
        } else if (Encrypt(value) !== Encrypt(this.pwdForm.newPasswd)) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    // ======
    return {
      Dialog: {
        editPwd: false,
        editPhone: false
      },
      authAccess: true,
      pwdForm: {
        confirmPwd: '',
        newPasswd: '',
        userPasswd: ''
      },
      ruleForm: {
        mobile: '',
        userPasswd: '',
        smsCode: ''
      },
      rules: {
        userPasswd: [{
          required: true,
          validator: validateOldPass,
          trigger: 'blur'
        }],
        newPasswd: [{
          required: true,
          trigger: 'blur',
          validator: validatePass
        }],
        confirmPwd: [{
          required: true,
          trigger: 'blur',
          validator: validatePass2
        }],
        smsCode: [{
          required: true,
          trigger: 'blur',
          message: '请输入短信验证码'
        }],
        mobile: [{
          required: true,
          trigger: 'blur',
          message: '请输入手机号码'
        }]
      }
    }
  },
  computed: {
     ...mapGetters({
      userInfo: 'user/userInfo'
    }),
     isDisabledSms() {
      return this.ruleForm.mobile.length === 0
     }
  },
  components: {
    TimerBtn
  },
  methods: {
    handleCloseEditPwd() {
      this.Dialog.editPwd = false
      this.$refs['pwdForm'].resetFields()
    },
     handleCloseEditPhone() {
      this.Dialog.editPhone = false
      this.$refs['ruleForm'].resetFields()
    },
    handleEditPwd() {
      this.$refs['pwdForm'].validate(async(valid) => {
        if (valid) {
          try{
            this.pwdForm.newPasswd = Encrypt(this.pwdForm.newPasswd)
            this.pwdForm.userPasswd = Encrypt(this.pwdForm.userPasswd)
            await restPasswd(this.pwdForm)
            this.Dialog.address = false
            this.$refs['pwdForm'].resetFields()
            this.$store.dispatch('user/loginOut')  
          }catch(e){
            console.error('修改密码出错')
          }
        }
      })
    },
    async handleGetCode() {
      this.$refs.ruleForm.validateField('mobile', async(valid) => {
        if(!valid){
           try{
            await getRegSMSCode({mobile:this.ruleForm.mobile})
            }catch(e){
            console.error('获取验证码失败')
          }
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@b security {
    box-sizing: border-box;
    padding-top: 86px;
    padding-left: 30px;
    .el-col {
        margin-bottom: 28px;
    }
    .icon-xuanzhe {
        color: $color-info;
    }
    @e wrapper {
         @m button{
            width: 120px;
        }
    }
    @e form {
      @m smsCode{
        width:50%;
        margin-right:2%;
      }
    }
    @e dialog{
      background: $color-extra-white;
      padding: 10px;
      line-height: 150%;
      margin-bottom: 10px;
    }
}
</style>
