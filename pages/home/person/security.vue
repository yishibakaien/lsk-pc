<template lang="html">
  <section class="security">
    <el-row :gutter="10">
      <el-col :span="4">您当前的账号</el-col>
      <el-col :span="20">13928766967</el-col>
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
        <el-button class="security__wrapper--button">更换</el-button>
      </el-col>
    </el-row>
    <!-- ====== -->
    <!-- 对话框 -->
    <!-- ====== -->
    <!-- 1.修改密码 -->
    <el-dialog title="修改密码" :visible.sync="Dialog.editPwd" size="tiny" :before-close="handleCloseEditPwd">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="原密码" prop="originPwd">
          <el-input v-model="ruleForm.originPwd"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPwd">
          <el-input v-model="ruleForm.confirmPwd"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 2.修改手机 -->
    <el-dialog title="更换手机号码" :visible.sync="Dialog.editPhone" size="tiny" :before-close="handleCloseEditPwd">
      <div class="security__dialog">
        <p>1、更换手机号码需先做登录密码校验，请输入当前账号登录密码；</p>
        <p>2、更换号码后，下次登录使用新号码登录，当前手机号：13928766967；</p>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
        <el-form-item label="登录密码" prop="originPwd">
          <el-input v-model="ruleForm.originPwd"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
        <el-form-item label="新手机" prop="originPwd">
          <el-input v-model="ruleForm.originPwd" placeholder="请填写你新的手机号码"></el-input>
          <el-button>获取验证码</el-button>
        </el-form-item>
        <el-form-item label="验证码" prop="originPwd">
          <el-input v-model="ruleForm.originPwd"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </section>
</template>

<script>
export default {
  data() {
    return {
      Dialog: {
        editPwd: false,
        editPhone: false
      },
      ruleForm: {
        confirmPwd: '',
        password: '',
        originPwd: ''
      },
      rules: {}
    }
  },
  methods: {

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
}
</style>
