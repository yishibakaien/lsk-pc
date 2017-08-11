<template>
	<div>
		<top-bar></top-bar>
		<nuxt/>
		<footer-bar></footer-bar>
	</div>
</template>
<script>

  import TopBar from '@/components/layout/TopBar'
  import FooterBar from '@/components/layout/FooterBar'
  export default {
    components: {
      TopBar,
      FooterBar
    }
  }
</script>
<style>
	/* RESET CSS */
	
	@reset-global pc;
</style>