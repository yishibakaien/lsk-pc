<template lang="html">
  <section>
    <div class="section__header">
      <slot name="title"></slot>
      <slot name="menu"></slot>
    </div>
    <div class="section__content">
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
