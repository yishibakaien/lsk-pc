<template>
	<div class="shoppingCart__bottom">
		<el-row>
			<el-col :span="2">
				<el-checkbox v-model="checkAll" @bottom-checked="handleCheckAllChange">全选</el-checkbox>
			</el-col>
			<el-col :span="3"><span class="dele">删除选中的花型</span></el-col>
			<el-col :span="3" :offset="3"><span>已选中 <em>2</em> 款花型</span></el-col>
			<el-col :span="4"><span>商品总价：<em>¥{{total}}</em> </span></el-col>
			<el-col :span="5"><span>应付金额：<em>¥{{total}}</em> (不含运费)</span></el-col>
			<el-col :span="4"><el-button type="primary" style="width: 100%; height: 52px;position: relative; top: -3px; font-size: 18px;">去结算</el-button></el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checkAll: false
			};
		},
		props: {
			total: ''
		},
		methods: {
			handleCheckAllChange(event) {
				this.$emit('checked');
			}
		}
	};
</script>

<style lang="scss" scoped>
@b shoppingCart {
	@e bottom {
		box-sizing: border-box;
		margin-bottom: 5px;
		margin-top: 40px;
		height: 52px;
		line-height: 52px;
		text-align: center;
		color: $color-grey-9;
		border: 1px solid $color-grey-5;
		.dele {
			font-size: $font-size-3;
			cursor: pointer;
			&:hover {
				text-decoration: underline;
			}
		}
		em {
			color: $color-primary;
			font-weight: 600;
		}
	}
}
</style>