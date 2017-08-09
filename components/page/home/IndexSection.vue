<template lang="html">
  <div class="index-section">
    <p class="index-section--title">{{title}}<i class="el-icon-arrow-right" @click="handleClick"></i></p>
    <p class="index-section--subTitle">{{subTitle}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    subTitle: {
      type: String
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
:root{
  --fontSize: ($font-size-1 * 3)
}
@b index-section {
    display: table;
    margin: 18px auto;
    @m title {
        font-size: var(--fontSize);
        color: $color-primary;
        i{
          margin-left: 8px;
          border-radius: 50%;
          background-color: $color-white;
          padding: 5px;
          font-size: initial;
          box-sizing: border-box;
          border: 1px solid $color-primary;
          text-align: center;
          vertical-align: calc(var(--fontSize) / 5);
          cursor: pointer;
        }
    }
    @m subTitle {
        color: $color-grey-6;
        text-transform: uppercase;
        font-size: $font-size-3;
    }
}
</style>
