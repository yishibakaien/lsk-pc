<template lang="html">
  <section class="security">
    <el-row :gutter="10">
      <el-col :span="3">您当前的账号</el-col>
      <el-col :span="18">13928766967</el-col>
      <el-col :span="3">&nbsp;</el-col>
      <el-col :span="3">登录密码</el-col>
      <el-col :span="18">建议您定期更换密码，设置安全性高的密码可以使帐号更安全</el-col>
      <el-col :span="3">
        <el-button type="text">修改</el-button>
      </el-col>
      <el-col :span="3">手机号码</el-col>
      <el-col :span="18">绑定手机：139****6967，若手机丢失或停用，请及时更换</el-col>
      <el-col :span="3">
        <el-button type="text">更换</el-button>
      </el-col>
    </el-row>
    <!-- ====== -->
    <!-- 对话框 -->
    <!-- ====== -->
    <!-- 1.修改密码 -->
    <el-dialog title="修改密码" :visible.sync="Dialog.editPwd" size="tiny" :before-close="handleCloseEditPwd">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
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
      }
    }
  }
}
</script>

<style lang="css">
</style>
