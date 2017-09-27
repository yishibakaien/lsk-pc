<!--author: liuyifei-->
<template>
	<section>
		<header-bar></header-bar>
		<lc-nav></lc-nav>
		<div class="download">
			<img src="~static/image/logo/download.jpg"/>
		</div>
	</section>
</template>

<script>
	import HeaderBar from '@/components/layout/HeaderBar';
	import nav from '@/components/layout/Nav';
	export default {
		components: {
			HeaderBar,
			'lcNav': nav
		}
	}
</script>

<style lang="scss" scoped>
.download {
	min-height: 600px;
	img {
		width: 100%;
	}
}
</style>