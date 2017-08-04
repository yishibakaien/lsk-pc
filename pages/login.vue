<template lang="html">
  <section>
    <el-row>
      <el-col :span="4">
        蕾丝控
      </el-col>
      <el-col :span="20">
        欢迎登录蕾丝控
      </el-col>
    </el-row>
    <div class="login-wrapper">
      <el-form :model="userForm" :rules="rules" ref="userForm" label-width="100px">
        <el-form-item label="账号" prop="account">
          <el-input v-model="userForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="userForm.name" type="password" ></el-input>
        </el-form-item>
        <el-button type="primary" @click="handleLogin('')">登录</el-button>
      </el-form>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
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

<style lang="css" scoped>
</style>
