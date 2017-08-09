<template lang="html">
  <section>
    <el-input class="search__input">
      <el-button class="search__input--button" slot="append" icon="search">传图搜花</el-button>
    </el-input>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@b search{
  @e input{
    input{
      border: 2px solid $color-primary;
    }
    .el-input-group__append{
      background: $color-primary;
      color: $color-white;
      border: 2px solid $color-primary;
    }
  }
}
</style>
