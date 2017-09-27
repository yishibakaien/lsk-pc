<!--author: liuyifei-->
<template>
	<div class="pageTitle">
		<h3>{{title}}</h3>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type:String
			}
		}
	};
</script>

<style lang="scss" scoped>
.pageTitle {
	h3 {
		padding: 50px 0 22px 80px;
		font-size: $font-size-5;
		font-weight: 600;
		border-bottom: 1px solid $color-grey-6;
	}
}
</style>