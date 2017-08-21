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
  <section class="custom-clothes">
    <custom-title>申请版衣定制</custom-title>
    <el-form :model="CustomForm" :rules="rules" refs="CustomForm" label-width="80px" class="custom-clothes__wrapper">
      <el-form-item label="参考图片" prop="refPic">
        <div v-show="false">
          <img src="" alt="参考图片">
        </div>
        <el-button>
          <lc-upload></lc-upload>
          添加图片
        </el-button>
        <span class="custom-clothes__tip">请上传蕾丝花型或者参考样衣图片</span>
      </el-form-item>
      <el-form-item label="公司名称" prop="companyName">
        <el-input v-model="CustomForm.companyName" placeholder="请输入公司的名称"></el-input>
      </el-form-item>
      <el-form-item label="联系人" prop="contactPerson">
        <el-input type="password" v-model="CustomForm.contactPerson" placeholder="请输入联系人的名字"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="contactNumber">
        <el-input v-model="CustomForm.contactNumber" placeholder="请输入联系电话号码"></el-input>
      </el-form-item>
      <el-form-item label="公司地址" prop="companyAddress">
        <el-input v-model="CustomForm.companyAddress" placeholder="请输入公司公司地址"></el-input>
      </el-form-item>
      <el-form-item label="其他说明 " prop="customMemo">
        <el-input v-model="CustomForm.customMemo" type="textarea" placeholder="请输入你想要的内容......"></el-input>
      </el-form-item>
      <p class="custom-clothes__tip is-end">请确保您填写的信息准确，成功申请后请留意工作人员电话</p>
      <el-button type="primary" class="custom-clothes__submit" @click="handleCustom('CustomForm')">提交申请</el-button>
    </el-form>
  </section>
</template>

<script>
import CustomTitle from '@/components/frame/title/CustomTitle'
export default {
  data() {
    return {
      CustomForm: {
        customMemo: '',
        companyName: '',
        contactPerson: '',
        contactNumber: '',
        companyAddress: '',
        companyName: ''
      },
      rules: {
        companyName:[{
          required: true,
          message: '请输入公司名称',
          trigger: 'blur'
        }],
        contactPerson:[{
          required: true,
          message: '请输入联系人',
          trigger: 'blur'
        }],
        companyAddress:[{
          required: true,
          message: '请输入公司地址',
          trigger: 'blur'
        }],
        contactNumber:[{
          required: true,
          message: '请输入联系电话',
          trigger: 'blur'
        }],
      }
    }
  },
  methods: {
    handleCustom(formName) {
      this.$refs[formName].validate(async(valid) => {
      if (valid) {
        console.log(1);
      }
    });
    }
  },
  components: {
    CustomTitle
  }
}
</script>

<style lang="scss" scoped>
:root{
  --button-left:80px;
}
@b custom-clothes{
  @e wrapper{
    max-width: 400px;
    margin: 0 auto;
  }
  @e tip{
    font-size: $font-size-1;
    color:$color-grey-7;
    margin-left: 10px;
    @when end{
      margin-left: var(--button-left);
    }
  }
  @e submit{
    margin-top: 10px;
    margin-left: var(--button-left);
  }
}
</style>
>>>>>>> 5ad032fee8e25de0eeb06703ac3e729486074978
