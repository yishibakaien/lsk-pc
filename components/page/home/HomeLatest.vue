 <template lang="html">
  <div>
    <!-- ======== -->
    <!-- 最新花型 -->
    <!-- ======== -->
    <index-title title="最新花型" subTitle="Latest flower pattern"></index-title>
    <el-tabs v-model="newFlower" @tab-click="handleClick">
      <el-tab-pane label="全部" name="0">全部</el-tab-pane>
      <el-tab-pane label="面料" name="1">面料</el-tab-pane>
      <el-tab-pane label="大边" name="2">大边</el-tab-pane>
      <el-tab-pane label="小边" name="3">小边</el-tab-pane>
      <el-tab-pane label="睫毛" name="4">睫毛</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import IndexTitle from '@/components/frame/section/IndexSection'
export default {
  data() {
    return {
      newFlower: '0'
    }
  },
  components: {
    IndexTitle
  },
  methods: {
    handleClick() {},
  }
}
</script>

<style lang="css">
</style>
