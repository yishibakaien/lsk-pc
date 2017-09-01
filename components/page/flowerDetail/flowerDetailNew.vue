<template>
	<div class="flowerDetailNew">
		<lc-title title="最新上架" :path="path">
			<div class="flowerDetailNew__box clearfix">
				<el-col :span="5" v-for="(o, index) in 4" :key="index">
					<!--<lc-flower-card>
					</lc-flower-card>-->
				</el-col>
			</div>
		</lc-title>
	</div>
</template>

<script>
	import lcTitle from '@/components/layout/common/lcTitle';
	import lcFlowerCard from '@/components/layout/common/lcFlowerCard';
	export default {
		data() {
			return {
				path: `http://www.lacewang.cn/shop/${this.companyId}/index`
			}
		},
		props: {
			companyId: ''
		},
		components: {
			lcTitle,
			lcFlowerCard
		}
	};
</script>

<style lang="scss">
	@b flowerDetailNew {
		margin-top: 40px;
		margin-bottom: 40px;
		@e box {
			padding: 20px;
			.el-col-4 {
				margin-right: 1.25%;
				margin-bottom: 15px;
				width: 19%;
				&:nth-of-type(5n) {
					margin-right: 0;
				}
			}
		}
	}
</style>