<template lang="html">
  <div class="custom-title">
    <span class="custom-title__content"><slot></slot></span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@b custom-title{
  padding-bottom:27px;
  padding-top: 80px;
  margin-bottom: 60px;
  text-align: center;
  color:$color-primary;
  font-size: $font-size-5;
  border-bottom: 1px solid;
}
</style>
