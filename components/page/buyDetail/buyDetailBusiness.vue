<template>
	<div class="buyDetailBusiness">
		<div class="buyDetailBusiness__title clearfix">
			<img src="~assets/img/logo/design_diy.png" class="fl" alt="商户头像"/>
			<p class="name">立春针织</p>
			<p class="num">Ta的总供应数：<em>4个</em><el-button type="primary" size="mini" style="position: relative; top: -2px;">进店逛逛</el-button></p>
			<p class="phone">电话：18888888888</p>
		</div>
		<div class="buyDetailBusiness__content">
			<div class="buyDetailBusiness__content--items clearfix">
				<div class="item fl" v-for="item in 8">
					<img src="~assets/img/default/morenhuaxing.png" alt="更多供应"/>
				</div>
			</div>
			<lc-page-bar :showOpt="true" :pageNum="pageData.pageNum" :pageMax="pageData.pageMax" @upPage="upPage" @downPage="downPage" @selectFirstPage="selectFirstPage" @selectLastPage="selectLastPage"></lc-page-bar>
		</div>
	</div>
</template>

<script>
	import lcPageBar from '@/components/layout/common/lcPageBar';
	export default {
		data() {
			return {
				pageData: {
					pageNum: 1,
					pageMax: 10
				}
			};
		},
		components: {
			lcPageBar
		},
		methods: {
			upPage() {
				if (this.pageNum === 1) {
					return;
				}
				this.pageNum --;
			},
			downPage() {
				if (this.pageNum = this.pageMax) {
					return;
				}
				this.pageNum ++;
			},
			selectFirstPage() {
				this.pageNum = 1;
			},
			selectLastPage() {
				this.pageNum = this.maxNum;
			}
		}
	};
</script>

<style lang="scss" scoped>
@b buyDetailBusiness {
	width: 358px;
	border: 1px solid $color-grey-5;
	@e title {
		border-bottom: 1px solid $color-grey-5;
		background: #f8f8f8;
		img {
			margin: 15px;
			width: 80px;
			height: 80px;
			border-radius: 50%;
		}
		.name {
			padding-top: 20px;
			font-size: $font-size-4;
		}
		.num {
			color: $color-grey-7;
			font-size: $font-size-2;
			em {
				padding-right: 16px;
				color: $color-primary;
				font-size: $font-size-2;
			}
		}
	}
	@e content {
		margin-bottom: 40px;
		min-height: 200px;
		text-align: center;
		.item {
			margin:15px 0 0 15px ;
			width: 156px;
			height: 156px;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>