<<<<<<< HEAD
<template lang="html">
  <section>
    <el-form :model="registerForm" :rules="rules" refs="registerForm">
      <el-form-item label="参考图片" prop="phone">
        <el-input v-model="registerForm.phone" placeholder="请输入您的手机号码"></el-input>
      </el-form-item>
      <el-form-item label="公司名称" prop="phone">
        <el-input v-model="registerForm.phone" :disabled="true"></el-input>
        <el-button>获取短信验证码</el-button>
      </el-form-item>
      <el-form-item label="联系人" prop="password">
        <el-input type="password" v-model="registerForm.password" placeholder="请输入您的登录密码"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input type="password" v-model="registerForm.confirmPassword" placeholder="请再次输入您的登录密码"></el-input>
      </el-form-item>
      <el-form-item label="公司地址" prop="phone">
        <el-input v-model="registerForm.companyName" placeholder="
请输入公司名称，个人用户请填写“个人”"></el-input>
      </el-form-item>
      <el-form-item label="其他说明 " prop="phone">
        <el-input v-model="registerForm.phone" type="textarea" placeholder="请输入联系人"></el-input>
      </el-form-item>
      <el-button>提交申请</el-button>
      <p>请确保您填写的信息准确，成功申请后请留意工作人员电话</p>
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
=======
<template lang="html">
  <section>
    <el-form :model="registerForm" :rules="rules" refs="registerForm">
      <el-form-item label="参考图片" prop="phone">
        <el-input v-model="registerForm.phone" placeholder="请输入您的手机号码"></el-input>
      </el-form-item>
      <el-form-item label="公司名称" prop="phone">
        <el-input v-model="registerForm.phone" :disabled="true"></el-input>
        <el-button>获取短信验证码</el-button>
      </el-form-item>
      <el-form-item label="联系人" prop="password">
        <el-input type="password" v-model="registerForm.password" placeholder="请输入您的登录密码"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input type="password" v-model="registerForm.confirmPassword" placeholder="请再次输入您的登录密码"></el-input>
      </el-form-item>
      <el-form-item label="公司地址" prop="phone">
        <el-input v-model="registerForm.companyName" placeholder="
请输入公司名称，个人用户请填写“个人”"></el-input>
      </el-form-item>
      <el-form-item label="其他说明 " prop="phone">
        <el-input v-model="registerForm.phone" type="textarea" placeholder="请输入联系人"></el-input>
      </el-form-item>
      <el-button>提交申请</el-button>
      <p>请确保您填写的信息准确，成功申请后请留意工作人员电话</p>
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
>>>>>>> 5ad032fee8e25de0eeb06703ac3e729486074978
