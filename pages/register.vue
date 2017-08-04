<template lang="html">
  <section>
    <el-form :model="registerForm" :rules="rules" refs="registerForm">
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="ruleForm.phone" placeholder="请输入您的手机号码"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="phone">
        <el-input v-model="ruleForm.phone" :disabled="true"></el-input>
        <el-button>获取短信验证码</el-button>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" placeholder="请输入您的登录密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="phone">
        <el-input type="password" v-model="ruleForm.confirmPassword" placeholder="请再次输入您的登录密码"></el-input>
      </el-form-item>
      <el-form-item label="公司名称" prop="phone">
        <el-input v-model="ruleForm.companyName" placeholder="
请输入公司名称，个人用户请填写“个人”"></el-input>
      </el-form-item>
      <el-form-item label="联系人" prop="phone">
        <el-input v-model="ruleForm.phone" placeholder="请输入公司名称，个人用户请填写“个人”"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked">我已阅读并同意</el-checkbox>
      <el-button>完成注册</el-button>
    </el-form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        phone: '',
        companyName: '',
        password: '',
        companyName: ''
      },
      rules:[]
    }
  }
}
</script>

<style lang="css">
</style>
