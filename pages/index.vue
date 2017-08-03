<template>
  <div></div>
</template>

<script>
// 重定向到home.vue
export default {
  fetch ({ route, redirect }) {
    if (route.name === 'index') {
      redirect('/home')
    }
  }
}
</script>
