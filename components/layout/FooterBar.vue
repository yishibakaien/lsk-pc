<template lang="html">
  <section class="footer">
    <div class="footer__content">
      <p><i class="iconfont icon-anquanjiaoyi"></i>安全交易</p>
      <p><i class="iconfont icon-zhiliang"></i>质量承诺</p>
      <p><i class="iconfont icon-shouhou"></i>售后无忧</p>
      <p><i class="iconfont icon-kuaisuxiangying"></i>快速响应</p>
    </div>
    <div class="footer__notice">
      <span class="footer__notice--name">{{COMPANY.name}}</span>{{COMPANY.record}}
    </div>
  </section>
</template>

<script>
import consts from '@/utils/consts/consts'
export default {
  data(){
    return {
      COMPANY: consts.COMPANY
    }
  }
}
</script>

<style lang="scss" scoped>
@b footer {
    text-align: center;
    @e content {
        background: url('~assets/img/material/lace.png') repeat no-repeat;
        background-color: $color-primary;
        height: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $color-white;
        p{
          padding: 0 calc(60px / 2);
          i{
            padding-right: 15px;
            font-size: 60px;
            vertical-align: middle;
          }
        }
    }
    @e notice {
        height: 32px;
        line-height: 32px;
        background: $color-grey-3;
        color: $color-grey-9;
        @m name{
          padding-right: 16px;
        }
    }
}
</style>
