<template lang="html">
  <div class="">
    <!-- ======== -->
    <!-- 版衣专区 -->
    <!-- ======== -->
    <index-title title="版衣专区" subTitle="Supply Purchase" @click="$router.push('/home/clothesGallery')"></index-title>
    <el-row>
      <el-col :span="7">
        <router-link to="/home/clothesGallery">
          <lc-image src="/img/poster/design.jpg" width="345" height="610"></lc-image>
        </router-link>
      </el-col>
      <el-col :span="17">
      <lc-image :src="item.clothesPic" width="200" height="300" v-for="item in ClothesList" class="index-wrapper__supply--img" :key="item.id"></lc-image>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getHomeClothesList} from '@/services/clothes'
import IndexTitle from '@/components/frame/section/IndexSection'
export default {
  data() {
    return {
      ClothesList:[],
      Params: {
        pageNo: 1,
        pageSize: 8
      }
    }
  },
  components: {
    IndexTitle
  },
  async created() {
    try{
      let {data} = await getHomeClothesList()
      this.ClothesList = data.data
    }catch(e) {
      console.error('首页版衣专区出错')
    }
  }
}
</script>

<style lang="scss" scoped>
@b index-wrapper {
     @e supply{
        @m img {
            padding: 0 5px 5px;
        }
    }
}
</style>
