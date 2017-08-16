<template>
	<section>
		<header-bar></header-bar>
		<div class="flowerDeail">
			<div class="flowerDetail__title">
				<div class="flowerDetail__title--content">
					<div class="breadcrumb fl">
						<el-breadcrumb separator=">">
							<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
							<el-breadcrumb-item :to="{ path: '/flower' }">花型展厅</el-breadcrumb-item>
							<el-breadcrumb-item>花型详情-{{bianhao || '花型编号'}}</el-breadcrumb-item>
						</el-breadcrumb>
					</div>
					<div class="businessInfo fr">
						<el-popover ref="popover2" placement="bottom" width="200" trigger="hover" style="padding: 10px 0 0 0;">
							<div class="popover-info">
								<p>联系方式：<span>18888888888</span></p>
								<p>商家主营：<span>大边小边大边小边大边小边大边小边大边小边</span></p>
								<div class="popover-border"></div>
								<div style="text-align: center">
									<img src="~static/image/qrcode/app.png" style="width: 80%" />
								</div>
							</div>
							<div class="popover-btnGroup">
								<span>进入网店</span>
								<span>收藏网店</span>
							</div>
						</el-popover>
						<el-button class="businessInfo-item">店铺名称</el-button>
						<el-button class="businessInfo-item" v-popover:popover2>联系商家</el-button>
						<el-button class="businessInfo-item" :icon="colletion.store" @click="handleCollection">收藏网店</el-button>
					</div>
				</div>
			</div>
			<div class="flowerDetail__wrap">
				<flower-detail-content></flower-detail-content>
				<flower-detail-attribute></flower-detail-attribute>
				<flower-detail-new></flower-detail-new>
			</div>
		</div>
	</section>
</template>

<script>
	import HeaderBar from '@/components/layout/HeaderBar';
	import flowerDetailContent from '@/components/page/flowerDetail/flowerDetailContent';
	import flowerDetailAttribute from '@/components/page/flowerDetail/flowerDetailAttribute';
	import flowerDetailNew from '@/components/page/flowerDetail/flowerDetailNew';
	export default {
		validate({ params }) {
			return !isNaN(+params.id);
		},
		components: {
			HeaderBar,
			flowerDetailContent,
			flowerDetailAttribute,
			flowerDetailNew
		},
		data() {
			return {
				bianhao: '',
				colletion: {
					store: 'star-off',
					product: ''
				}
			};
		},
		methods: {
			handleCollection() {
				this.colletion.store = this.colletion.store === 'star-off' ? 'star-on' : 'star-off';
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