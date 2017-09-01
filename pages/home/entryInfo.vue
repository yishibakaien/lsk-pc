<template lang="html">
  <section>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="优质商家" name="bestStore">
        <best-store></best-store>
      </el-tab-pane>
      <el-tab-pane label="最新入驻" name="lastestEntry">
        <lastest-entry></lastest-entry>
      </el-tab-pane>
      <el-input></el-input>
    </el-tabs>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'bestStore'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="css">
</style>
