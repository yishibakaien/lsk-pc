<template lang="html">
  <section>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>版衣展厅</el-breadcrumb-item>
    </el-breadcrumb>
    <el-radio-group v-model="radio3">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
    <!-- ==== -->
    <!-- 列表 -->
    <!-- ==== -->
    <el-row :gutter="10">
      <el-col :span="8" v-for="(o, index) in 3" :key="o">
        <el-card :body-style="{ backgroundColor:'grey' }">
          <el-row>
            <el-col :span="12">
              <lc-image width="200"></lc-image>
            </el-col>
            <el-col :span="12">
              <div class="">
                <p>按到</p>
                <p>按到</p>
              </div>
              <p>短款的设计，把黑色酷酷的味道压下去了一点点贴图、字母、小立领，保持高度一致</p>
              <div class="">
                <lc-image width="80" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=965513414,1394122275&fm=58"></lc-image>
                点击查看
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      radio3: ''
    }
  }
}
</script>

<style lang="css">
</style>
