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
