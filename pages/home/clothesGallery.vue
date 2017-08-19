<template lang="html">
  <section class="clothesGallery">
    <div class="clothesGallery--breadcrumb">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>版衣展厅</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row class="clothesGallery__wrapper" :gutter="10">
      <el-col :key="index" :span="8" v-for="(item, index) in Clothes.list" class="clothesGallery__wrapper--item">
        <el-card>
          <el-row :gutter="25">
              <el-col :span="14">
                <lc-image :src="item.clothesPic" width="220" height="329" error="/img/default/morenhuaxing.png"></lc-image>
              </el-col>
              <el-col :span="10">
                <div class="clothesGallery__item">
                  <p class="clothesGallery__item--title">{{item.clothesName}}</p>
                  <p class="clothesGallery__item--subTitle" v-for="subItem in item.clothesProductList">{{subItem.productNo}}</p>
                  <p class="clothesGallery__item--content">{{item.memo}}</p>
                  <div class="clothesGallery__item--pic" v-for="subItem in item.clothesProductList">
                     <lc-image :src="item.productUrl" width="65" height="65"></lc-image>
                  </div>
                </div>
              </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import {getClothesList} from '@/services/clothes'
export default {
  data() {
    return {
      Clothes: {
        list:[],
        pageNo:1,
        pageSize:10
      },
      Params: {
        pageNo:1,
        pageSize:12
      }
    }
  },
  async created() {
    try {
      let {data} = await getClothesList(this.Params)
      this.Clothes = data.data
    }catch(e) {
      console.log("获取版衣列表失败")
    }
  }
}
</script>

<style lang="scss" scoped>
@b clothesGallery{
  @m breadcrumb{
    position: absolute;
    left: 0;
    right: 0;
    top:$body-top;
  }
  @e wrapper{
    margin-top: 40px;
    @m item{
      margin-top: 10px;
    }
  }
  @e item{
    position: relative;
    height: 329px;
    @m content{
      font-size: $font-size-2;
      color: $color-grey-7;
    }
    @m subTitle{
      line-height: 20px;
      padding-bottom: 9px;
    }
    @m pic{
      position: absolute;
      bottom:0;
      left:0;
      right:0;
      img{
        border: 1px solid $color-grey-3;
        padding: 5px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
