<template>
	<div class="supplyDetailBusiness">
		<div class="supplyDetailBusiness__title clearfix" v-if="isMain">
			<p class="num">我的总供应数：<em>{{data.totalNum}}个</em></p>
		</div>
		<div class="supplyDetailBusiness__title clearfix" v-else>
			<img src="~static/img/logo/design_diy.png" class="fl" alt="商户头像" />
			<p class="name">{{obj.userName}}</p>
			<p class="num">Ta的总供应数：<em>{{data.totalNum}}个</em>
				<el-button type="primary" size="mini" style="position: relative; top: -2px;" @click="goStore">进店逛逛</el-button>
			</p>
			<p class="phone">电话：{{data.userMobile}}</p>
		</div>
		<div class="supplyDetailBusiness__content">
			<div class="supplyDetailBusiness__content--items clearfix">
				<div class="item fl" v-for="item in data.list" @click="goDetail(item.id)">
					<img :src="item.productPicUrl" alt="更多供应" />
				</div>
			</div>
			<lc-page-bar :showOpt="true" :pageNum="pageData.pageNum" :pageMax="pageData.pageMax" @upPage="upPage" @downPage="downPage" @selectFirstPage="selectFirstPage" @selectLastPage="selectLastPage"></lc-page-bar>
		</div>
	</div>
</template>

<script>
	import lcPageBar from '@/components/layout/common/lcPageBar';
	import { listUserCompanySupplys } from '@/services/supplyAndBuy';
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
				companyID: this.obj.companyId,
				isMain: false
			};
		},
		props: {
			obj: {
				type: Object
			}
		},
		components: {
			lcPageBar
		},
		computed: {
			...mapGetters({
				userInfo: 'user/userInfo'
			})
		},
		created() {
			if (this.userInfo.id === this.obj.userId) {
				this.isMain = true;
			}
			this.getUserSupply();
		},
		methods: {
			async getUserSupply() {
				let { data } = await listUserCompanySupplys(this.params);
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
				this.getUserSupply();
			},
			downPage() {
				if(this.pageData.pageNum === this.pageData.pageMax) {
					return;
				}
				this.pageData.pageNum++;
				this.params.pageNo = this.pageData.pageNum;
				this.getUserSupply();
			},
			selectFirstPage() {
				this.pageData.pageNum = 1;
				this.params.pageNo = this.pageData.pageNum;
				this.getUserSupply();
			},
			selectLastPage() {
				this.pageData.pageNum = this.pageData.pageMax;
				this.params.pageNo = this.pageData.pageNum;
				this.getUserSupply();
			},
			goDetail(id) {
				this.$router.push({
					path: `/supply/${id}`
				});
			},
			goStore() {
				window.open(`http://www.lacewang.cn/shop/${this.companyID}/index`);
			}
		}
	};
</script>

<style lang="scss" scoped>
	@b supplyDetailBusiness {
		width: 358px;
		border: 1px solid $color-grey-5;
		@e title {
			padding: 15px;
			border-bottom: 1px solid $color-grey-5;
			img {
				width: 80px;
				height: 80px;
				border-radius: 50%;
			}
			.name {
				padding-top: 5px;
				font-size: $font-size-4;
			}
			.num {
				color: $color-grey-7;
				font-size: $font-size-2;
				em {
					padding-right: 16px;
					color: $color-primary;
					font-size: $font-size-4;
				}
			}
		}
		@e content {
			margin-bottom: 40px;
			min-height: 200px;
			text-align: center;
			.item {
				margin: 15px 0 0 15px;
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