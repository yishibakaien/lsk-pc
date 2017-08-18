<template lang="html">
  <div>
    <!-- ======== -->
    <!-- 供应求购 -->
    <!-- ======== -->
    <index-title title="供应求购" subTitle="Supply Purchase"></index-title>
    <el-tabs v-model="supply" @tab-click="handleClick">
      <el-tab-pane label="供应" name="0">
        <el-row>
          <el-col :span="7">
            <lc-image src="/img/poster/supply.jpg" width="345" height="620"></lc-image>
          </el-col>
          <el-col :span="17">
            <demand-card :gutter="6" :span="6" :data="data"></demand-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="求购" name="1">
        <el-row>
          <el-col :span="7">
           <lc-image src="/img/poster/purchase.jpg" width="345" height="620"></lc-image>
          </el-col>
          <el-col :span="17">
            <demand-card :gutter="6" :span="6" :data="data"></demand-card>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
let res = require('@/mock/supply.json')
import IndexTitle from '@/components/frame/section/IndexSection'
import DemandCard from '@/components/frame/card/DemandCard'
export default {
  data() {
    return {
      supply: '0',
      data: res.data.list
    }
  },
  components: {
    DemandCard,
    IndexTitle
  },
  methods: {
    handleClick() {}
  }
}
</script>

<style lang="css">
</style>
