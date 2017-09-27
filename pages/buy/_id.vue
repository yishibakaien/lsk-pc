<!--author: liuyifei-->
<template>
	<section>
		<header-bar></header-bar>
		<lc-nav></lc-nav>
		<div class="buyDetail">
			<div class="buyDetail__title">
				<div class="buyDetail__title--breadcrumb">
					<el-breadcrumb separator=">">
						<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item :to="{ path: '/supplyAndBuy', query: {type: 'buy'} }">求购列表</el-breadcrumb-item>
						<el-breadcrumb-item>求购详情-{{buyData.data.id}}</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
			</div>
			<div class="buyDetail__content clearfix">
				<div class="fl buyDetail__content--left fl">
					<buy-detail-content :obj="buyData.data"></buy-detail-content>
					<buy-detail-list :obj="buyData.data"></buy-detail-list>
				</div>
				<div class="fr">
					<buy-detail-business :obj="buyData.data"></buy-detail-business>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import buyDetailContent from '@/components/page/buyDetail/buyDetailContent';
	import buyDetailBusiness from '@/components/page/buyDetail/buyDetailBusiness';
	import buyDetailList from '@/components/page/buyDetail/buyDetailList';
	import HeaderBar from '@/components/layout/HeaderBar';
	import nav from '@/components/layout/Nav';
	import {getProductBuy} from '@/services/supplyAndBuy';
	export default {
		validate({ params }) {
			return !isNaN(+params.id);
		}, // 验证ID有效性
		head: {
			title: '求购详情'
		}, // 可设置页面title
		async asyncData({ params }) {
			try {
				let { data } = await getProductBuy(params.id);
				return { buyData: data };
			} catch(e) {
				console.log(e);
			}
		},
		data() {
			return {
				buyData: ''
			};
		},
		components: {
			HeaderBar,
			'lcNav': nav,
			buyDetailContent,
			buyDetailBusiness,
			buyDetailList
		}
	}
</script>

<style lang="scss" scoped>
	@b buyDetail {
		min-height: 800px;
		@e title {
			height: 40px;
			background: $color-grey-2;
			@m breadcrumb{
				padding-top: 12px;
				margin: 0 auto;
				width: 1190px;
			}
		}
		@e content {
			margin: 30px auto;
			width: 1190px;
			@m left {
				padding-left: 20px;
				box-sizing: border-box;
				width: 822px;
			}
		}
	}
</style>