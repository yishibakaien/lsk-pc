<template lang="html">
  <div>
    <!-- ======== -->
    <!-- 优质商家 -->
    <!-- ======== -->
    <index-title title="优质商家" subTitle="Supply Purchase"></index-title>
    <el-row>
    <el-col :span="7">
      <div>
        <img v-lazy="'/img/poster/quality.jpg'" alt="优质商家" class="index-wrapper__entry--img">
        <div class="index-wrapper__entry">
          <p class="index-wrapper__entry--title">最新入驻</p>
          <div class="entry__box">
            <div class="entry__box--inner" v-autoSrcoll="80">
              <div class="entry__box--flex" v-for="item in UnSettledList.list">
                <p>{{item.companyName}}</p>
                <p>{{item.createDate | dateFormat}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="17">
      <div class="firm__wrapper">
        <div class="firm__wrapper--item" v-for="item in LSKList">
            <pre>
              {{item.companyHeadIcon}}
            </pre>  
          <lc-image :src="item.companyHeadIcon" width="168" height="124"></lc-image>
        </div>
      </div>
    </el-col>
  </el-row>
  </div>
</template>

<script>
import {getLSKHomeCompanyList, getUnSettledCompanyList} from '@/services/company'
import IndexTitle from '@/components/frame/section/IndexSection'
export default {
  data() {
    return {
      LSKList: [],
      UnSettledList: [],
      Params: {
        pageNo: 1,
        pageSize: 20
      }
    };
  },
  async created() {
    try {
      let {data} =  await getLSKHomeCompanyList()
      this.LSKList = data.data
    }
    catch (e) {
      console.error('首页优质商家出错')
    }

     try {
      let {data} =  await getUnSettledCompanyList(this.Params)
      this.UnSettledList = data.data
    }
    catch (e) {
      console.error('首页最新入驻出错')
    }
    
  },
  directives: {
    autoSrcoll: {
      inserted: function(el, binding, vnode) {
        let Y = 0
        let dom = el
        let height = dom.scrollHeight;
        let move = function() {
          dom.style.top = `${Y}px`
          Y--;
          if ((Y + height) === 0) {
            Y = 0
          }
        }
        setInterval(move, binding.value)
      }
    }
  },
  methods: {},
  components: {
    IndexTitle
  }
}
</script>

<style lang="scss" scoped>
:root {
    --padding: 15px;
}
@b index-wrapper {
     @when box{
        position: relative;
        border: 1px solid $color-grey-5;
        border-right: none;
    }
    @e entry {
         @m title{
            color: $color-danger;
            font-weight: 700;
            font-size: $font-size-1;
            padding: calc(var(--padding) - 7px) var(--padding);
        }
        @m img {
            display: block;
        }
    }
}
@b entry {
     @e box{
        position: relative;
        height: 180px;
        overflow: hidden;
        @m inner {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
        }
        @m flex {
            display: flex;
            justify-content: space-between;
            line-height: 2;
            padding-left: var(--padding);
            cursor: pointer;
            p:nth-of-type(2) {
                font-size: $font-size-1;
                color: $color-grey-7;
            }
        }
    }
}
@b firm{
  @e wrapper{
    font-size: 0;
    @m item{
      border: 1px solid $color-grey-2;
      width: 168px;
      height: 124px;
      overflow: hidden;
      display: inline-block;
      box-sizing: border-box;
      padding: 10px;
      img{
        size:100%;
      }
    }
  }
}
</style>
