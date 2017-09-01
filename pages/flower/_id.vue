<template>
	<section>
		<header-bar></header-bar>
		<lc-nav></lc-nav>
		<div class="flowerDeail">
			<div class="flowerDetail__title">
				<div class="flowerDetail__title--content">
					<div class="breadcrumb fl">
						<el-breadcrumb separator=">">
							<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
							<el-breadcrumb-item :to="{ path: '/flower' }">花型展厅</el-breadcrumb-item>
							<el-breadcrumb-item>花型详情-{{flowerData.data.id}}</el-breadcrumb-item>
						</el-breadcrumb>
					</div>
					<div class="businessInfo fr">
						<el-popover ref="popover2" placement="bottom" width="200" trigger="hover" style="padding: 10px 0 0 0;">
							<div class="popover-info">
								<p>联系方式：<span>{{companyData.phone}}</span></p>
								<p>商家主营：<span>{{companyData.mainProduct || '未填写'}}</span></p>
								<div class="popover-border"></div>
								<div style="text-align: center">
									<img :src="qrCode" style="width: 80%" />
								</div>
							</div>
							<div class="popover-btnGroup">
								<span @click="goShop">进入网店</span>
								<span @click="handleCollection">收藏网店</span>
							</div>
						</el-popover>
						<el-button class="businessInfo-item">{{companyData.companyName}}</el-button>
						<el-button class="businessInfo-item" v-popover:popover2>联系商家</el-button>
						<el-button class="businessInfo-item" :icon="colletion.store" @click="handleCollection">收藏网店</el-button>
					</div>
				</div>
			</div>
			<div class="flowerDetail__wrap">
				<flower-detail-content :obj="flowerData.data" :companyObj="companyData"></flower-detail-content>
				<flower-detail-attribute :obj="flowerData.data"></flower-detail-attribute>
				<flower-detail-new :companyId="flowerData.data.companyId"></flower-detail-new>
			</div>
		</div>
	</section>
</template>

<script>
	import HeaderBar from '@/components/layout/HeaderBar';
	import nav from '@/components/layout/Nav';
	import flowerDetailContent from '@/components/page/flowerDetail/flowerDetailContent';
	import flowerDetailAttribute from '@/components/page/flowerDetail/flowerDetailAttribute';
	import flowerDetailNew from '@/components/page/flowerDetail/flowerDetailNew';
	import {getProduct} from '@/services/flower';
	import {getCompanyInfo,getCompanyQRcode} from '@/services/user';
	import {favoriteBus} from '@/services/util';
	export default {
		validate({ params }) {
			return !isNaN(+params.id);
		},
		head: {
			title: '花型详情'
		},
		async asyncData({ params }) {
			try {
				let { data } = await getProduct(params.id);
				return { flowerData: data };
			} catch(e) {
				console.log(e);
			}
		},
		components: {
			HeaderBar,
			'lcNav': nav,
			flowerDetailAttribute,
			flowerDetailContent,
			flowerDetailNew
		},
		data() {
			return {
				flowerData: {},
				companyData: {},
				qrCode: '', // 公司二维码图片
				colletion: {
					store: 'star-off',
					product: ''
				},
				paramFavorite: {
					businessId: '',
					businessType: 2
				}
			};
		},
		async created() {
			try {
				let {data} = await getCompanyInfo({o: this.flowerData.data.companyId});
				let qrCodeData = await getCompanyQRcode({companyId: this.flowerData.data.companyId});
				this.companyData = data.data;
				this.qrCode = 'data:image/png;base64,' + qrCodeData.data.data;
			}catch(e) {
				console.log('error', e);
			}
			// 收藏状态
  			this.colletion.store = this.companyData.favoriteSatus === 0?'star-off':'star-on';
		},
		methods: {
			// 收藏店铺Collection
			async handleCollection() {
				this.paramFavorite.businessId = this.flowerData.data.companyId;
				try {
					let {data} = await favoriteBus(this.paramFavorite);
					if (data.code === 0) {
						this.colletion.store = this.colletion.store === 'star-off' ? 'star-on' : 'star-off';
					}
					console.log(data);
				}catch(e) {
					console.log('error', e);
				}
			},
			// 访问网店
			goShop() {
				window.open(`http://www.lacewang.cn/shop/${this.flowerData.data.companyId}/index`);
			}
		}
	};
</script>

<style lang="scss" scoped>
	@b flowerDetail {
		@e title {
			height: 40px;
			line-height: 40px;
			background: $color-grey-2;
			@m content {
				@utils-clearfix;
				width: 1190px;
				margin: 0 auto;
				.breadcrumb {
					padding-top: 12px;
				}
				.businessInfo {
					@utils-clearfix;
					&-item {
						border: 0;
						background: transparent;
						margin-left: 0;
						font-size: 15px;
						color: $color-grey-7;
						/*&:hover {
							color: $color-primary;
						}*/
					}
				}
			}
		}
		@e wrap {
			margin: 0 auto;
			width: 1190px;
		}
	}
	/* popover */
	.popover-border {
		margin: 20px auto 10px;
		width: 90%;
		border-bottom: 1px dashed #999;
	}
	.popover-info {
		padding: 15px;
	}
	.popover-info p {
		line-height: 1.6;
		@utils-ellipsis;
	}
	.popover-btnGroup {
		border-top: 1px solid $color-grey-5;
	}
	.popover-btnGroup span {
		float: left;
		width: 49%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 14px;
		color: #333;
		cursor: pointer;
	}
	.popover-btnGroup span:first-of-type {
		border-right: 1px solid $color-grey-5;
	}
	.popover-btnGroup span:hover {
		color: $color-primary;
	}
</style>