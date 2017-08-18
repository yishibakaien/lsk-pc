<template lang="html">
  <el-row :gutter="gutter">
    <el-col class="demand-card__col" :style="{'marginBottom':`${gutter}px`}" :span="col" :key="index" v-for="(item,index) in data">
      <el-card class="demand-card__card" :body-style="{ padding: '0px' }">
        <lc-image :src="item.picUrl" width="200" height="200"></lc-image>
        <div class="demand-card__content">
          <p class="demand-card__content--title">{{item.description}}</p>
          <p class="demand-card__content--desc">{{item.description}}</p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    gutter: {
      type: Number,
      default: 10
    },
    col: {
      type: Number,
      default: 6
    },
    data: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
@b demand-card {
     @e col{
        margin-bottom: 10px;
    }
    @e card {
        position: relative;
        cursor: pointer;
    }
    @e content {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: $color-white;
        opacity: 0.7;
        padding: 10px;
        line-height: 150%;
        @m title {
            color: $color-primary;
            @utils-ellipsis;
        }
        @m desc {
             @utils-ellipsis;
        }
    }
}
</style>
