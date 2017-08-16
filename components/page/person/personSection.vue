<template lang="html">
  <section>
    <div class="person">
      <p class="person--title">{{title}}</p>
    </div>
    <div class="person__content">
        <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
@b person {
    border-bottom: 1px solid $color-grey-5;
    @m title {
        font-size: $font-size-5;
        font-weight: 600;
        color: $color-primary;
        padding: 6px 14px ;
        display: inline-block;
        border-bottom: 2px solid;
    }
    @e content{
      padding: 16px;
    }
}
</style>
