<template>
	<div class="flowerDetailAttribute">
		<lc-title title="花型属性">
			<div class="flowerDetailAttribute__box">
				<el-row style="margin-bottom: 6px;">
					<el-col :span="5">花型编号：#20001</el-col>
					<el-col :span="5">分类：睫毛</el-col>
					<el-col :span="5">成份：涤纶</el-col>
					<el-col :span="5">货型：成品</el-col>
				</el-row>
				<el-row>
					<el-col :span="5">幅宽：#20001</el-col>
					<el-col :span="5">花高：睫毛</el-col>
					<el-col :span="5">出码率：涤纶</el-col>
				</el-row>
			</div>
		</lc-title>
	</div>
</template>

<script>
	import lcTitle from '@/components/layout/common/lcTitle';
	export default {
		components: {
			lcTitle
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