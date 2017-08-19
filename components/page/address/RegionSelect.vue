<template lang="html">
  <section>
  <pre>
    {{value}}
  </pre>
    <el-select v-model="value1" placeholder="省份" @visible-change="choose($event,'province')"
        @change="handleChosed($event,'province')" class="region__select">
      <el-option
        v-for="item in Region.province"
        :key="item.areaCode"
        :label="item.areaName"
        :value="item.areaCode">
      </el-option>
    </el-select>
    <el-select v-model="value2" placeholder="城市"  @visible-change="choose($event,'city',value1)"
        @change="handleChosed($event,'city')" class="region__select">
      <el-option
        v-for="item in Region.city"
        :key="item.areaCode"
        :label="item.areaName"
        :value="item.areaCode">
      </el-option>
    </el-select>
    <el-select v-model="value3" placeholder="地区" @visible-change="choose($event,'county',value2)"
        @change="handleChosed($event,'county')" class="region__select">
      <el-option
        v-for="item in Region.county"
        :key="item.areaCode"
        :label="item.areaName"
        :value="item.areaCode">
      </el-option>
    </el-select>
  </section>
</template>

<script>
import {areaByParent, areaByLevel, allAreas} from '@/services/util'
export default {
  data() {
    let regionFunc = {
      province: async () => {
        try {
          let {data} = await areaByLevel({level:0})
          this.Region.province = data.data
        } catch(e) {
          console.log('获取省份出错')
        }
      },
      city: async (province) => {
        try {
          let {data} = await areaByParent({areaCode:province})
          return this.Region.city = data.data
        } catch(e) {
          console.log('获取城市出错')
        }
      },
      county: async (city) => {
        try {
          let {data} = await areaByParent({areaCode:city})
          return this.Region.county = data.data
        } catch(e) {
          console.log('获取区域出错')
        }
      }
    }
    let chosedFunc = {
      province: async (val) => {
        this.value1 = val
        let city = await regionFunc.city(this.value1)
        if(city.length){
          this.value2 = city[0].areaCode
        }
        let county = await regionFunc.county(this.value2)
        if(county.length){
          this.value3 = county[0].areaCode
        }
      },
      city: (val) => {
        this.value2 = val
      },
      county: (val) => {
        this.value3 = val
      }
    }
    return {
      Region: {
        province: '',
        city: '',
        county: ''
      },
      value1: '',
      value2: '',
      value3: '',
      regionFunc: regionFunc,
      chosedFunc: chosedFunc
    }
  },
  computed: {
    model() {
      let models = {}
      models = {
        province: this.value1,
        city: this.value2,
        county: this.value3
      }
      return models
    }
  },
  watch: {
    model(val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  },
  props: ['value'],
  methods: {
    choose(status, type, value) {
      if(status){
        this.regionFunc[type](value)
      }
    },
    handleChosed(val, type){
      this.chosedFunc[type](val)
    }
  }
}
</script>

<style lang="scss" scoped>
@b region{
  @e select{
    width: calc(100% / 4 );
    margin-right:10px;
  }
}
</style>
