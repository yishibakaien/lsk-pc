<template lang="html">
	<section class="wrap">
		<header-bar></header-bar>
		<div class="supplyAndBuy">
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
	</section>
</template>

<script>
	import HeaderBar from '@/components/layout/HeaderBar';
	import lsBuy from '@/components/page/supplyAndBuy/buy';
	import lsSupply from '@/components/page/supplyAndBuy/supply';
	export default {
		data() {
			return {
				activeName: 'buy'
			}
		},
		components: {
			HeaderBar,
			lsBuy,
			lsSupply
		},
		methods: {
			releaseSupply() {
				alert('发布供应');
			},
			releaseBuy() {
				alert('发布求购');
			}
		}
	};
</script>

<style lang="css" scoped>
	@b supplyAndBuy {
		padding: 10px 0;
		min-height: 800px;
		background: #e2e2e2;
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