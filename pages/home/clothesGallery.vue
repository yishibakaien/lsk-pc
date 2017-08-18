<template lang="html">
  <section class="clothesGallery">
    <div class="clothesGallery--breadcrumb">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>版衣展厅</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row class="clothesGallery__wrapper" :gutter="10">
      <el-col :key="index" :span="8" v-for="(item, index) in 20" class="clothesGallery__wrapper--item">
        <el-card>
          <el-row :gutter="25">
              <el-col :span="14">
                <img v-lazy="`http://element.eleme.io/static/hamburger.50e4091.png`" alt="版衣" class="clothesGallery__item--img">
              </el-col>
              <el-col :span="10">
                <div class="clothesGallery__item">
                  <p class="clothesGallery__item--title">按倒</p>
                  <p class="clothesGallery__item--subTitle">LSK</p>
                  <p class="clothesGallery__item--content">短款的设计，把黑色酷酷的味道压下去了一点点贴图、字母、小立领，保持高度一致，文案建议字体文案建议字数字数文案建议字数文案建议40-80个字数</p>
                  <div class="clothesGallery__item--pic">
                    <img v-lazy="`http://element.eleme.io/static/hamburger.50e4091.png`" alt="图案" width="65" height="65"/>
                    <img v-lazy="`http://element.eleme.io/static/hamburger.50e4091.png`" alt="图案" width="65" height="65"/>
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
export default {}
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
    @m img {
      size:220px 329px;
    }
  }
}
</style>
