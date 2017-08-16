<<<<<<< HEAD
<template lang="html">
  <person-section title="我的信息">
    <section class="info">
      <el-form :model="infoForm" :rules="rules" refs="infoForm" label-position="right" label-width="100px">
        <el-form-item label="账号" prop="account">
          <p>{{infoForm.account}}</p>
        </el-form-item>
        <el-form-item label="联系人姓名" prop="userName">
          <el-input v-model="infoForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="联系人电话" prop="phone">
          <el-input v-model="infoForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="固话" prop="contactPhone">
          <el-row :gutter="24">
            <el-col :span="7"><el-input v-model="infoForm.phone"></el-input></el-col>
            <el-col :span="16"><el-input v-model="infoForm.phone"></el-input></el-col>
          </el-row>
        </el-form-item>
        <br>
        <br>
        <el-form-item label="公司名称" prop="companyName">
          <el-input v-model="infoForm.companyName" placeholder="请输入公司名称，个人用户请填写“个人”"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="infoForm.address"></el-input>
        </el-form-item>
        <el-form-item label="经营范围" prop="companyBussiness">
          <el-input v-model="infoForm.companyBussiness"></el-input>
        </el-form-item>
        <el-button type="primary" class="info__save--button">保存</el-button>
      </el-form>
    </section>
  </person-section>
</template>

<script>
import personSection from '@/components/page/person/personSection'
export default {
  data() {
    return {
      infoForm: {
        phone: '',
        companyName: '',
        password: '',
        companyName: ''
      },
      rules: {
        userName: [{
          required: true,
          message: '请输入联系人姓名'
        }],
        phone: [{
          required: true,
          message: '请输入联系人电话'
        }]
      }
    }
  },
  components: {
    personSection
  }
}
</script>

<style lang="scss" scoped>
@b info {
    max-width: 400px;
    padding-left:100px;
    @e save {
      @m button{
        @include center;
        width: 130px;
      }
    }
}
</style>
=======
<template lang="html">
  <person-section title="我的信息">
    <section class="info">
      <el-form :model="infoForm" :rules="rules" refs="infoForm" label-position="right" label-width="100px">
        <el-form-item label="账号" prop="account">
          <p>{{infoForm.account}}</p>
        </el-form-item>
        <el-form-item label="联系人姓名" prop="userName">
          <el-input v-model="infoForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="联系人电话" prop="phone">
          <el-input v-model="infoForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="固话" prop="contactPhone">
          <el-row :gutter="24">
            <el-col :span="7"><el-input v-model="infoForm.phone"></el-input></el-col>
            <el-col :span="16"><el-input v-model="infoForm.phone"></el-input></el-col>
          </el-row>
        </el-form-item>
        <br>
        <br>
        <el-form-item label="公司名称" prop="companyName">
          <el-input v-model="infoForm.companyName" placeholder="请输入公司名称，个人用户请填写“个人”"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="infoForm.address"></el-input>
        </el-form-item>
        <el-form-item label="经营范围" prop="companyBussiness">
          <el-input v-model="infoForm.companyBussiness"></el-input>
        </el-form-item>
        <el-button type="primary" class="info__save--button">保存</el-button>
      </el-form>
    </section>
  </person-section>
</template>

<script>
import personSection from '@/components/page/person/personSection'
export default {
  data() {
    return {
      infoForm: {
        phone: '',
        companyName: '',
        password: '',
        companyName: ''
      },
      rules: {
        userName: [{
          required: true,
          message: '请输入联系人姓名'
        }],
        phone: [{
          required: true,
          message: '请输入联系人电话'
        }]
      }
    }
  },
  components: {
    personSection
  }
}
</script>

<style lang="scss" scoped>
@b info {
    max-width: 400px;
    padding-left:100px;
    @e save {
      @m button{
        @include center;
        width: 130px;
      }
    }
}
</style>
>>>>>>> 5ad032fee8e25de0eeb06703ac3e729486074978
