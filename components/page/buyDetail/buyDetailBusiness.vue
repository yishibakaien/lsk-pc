<!--author: liuyifei-->
<template>
	<div class="buyDetailBusiness">
		<div class="buyDetailBusiness__title clearfix" v-if="isMain">
			<p class="num">我的总采购数：<em>{{data.totalNum}}个</em></p>
		</div>
		<div class="buyDetailBusiness__title clearfix" v-else>
			<img :src="obj.userHeadIcon" class="fl" alt="商户头像"/>
			<p class="name">{{obj.userName}}</p>
			<p class="num">
				Ta的总采购数：<em>{{data.totalNum}}个</em>
				<!--<el-button type="primary" size="mini" style="position: relative; top: -2px;">进店逛逛</el-button>-->
			</p>
			<!--<p class="phone">电话：{{data.userMobile}}</p>-->
		</div>
		<div class="buyDetailBusiness__content">
			<div class="buyDetailBusiness__content--items clearfix">
				<div class="item fl" v-for="item in data.list">
					<img :src="item.buyPicUrl" alt="更多求购"  @click="goDetail(item.id)"/>
					<span class="item-bg" v-if="item.buyStatus !== 1">{{item.buyStatus===2?'已完成':'已关闭'}}</span>
				</div>
			</div>
			<lc-page-bar :showOpt="true" :pageNum="pageData.pageNum" :pageMax="pageData.pageMax" @upPage="upPage" @downPage="downPage" @selectFirstPage="selectFirstPage" @selectLastPage="selectLastPage"></lc-page-bar>
		</div>
	</div>
</template>

<script>
	import lcPageBar from '@/components/layout/common/lcPageBar';
	import {listUserProductBuys} from '@/services/supplyAndBuy';
	import { mapGetters } from 'vuex';
	export default {
		data() {
			return {
				pageData: {
					pageNum: 1,
					pageMax: 10
				},
				params: {
					userId: this.obj.userId,
					pageNo: 1,
					pageSize: 8
				},
				data: {},
				isMain: false
			};
		},
		props: {
			obj: {
				type: Object
			}
		},
		computed: {
			...mapGetters({
				userInfo: 'user/userInfo'
			})
		},
		components: {
			lcPageBar
		},
		mounted() {
			if (this.userInfo.id === this.obj.userId) {
				this.isMain = true;
			}
			this.getBuyList();
		},
		methods: {
			async getBuyList() {
				let {data} =await listUserProductBuys(this.params);
				this.data = data.data;
				this.pageData.pageNum = this.data.pageNO;
				this.pageData.pageMax = this.data.totalPage;
			},
			upPage() {
				if(this.pageData.pageNum === 1) {
					return;
				}
				this.pageData.pageNum--;
				this.params.pageNo = this.pageData.pageNum;
				this.getBuyList();
			},
			downPage() {
				if(this.pageData.pageNum === this.pageData.pageMax) {
					return;
				}
				this.pageData.pageNum++;
				this.params.pageNo = this.pageData.pageNum;
				this.getBuyList();
			},
			selectFirstPage() {
				this.pageData.pageNum = 1;
				this.params.pageNo = this.pageData.pageNum;
				this.getBuyList();
			},
			selectLastPage() {
				this.pageData.pageNum = this.pageData.pageMax;
				this.params.pageNo = this.pageData.pageNum;
				this.getBuyList();
			},
			goDetail(id) {
				this.$router.push({
					path: `/buy/${id}`
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
@b buyDetailBusiness {
	width: 358px;
	border: 1px solid $color-grey-5;
	@e title {
		padding: 15px;
		border-bottom: 1px solid $color-grey-5;
		background: #f8f8f8;
		img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
		}
		.name {
			padding: 5px 0 10px 10px;
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
			position: relative;
			margin:15px 0 0 15px ;
			width: 156px;
			height: 156px;
			img {
				width: 100%;
				height: 100%;
				cursor: pointer;
			}
			.item-bg {
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				width: 100%;
				height: 100%;
				color: #fff;
				line-height: 156px;
				z-index: 999;
				background: rgba(0,0,0,.4);
				cursor: not-allowed;
			}
		}
	}
}
</style>