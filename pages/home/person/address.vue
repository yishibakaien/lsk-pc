<<<<<<< HEAD
<template lang="html">
  <section class="address">
    <div class="address__header">
      <p>已保存收货地址(地址最多8条，还能保存6条)</p>
      <el-button @click="Dialog.address=true">
        <i class="el-icon-plus"></i>
        新建地址
      </el-button>
    </div>
    <el-table  :data="tableData" border>
      <el-table-column  label="收货人"   width="180">
        <template scope="scope">
          <el-icon name="time"></el-icon>
        </template>
      </el-table-column>
      <el-table-column label="地址" >
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column  label="联系方式"   width="180">
        <template scope="scope">
          <el-icon name="time"></el-icon>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="300">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button  size="small"  type="danger"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <span class="line"></span>
          <el-button  size="small"  @click="handleDelete(scope.$index, scope.row)">设置默认地址</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- ========= -->
    <!-- **对话框** -->
    <!-- ========= -->
    <el-dialog title="新增地址" :visible.sync="Dialog.address" size="small" :before-close="handleCloseAdd">
      <el-form :model="addForm" :rules="rules" ref="addForm" label-width="100px">
        <el-form-item label="所在地区" prop="originPwd">
          <el-input v-model="addForm.originPwd"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="addForm.address" type="textarea"></el-input>
        </el-form-item>
        <el-row :gutter="12">
          <el-col :span="12">
            <el-form-item label="收货人" prop="address">
              <el-input v-model="addForm.userName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号码" prop="address">
              <el-input v-model="addForm.phone" ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="收货人" prop="confirmPwd">
          <el-input v-model="addForm.confirmPwd"></el-input>
        </el-form-item>
        <el-row :gutter="12">
          <el-col :span="12">
            <el-form-item prop="address">
               <el-checkbox v-model="addForm.checked">设为默认</el-checkbox>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="address__save">
            <el-button type="primary">确定</el-button>
            <el-button>取消</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      addForm: {
        confirmPwd: '',
        checked: false,
        phone: '',
        userName: '',
        address: '',
        originPwd: ''
      },
      rules: {},
      Dialog: {
        address: false
      }
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style lang="scss" scoped>
@b address {
     @e header{
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @e save{
      text-align: right;
    }
}
.line {
    position: relative;
    padding: 0 20px;
    &:after {
        content: '';
        position: absolute;
        width: 1px;
        height: 20px;
        top: 50%;
        background: #eaeaea;
        transform: translateY(-50%);
    }
}
</style>
=======
<template lang="html">
  <section class="address">
    <div class="address__header">
      <p>已保存收货地址(地址最多8条，还能保存{{8 - getListLength}}条)</p>
      <el-button @click="Dialog.address=true" :disabled="getListLength>8">
        <i class="el-icon-plus"></i>
        新建地址
      </el-button>
    </div>
    <el-table  :data="consigneeList">
      <el-table-column  label="收货人"  width="120">
        <template scope="scope">
         {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="地址">
        <template scope="scope">
          {{ scope.row.province | filterArea(AllAreas)}}
          {{ scope.row.city | filterArea(AllAreas)}}
          {{ scope.row.county }}{{ scope.row.address }}
        </template>
      </el-table-column>
      <el-table-column  label="联系方式"  width="130">
        <template scope="scope">
          {{ scope.row.phone }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template scope="scope">
          <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <span class="line"></span>
          <el-button  size="small"  type="text"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column width="100">
        <template scope="scope">
          <el-tag v-if="scope.row.isDef===1">默认地址</el-tag>
          <el-button  v-else size="small"  @click="handleSetDefault(scope.$index, scope.row)">设默认地址</el-button>
        </template>
      </el-table-column>

    </el-table>
    <!-- ========= -->
    <!-- **对话框** -->
    <!-- ========= -->
    <el-dialog title="新增地址" :visible.sync="Dialog.address" size="small" :before-close="handleCloseAdd">
      <el-form :model="addressForm" :rules="rules" ref="addressForm" label-width="100px">
        <el-form-item label="所在地区" prop="area">
          <region-select v-model="addressForm.area"></region-select>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="addressForm.address" type="textarea"></el-input>
        </el-form-item>
        <el-row :gutter="12">
          <el-col :span="12">
            <el-form-item label="收货人" prop="name">
              <el-input v-model="addressForm.name" :maxLength="20"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号码" prop="phone">
              <el-input v-model="addressForm.phone" :maxLength="11"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="12">
            <el-form-item prop="is_def">
               <el-checkbox v-model="addressForm.is_def" :true-label="1" :false-label="0">设为默认</el-checkbox>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="address__save">
            <el-button type="primary" @click="handleAddAddress('addressForm')">确定</el-button>
            <el-button @click="handleCloseAdd">取消</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </section>
</template>

<script>
import RegionSelect from '@/components/page/address/RegionSelect'
import {deleteConsignee,addConsignee,editorConsignee,getConsigneeList,getConsignee,setConsigneeDefault} from '@/services/order'
import {allAreas} from '@/services/util'
export default {
  data() {
    return {
      Dialog: { 
        address:false
      },
      consigneeList:[],
      addressForm: { 
        area: {},
        address: '',
        city: '',
        province: '',
        county: '',
        is_def: '0',
        name: '',
        phone: ''
       },
       AllAreas:[],
       rules:{
          area:[{
            required: true,
            message: '请选择地区'
          }],
          name:[{
            required: true,
            trigger: 'blur',
            message: '请输入收货人姓名'
          }],
          phone:[{
            required: true,
            trigger: 'blur',
            message: '请输入收货人手机号码'
          }],
          address:[{
            required: true,
            trigger: 'blur',
            message: '请输入收货人详细地址'
          }],
       }
    }
  },
  watch: {
    'addressForm.area'(val) {
      this.addressForm.province = val.province
      this.addressForm.city = val.city
      this.addressForm.county = val.county
    }
  },
  components: {
    RegionSelect
  },
  filters: {
    filterArea(val, areaList) {
      try {
        if (!val) {
          return val
        }
        let filter = areaList.filter(item => item['areaCode'].toString() === val.toString())
        return filter[0]['areaName']
      } catch (e) {
        console.log(e)
      }
    }
  },
  async created() {
    this.loadConsigneeList()
    let {data} = await allAreas()
    this.AllAreas = data.data
  },
  computed: {
    getListLength() {
      return this.consigneeList.length
    }
  },
  methods: {
    async loadConsigneeList() {
      try {
      let {data} = await getConsigneeList()
      this.consigneeList = data.data
    }
    catch(e) {
      console.error('获取收货地址列表出错')
    }
    },
    handleEdit(index, row) {
      let formData = JSON.parse(JSON.stringify(row))
      formData.area = {
        city: row.city,
        province: row.province,
        county: row.county,
      }
      this.addressForm = formData
      this.Dialog.address = true
      console.log(this.addressForm)
    },
    handleDelete(index, row) {
        this.$confirm('此操作将删除该地址, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          try {
            await deleteConsignee({ids: [row.id]})
            await this.loadConsigneeList()
          }
          catch(e) {
            console.error('删除地址出错')
          }
        })
    },
    async handleSetDefault(index, row) {
      try {
       await setConsigneeDefault(row.id)
       await this.loadConsigneeList()
      } catch(e) {
        console.error('设置默认失败')
      }
    },
    handleAddAddress(formName) {
      this.$refs['addressForm'].validate(async(valid) => {
        if (valid) {
          try{
            delete this.addressForm.area
            await addConsignee(this.addressForm)
            await this.loadConsigneeList()
            this.Dialog.address = false
            this.$refs['addressForm'].resetFields()
          }catch(e){
            console.error('新增地址失败')
          }
        }
      })
    },
    handleCloseAdd(formName) {
      this.$refs['addressForm'].resetFields()
      this.Dialog.address = false
    }
  }
}
</script>

<style lang="scss" scoped>
@b address {
     @e header{
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @e save{
      text-align: right;
    }
}
.line {
    position: relative;
    padding: 0 10px;
    &:after {
        content: '';
        position: absolute;
        width: 1px;
        height: 20px;
        top: 50%;
        background: #eaeaea;
        transform: translateY(-50%);
    }
}
</style>
>>>>>>> 5ad032fee8e25de0eeb06703ac3e729486074978
