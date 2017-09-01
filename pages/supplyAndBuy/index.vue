<template lang="html">
	<section>
		<header-bar></header-bar>
		<lc-nav></lc-nav>
		<div class="supplyAndBuy">
			<div class="wrap">
			<div class="supplyAndBuy__title">
				<div class="supplyAndBuy__title--btns">
					<el-button type="primary" size="small" v-if="activeName === 'buy'" @click="releaseSupply">发布供应</el-button>
					<el-button type="primary" size="small" v-if="activeName === 'supply'" @click="releaseBuy">发布求购</el-button>
				</div>
				<el-tabs v-model="activeName">
					<el-tab-pane label="求购信息" name="buy"></el-tab-pane>
					<el-tab-pane label="供应信息" name="supply"></el-tab-pane>
				</el-tabs>
			</div>
			<div class="supplyAndBuy__content">
				<ls-buy v-show="activeName === 'buy'"></ls-buy>
				<ls-supply v-show="activeName === 'supply'"></ls-supply>
			</div>
			</div>			
		</div>
	</section>
</template>

<script>
	import HeaderBar from '@/components/layout/HeaderBar';
	import nav from '@/components/layout/Nav';
	import lsBuy from '@/components/page/supplyAndBuy/buy';
	import lsSupply from '@/components/page/supplyAndBuy/supply';
	export default {
		head: {
			title: '供求信息'
		},
		data() {
			return {
				activeName: 'buy'
			}
		},
		components: {
			'lcNav': nav,
			HeaderBar,
			lsBuy,
			lsSupply
		},
		mounted() {
			if (this.$route.query.type) {
				this.activeName = this.$route.query.type;
			}
		},
		methods: {
			releaseSupply() {
				this.$router.push({
					path: '/supply/release'
				})
			},
			releaseBuy() {
				this.$router.push({
					path: '/buy/release'
				})
			}
		}
	};
</script>

<style lang="css" scoped>
	@b supplyAndBuy {
		padding: 10px 0;
		min-height: 800px;
		background: #f2f2f2;
		@e title {
			position: relative;
			margin: 10px 0;
			background: #fff;
			@m btns {
				z-index: 99999;
				position: absolute 7px 15px * *;
			}
		}
	}
</style>