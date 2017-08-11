<template lang="html">
  <section>
    <el-row>
      <!-- ======== -->
      <!-- Carousel -->
      <!-- ======== -->
      <el-col :span="20">
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="4">
        <!-- ======== -->
        <!-- 定制 -->
        <!-- ======== -->
      </el-col>
    </el-row>
    <!-- ======== -->
    <!-- 最新花型 -->
    <!-- ======== -->
    <index-section></index-section>
    <!-- 广告位1 -->
    <div class="">
    </div>
    <!-- ======== -->
    <!-- 优质商家&&最新入驻 -->
    <!-- ======== -->
    <el-row :gutter="10">
      <!-- 优质商家 -->
      <el-col :span="12"></el-col>
      <!--最新入驻  -->
      <el-col :span="12"></el-col>
    </el-row>
    <!-- 广告位2 -->
    <div class="">
    </div>
    <!-- ======== -->
    <!-- 供应求购 -->
    <!-- ======== -->
    <index-section></index-section>
    <!-- ======== -->
    <!-- 版衣专区 -->
    <!-- ======== -->
    <index-section></index-section>
  </section>
</template>

<script>
import IndexSection from '@/components/page/home/IndexSection';
export default {
  components: {
    IndexSection
  }
}
</script>

<style lang="css">
</style>
