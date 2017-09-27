<!--author: liuyifei-->
<template>
	<div>
		<div class="buyDetailList">
			<div class="buyDetailList__title">
				<span class="buyDetailList__title--default" v-if="obj.buyTaskList.length === 0">
				求购中
			</span>
				<span class="buyDetailList__title--main" v-else>
				共有<em>{{obj.buyTaskList.length}}</em>人接单
			</span>
			</div>
			<div class="buyDetailList__content">
				<div class="buyDetailList__content--default" v-if="obj.buyTaskList.length === 0">
					暂无人接单
				</div>
				<div class="buyDetailList__content--main clearfix" v-else>
					<div class="item fl" v-for="(item,index) in obj.buyTaskList" @click="handleSelect(index)">
						<img :src="item.userHeadIcon" />
						<div class="bg" v-if="showSelected">
							<span class="selected" @click.stop="completeBuy(item.id)">选择</span>
						</div>
						<div class="bg" v-if="item.status === 2">
							<span class="success">成交</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="buyDetailInfo" v-if="buyTaskList.id">
			<div class="buyDetailInfo__title">
				{{titleTxt}}
			</div>
			<div class="buyDetailInfo__content">
				<img v-if="buyTaskList.picUrl" :src="buyTaskList.picUrl" alt="花型图片" class="fl" />
				<p class="content-info">
					<span class="status">{{buyTaskList.productStatus}}</span>
					<span class="price" v-if="buyTaskList.buyPrice !== 0"><i>¥</i> {{buyTaskList.buyPrice/100}}/{{obj.buyUnit}}</span>
					<span class="price" v-else>价格面议</span>
				</p>
				<p class="content-desc">{{buyTaskList.leaveWord || '没有留言信息'}}</p>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	import Bus from '@/utils/bus.js';
	import { MessageBox } from 'element-ui';
	import { finishProductBuy } from '@/services/supplyAndBuy';
	export default {
		data() {
			return {
				buyTaskList: {},
				isBuyUser: false, // 访问者是否为接单人
				isMine: false, // 访问者是否为发布人
				titleTxt: 'Ta的接单信息',
				showSelected: false,
				paramsCompleteBuy: {
					buyTaskId: '',
					id: this.obj.id
				},
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
		mounted() {
			// 访问者为发布人
			if(this.userInfo.id === this.obj.userId) {
				this.isMine = true;
				this.buyTaskList = this.obj.buyTaskList[0];
			}
			// 判断访问者是否是接单人
			this.obj.buyTaskList.forEach(item => {
				if(item.userId === this.userInfo.id) {
					this.isBuyUser = true;
				}
			});
			if(this.isBuyUser) {
				for(let i = 0; i < this.obj.buyTaskList.length; i++) {
					if(this.obj.buyTaskList[i].userId === this.userInfo.id) {
						this.buyTaskList = this.obj.buyTaskList[i];
						this.titleTxt = '我的接单信息';
					}
				}
			}
			// bus通信
			Bus.$on('clickDo', target => {
				this.showSelected = target.innerText === '取消选择' ? true : false;
			});
		},
		methods: {
			handleSelect(index) {
				if(!this.isMine) {
					return;
				}
				this.buyTaskList = this.obj.buyTaskList[index];
			},
			completeBuy(id) {
				this.paramsCompleteBuy.buyTaskId = id;
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
			}
		}
	};
</script>
<style lang="scss" scoped>
	@b buyDetailList {
		margin-top: 30px;
		border: 1px solid $color-grey-5;
		@e title {
			height: 40px;
			line-height: 40px;
			background: #f8f8f8;
			border-bottom: 1px solid $color-grey-5;
			span {
				padding-left: 30px;
			}
			em {
				color: $color-primary;
			}
		}
		@e content {
			min-height: 192px;
			@m default {
				line-height: 192px;
				text-align: center;
			}
			@m main {
				.item {
					position: relative;
					margin: 17px 0 0 15px;
					width: 72px;
					height: 72px;
					cursor: pointer;
					img {
						width: 100%;
						height: 100%;
					}
					.bg {
						position: absolute;
						top: 0;
						left: 0;
						bottom: 0;
						right: 0;
						width: 100%;
						height: 100%;
						background: rgba(0, 0, 0, .5);
						text-align: center;
						line-height: 72px;
						color: #FF8300;
						.selected {
							padding: 2px 8px;
							border: 1px solid #fff;
						}
					}
				}
			}
		}
	}
	
	@b buyDetailInfo {
		margin-top: 20px;
		border: 1px solid $color-grey-5;
		@e title {
			padding-left: 30px;
			height: 40px;
			line-height: 40px;
			background: #f8f8f8;
			border-bottom: 1px solid $color-grey-5;
		}
		@e content {
			min-height: 188px;
			padding-left: 30px;
			box-sizing: border-box;
			width: 824px;
			img {
				padding: 26px 26px 0 0;
				width: 140px;
				height: 140px;
			}
			.content-info {
				padding-top: 45px;
				.status {
					margin-right: 10px;
					padding: 4px 8px;
					font-size: 16px;
					color: #fff;
					background: #ff8400;
				}
				.price {
					color: #ff494f;
					font-size: 15px;
					i {
						font-style: normal;
						font-size: 12px;
					}
				}
			}
			.content-desc {
				margin-top: 30px;
				font-size: 16px;
			}
		}
	}
</style>