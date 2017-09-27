<!--author: liuyifei-->
<template>
	<div class="flowerDetailAttribute">
		<lc-title title="花型属性">
			<div class="flowerDetailAttribute__box">
				<el-row style="margin-bottom: 12px;">
					<el-col :span="5">花型编号：{{obj.id}}</el-col>
					<el-col :span="5">分类：{{obj.category | filterDict(dicTree.PRODUCT_TYPE)}}</el-col>
					<el-col :span="5">成份：{{obj.ingredient}}</el-col>
					<el-col :span="5">货型：{{obj.productShape | filterDict(dicTree.PRODUCT_SHAPE)}}</el-col>
				</el-row>
				<el-row>
					<el-col :span="5">幅宽：{{obj.width}}</el-col>
					<el-col :span="5">花高：{{obj.height}}</el-col>
					<el-col :span="5">出码率：{{obj.outRate}}</el-col>
				</el-row>
			</div>
		</lc-title>
	</div>
</template>

<script>
	import lcTitle from '@/components/layout/common/lcTitle';
	import { mapGetters } from 'vuex';
	export default {
		components: {
			lcTitle
		},
		computed: {
			...mapGetters({
				dicTree: 'dict/dicTree'
			})
		},
		props: {
			obj: {
				type: Object
			}
		}
	};
</script>

<style lang="scss">
	@b flowerDetailAttribute {
		margin-top: 40px;
		margin-bottom: 40px;
		@e box {
			padding: 20px;
			font-size: $font-size-2;
			color: $color-black;
		}
	}
</style>