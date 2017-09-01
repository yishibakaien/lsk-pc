<template>
	<section>
		<header-bar></header-bar>
		<lc-nav></lc-nav>
		<div class="supplyDetail">
			<div class="supplyDetail__title">
				<div class="supplyDetail__title--breadcrumb">
					<el-breadcrumb separator=">">
						<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item :to="{ path: '/supplyAndBuy', query: {type: 'supply'} }">供应列表</el-breadcrumb-item>
						<el-breadcrumb-item>供应详情{{'--' + supplyData.data.id}}</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
			</div>
			<div class="supplyDetail__content clearfix">
				<div class="fl supplyDetail__content--left">
					<supply-detail-content :obj="supplyData.data"></supply-detail-content>
				</div>
				<div class="fr">
					<supply-detail-business :obj="supplyData.data"></supply-detail-business>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import supplyDetailContent from '@/components/page/supplyDetail/supplyDetailContent';
	import supplyDetailBusiness from '@/components/page/supplyDetail/supplyDetailBusiness';
	import HeaderBar from '@/components/layout/HeaderBar';
	import nav from '@/components/layout/Nav';
	import { getCompanySupply } from '@/services/supplyAndBuy';
	export default {
		validate({ params }) {
			return !isNaN(+params.id);
		},
		head: {
			title: '供应详情'
		},
		async asyncData({ params }) {
			try {
				let { data } = await getCompanySupply(params.id);
				return { supplyData: data };
			} catch(e) {
				console.log(e);
			}
		},
		data() {
			return {
				supplyData: ''
			};
		},
		components: {
			HeaderBar,
			'lcNav': nav,
			supplyDetailContent,
			supplyDetailBusiness
		}
	}
</script>

<style lang="scss" scoped>
	@b supplyDetail {
		min-height: 800px;
		@e title {
			height: 40px;
			background: $color-grey-2;
			@m breadcrumb {
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
				border: 1px solid $color-grey-5;
			}
		}
	}
</style>