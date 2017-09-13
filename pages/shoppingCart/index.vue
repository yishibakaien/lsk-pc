<template>
	<section>
		<header-bar></header-bar>
		<lc-nav></lc-nav>
		<div class="shoppingCart wrap">
			<div class="shoppingCart__content">
				<div class="shoppingCart__content--title">
					<el-tabs v-model="activeName">
						<el-tab-pane :label="'大货花型' + `${num}`" name="2"></el-tab-pane>
						<el-tab-pane :label="'剪版花型' + `${num}`" name="3"></el-tab-pane>
						<el-tab-pane :label="'剪样花型' + `${num}`" name="1"></el-tab-pane>
					</el-tabs>
				</div>
				<div class="shoppingCart__content--main">
					<lc-order :type="activeName"></lc-order>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import HeaderBar from '@/components/layout/HeaderBar';
	import nav from '@/components/layout/Nav';
	import lcOrder from '@/components/page/shoppingCart/lcOrder';
	import {listShoppingCart} from '@/services/order';
	export default {
		data() {
			return {
				num: 2,
				activeName: '1',
				paramList: {
					buyType: '',
					pageNo: 1,
					pageSize: ''
				}
			}
		},
		components: {
			HeaderBar,
			'lcNav': nav,
			lcOrder
		},
		created() {
			console.log(this.$route.query.type)
			if (this.$route.query.type) {
				this.activeName = this.$route.query.type;
			}
		}
	};
</script>

<style lang="scss" scoped>
	@b shoppingCart {
		min-height: 1100px;
		@e content {
			@m title {}
		}
	}
</style>
