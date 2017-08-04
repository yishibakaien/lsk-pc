<template lang="html">
  <div class="qrcode__item">
    <el-popover ref="app" placement="bottom"  width="200"  trigger="hover">
      <el-row :gutter="10" class="qrcode__item">
        <el-col :span="12">
          <img src="" alt="">
        </el-col>
        <el-col :span="12">
          <p class="qrcode__item--title qrcode__item">手机蕾丝控</p>
          <p class="qrcode__item--tip qrcode__item">扫码即可下载</p>
        </el-col>
      </el-row>
    </el-popover>
    <el-popover ref="wechat" placement="bottom"  width="200"  trigger="hover">
      <el-row :gutter="10" class="qrcode__item">
        <el-col :span="12">
          <img src="" alt="">
        </el-col>
        <el-col :span="12">
          <p class="qrcode__item--title qrcode__item">关注微信公众号</p>
          <p class="qrcode__item--tip qrcode__item">扫码即可关注</p>
        </el-col>
      </el-row>
    </el-popover>
    <el-col :span="2">
      <a v-popover:app>手机蕾丝控</a>
    </el-col>
    <el-col :span="2">
      <a v-popover:wechat>公众号</a>
    </el-col>
  </div>

</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@b qrcode {
  @e item{
    margin-bottom: 4px;
    .el-col-2{
      text-align: center;
    }
    @m title{
      font-weight: 700;
      font-size:$font-size--sub;
    }
    @m tip{
      color: $color-danger;
    }
  }
}
</style>
