<template>
	<div class="lcTitle">
		<div class="lcTitle__title">
			<span>{{title}}</span>
			<nuxt-link v-if="path" :to="path">查看更多<i class="el-icon-arrow-right"></i></nuxt-link>
		</div>
		<div class="lcTitle__content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String
			},
			path: {
				type: String
			}
		}
	};
</script>

<style lang="scss" scpoed>
@b lcTitle {
	border: 1px solid $color-grey-5;
	@e title {
		height: 35px;
		line-height: 35px;
		background: $color-grey-2;
		span {
			display: inline-block;
			width: 120px;
			height: 36px;
			text-align: center;
			font-size: $font-size-3;
			color: $color-primary;
			background: #fff;
		}
		a {
			float: right;
			padding-right: 10px;
			font-size: $font-size-1;
			color: $color-grey-9;
			&:hover {
				color: $color-primary;
			}
		}
	}
}
	
</style>