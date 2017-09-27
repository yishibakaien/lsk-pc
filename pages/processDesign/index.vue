<!--author: liuyifei-->
<template>
	<section>
		<header-bar></header-bar>
		<lc-nav></lc-nav>
		<div class="processDesign">
			<iframe src="http://www.webps.cn/ps.html?target=http://192.168.0.143:8089/upload/&referrer=lace57&method=POST&redirect=false"></iframe>
		</div>
	</section>
</template>

<script>
	import HeaderBar from '@/components/layout/HeaderBar';
	import Nav from '@/components/layout/Nav';
	export default {
		components: {
			HeaderBar,
			'lcNav': Nav
		}
	};
</script>

<style lang="scss">
	.processDesign {
		width: 100%;
		iframe {
			width: 100%;
			height: 900px;
			overflow: hidden;
			margin: 0;
		}
	}
</style>