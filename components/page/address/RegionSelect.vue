<template lang="html">
  <section>
    <el-select v-model="value" placeholder="省份">
      <el-option
        v-for="item in Region.province"
        @visible-change="choose('province')"
        @change="handleChosed('province')"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="value" placeholder="城市">
      <el-option
        v-for="item in Region.city"
        :key="item.value"
        @visible-change="choose('city')"
        @change="handleChosed('city')"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="value" placeholder="地区">
      <el-option
        v-for="item in Region.country"
        :key="item.value"
        @visible-change="choose('country')"
        @change="handleChosed('country')"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </section>
</template>

<script>
export default {
  data() {
    return {
      Region: {
        province: '',
        city: '',
        country: ''
      },
      value1: '',
      value2: '',
      value3: ''
    }
  },
  methods: {
    choose(type) {
      
    }
  }
}
</script>

<style lang="css">
</style>
