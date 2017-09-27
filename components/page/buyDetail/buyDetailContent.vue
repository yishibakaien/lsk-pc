<!--author: liuyifei-->
<template>
	<div class="supplyDetailContent">
		<div class="detailBox clearfix">
			<div class="detailBox__l fl">
				<div class="bigImg2 bigImg">
					<img :src="obj.buyPicUrl" />
				</div>
				<div class="collection">
					<!--<span @click="handleFavorite"><i class="iconfont icon-shoucang1" :class="{'isFavorite': obj.isFavorite === 0}"></i>收藏花型</span>-->
					<span>&nbsp;&nbsp;&nbsp;&nbsp;浏览量：{{obj.viewCount || 0}}</span>
				</div>
			</div>
			<div class="detailBox__r1 detailBox__r fl">
				<h4>{{obj.buyDesc}}</h4>
				<div class="detailBrder1"></div>
				<div class="detailInfo">
					<p><span class="title">求购类型：</span>{{obj.buyShape | filterDict(dicTree.PRODUCT_SHAPE)}}-{{obj.buyType | filterDict(dicTree.PRODUCT_TYPE)}}</p>
					<p><span class="title">求购数量：</span>{{obj.buyNum}}&nbsp;{{obj.buyUnit | filterDict(dicTree.PRODUCT_UNIT)}}</p>
					<p><span class="title">其他要求：</span>{{obj.isStartUp.toString() | filterDict(dicTree.PRODUCT_STARTUP)}}开机</p>
					<p><span class="title">求购时间：</span>{{obj.createDate | customTime}}</p>
					<div class="detailBrder1"></div>
					<p><span class="title">采购商：</span>{{obj.userName}}</p>
					<div class="detailBrder1"></div>
					<div>
						<p v-if="stateTxt"><span class="title">状态：</span>{{stateTxt}}</p>
						<p v-else><span class="title">状态：</span>{{obj.buyStatus | filterDict(filterData.state)}}</p>
					</div>
					<div class="btnGroup">
						<!--用户为发布人-->
						<div v-if="isMine">
							<!--求购单求购中-->
							<p v-if="obj.buyStatus === 1">
								<el-button class="small gray" @click="closeBuy">关闭求购</el-button>
								<el-button type="primary" class="small" @click="completeBuy($event)">完成求购</el-button>
							</p>
							<!--求购单已完成-->
							<p v-if="obj.buyStatus === 2">
								<el-button type="primary" @click="releaseAgain">重新发布</el-button>
							</p>
							<!--求购单已关闭-->
							<p v-if="obj.buyStatus === 3">
								<el-button class="small" @click="deleteBuy">删除</el-button>
								<el-button type="primary" class="small" @click="releaseAgain">重新发布</el-button>
							</p>
						</div>
						<!--用户不是发布人-->
						<div v-else>
							<!--我未接单，商家未成交-->
							<el-button type="primary" v-if="!isConfirm && obj.buyStatus === 1" @click="orderTaking">我要接单</el-button>
							<!--我已接单，商家还未成交-->
							<el-button v-if="isConfirm && obj.buyStatus === 1" @click="cancelBuy">取消接单</el-button>
							<!--我已接单，但商家和其他用户成交-->
							<el-button v-if="isConfirm && obj.buyStatus === 2" @click="deleteOrder">删除</el-button>
							<!--我接单成功-->
							<p class="success" v-if="isSuccess">
								<i class="iconfont icon-paimai2"></i> 恭喜您接单成功
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import { MessageBox } from 'element-ui';
	import Bus from '@/utils/bus.js';
	import { closeProductBuy, finishProductBuy, deleteProductBuy, cancelBuyTask, deleteBuyTask } from '@/services/supplyAndBuy';
	export default {
		data() {
			return {
				filterData: {
					state: [{dicValue: 0, name: '已删除'},
					{dicValue: 1, name: '求购中'},
					{dicValue: 2, name: '已完成'},
					{dicValue: 3, name: '已关闭'}]
				},
				stateTxt: '',
				isMine: false, // 用户是否为发布人
				isConfirm: false, // 用户是否已接单
				isSuccess: false, // 用户是否接单成功
				paramsCloseBuy: {
					buyCloseDesc: '',
					id: this.obj.id
				},
				paramsCompleteBuy: {
					buyTaskId: '',
					id: this.obj.id
				},
				paramsDeleteBuy: {
					ids: this.obj.id
				}
			};
		},
		props: {
			obj: {
				type: Object
			}
		},
		computed: {
			...mapGetters({
				userInfo: 'user/userInfo',
				dicTree: 'dict/dicTree'
			})
		},
		created() {
//			console.log(this.obj);
			// 判断是否为发布人
			if(this.userInfo.id === this.obj.userId) {
				this.isMine = true;
			}
			// 判断当前用户是否已接单
			this.obj.buyTaskList.forEach(item => {
				if(item.userId === this.userInfo.id) {
					this.isConfirm = true;
				}
			});
			// 判断用户是否接单成功
			if(this.isConfirm) {
				for(let i = 0; i < this.obj.buyTaskList.length; i++) {
					if(this.obj.buyStatus === 2 && this.obj.buyTaskList[i].status === 2) {
						this.isSuccess = true;
						this.stateTxt = '已成交'
					}
				}
			};
			// 判断用户是否删除接单
			for(let i = 0; i < this.obj.buyTaskList.length; i++) {
				if(this.obj.buyTaskList[i].userId === this.userInfo.id) {
					if(this.obj.buyTaskList[i].status === 2) {
						this.isSuccess = true;
					}
				}
			}
		},
		methods: {
			// 商户关闭求购
			closeBuy() {
				this.$confirm('确认关闭该求购单, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(async() => {
					try {
						await closeProductBuy(this.paramsCloseBuy);
					} catch(e) {
						console.log('error', e);
					}
					this.$message({
						type: 'success',
						message: '已关闭该求购单!'
					});
					this.$router.push({
						path: '/'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消关闭'
					});
				});
			},
			// 商户完成求购
			completeBuy(event) {
				if (this.obj.buyTaskList.length > 0) {
					event.target.innerText = event.target.innerText === '取消选择'?'完成求购':'取消选择';
					Bus.$emit('clickDo', event.target);
					return;
				}
				this.$confirm('确认完成该求购单, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(async() => {
					try {
						await finishProductBuy(this.paramsCompleteBuy);
					} catch(e) {
						console.log('error', e);
					}
					this.$message({
						type: 'success',
						message: '已完成该求购单!'
					});
					location.reload();
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消完成'
					});
				});
			},
			// 重新发布
			releaseAgain() {
				this.$router.push({
					path: '/buy/release',
					query: {
						obj: this.obj
					}
				});
			},
			// 删除求购单
			deleteBuy() {
				this.$confirm('确认删除该求购单, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(async() => {
					try {
						await deleteProductBuy(this.paramsDeleteBuy);
					} catch(e) {
						console.log('error', e);
					}
					this.$message({
						type: 'success',
						message: '已删除该求购单!'
					});
					this.$router.push({
						path: '/'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			// 取消接单
			cancelBuy() {
				let param;
				for(let i = 0; i < this.obj.buyTaskList.length; i++) {
					if(this.obj.buyTaskList[i].userId === this.userInfo.id) {
						param = this.obj.buyTaskList[i].id;
					}
				}
				console.log(param);
				this.$confirm('确认取消接单, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(async() => {
					try {
						await cancelBuyTask(param);
					} catch(e) {
						console.log('error', e);
					}
					this.$message({
						type: 'success',
						message: '已成功取消接单!'
					});
					location.reload();
				}).catch(() => {
					console.log('已取消');
				});
			},
			// 删除接单deleteBuyTask
			deleteOrder() {
				let param;
				for(let i = 0; i < this.obj.buyTaskList.length; i++) {
					if(this.obj.buyTaskList[i].userId === this.userInfo.id) {
						param = this.obj.buyTaskList[i].id;
					}
				}
				this.$confirm('确认取消接单, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(async() => {
					try {
						await deleteBuyTask({ids: param});
					} catch(e) {
						console.log('error', e);
					}
					this.$message({
						type: 'success',
						message: '已成功删除接单!'
					});
					this.$router.push({
						path: '/'
					});
				}).catch(() => {
					console.log('已取消');
				});
			},
			// 我要接单（pc端暂不支持，跳转提示下载APP页面）
			orderTaking() {
				this.$router.push({
					path: '/total/download'
				});
			}
		}
	};
</script>

<style lang="scss">
	@b supplyDetailContent {
		padding: 15px;
		box-sizing: border-box;
		width: 800px;
		border: 1px solid $color-grey-5;
		@utils-clearfix;
	}
	
	.bigImg2 {
		width: 420px;
		height: 420px;
		img {
			width: 420px;
			height: 420px;
		}
	}
	/* btn */
	
	.btnGroup {
		margin-top: 20px;
		.el-button {
			width: 100%;
			height: 40px;
			font-size: $font-size-4;
		}
		.el-button--primary {
			color: #fff;
		}
		.small {
			width: 48%;
		}
		.success {
			i {
				display: block;
				margin-bottom: 20px;
				font-size: 35px;
			}
			margin-top: 50px;
			width: 320px;
			font-size: 24px !important;
			color: #ff8300 !important;
			text-align: center;
		}
	}
	
	.isFavorite {
		color: $color-grey-9 !important;
	}
</style>