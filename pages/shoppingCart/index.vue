<!--author: liuyifei-->
<template>
	<section>
		<header-bar></header-bar>
		<lc-nav></lc-nav>
		<div class="shoppingCart wrap">
			<div class="shoppingCart__content">
				<div class="shoppingCart__content--title">
					<el-tabs v-model="activeName">
						<el-tab-pane :label="'大货花型' + countShopping.cargo" name="2"></el-tab-pane>
						<el-tab-pane :label="'剪版花型' + countShopping.cutVersion" name="3"></el-tab-pane>
						<el-tab-pane :label="'剪样花型' + countShopping.cutting" name="1"></el-tab-pane>
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
	import {listShoppingCart, countShoppingCart} from '@/services/order';
	export default {
		data() {
			return {
				num: 2,
				activeName: '1',
				paramList: {
					buyType: '',
					pageNo: 1,
					pageSize: ''
				},
				countShopping: {
					cargo: 0,
					cutting: 0,
					cutVersion: 0
				}
			}
		},
		components: {
			HeaderBar,
			'lcNav': nav,
			lcOrder
		},
		async created() {
			try {
				this.countShopping.cargo = (await countShoppingCart({buyType: 2})).data.data;
				this.countShopping.cutting = (await countShoppingCart({buyType: 1})).data.data;
				this.countShopping.cutVersion = (await countShoppingCart({buyType: 3})).data.data;
			}catch(e) {
				console.log('error', e)
			}
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
