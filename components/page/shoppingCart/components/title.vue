<template>
	<div class="shoppingCart__title">
		<el-row>
			<el-col :span="2">
				<el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
			</el-col>
			<el-col :span="6">花型</el-col>
			<el-col :span="3">参考单价</el-col>
			<el-col :span="5">数量</el-col>
			<el-col :span="4">小计</el-col>
			<el-col :span="4">操作</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checkAll: true,
				isIndeterminate: true
			};
		},
		methods: {
			handleCheckAllChange(event) {
				console.log(event.target.checked);
			}
		}
	};
</script>

<style lang="scss" scoped>
@b shoppingCart {
	@e title {
		margin-bottom: 5px;
		height: $item--height;
		line-height: $item--height;
		text-align: center;
		color: $color-grey-9;
		background: $color-grey-2;
	}
}
</style>