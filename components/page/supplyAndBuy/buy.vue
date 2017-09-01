<template>
	<div class="buyList">
		<div class="buyList__screen">
			<div class="listScreen__box">
				<span class="title">求购分类</span>
				<el-radio-group v-model="filter.fabric" @change="handleFabric">
					<el-radio-button label="null">全部</el-radio-button>
					<el-radio-button :label="item.dicValue" v-for="item in dicTree.PRODUCT_TYPE" :key="item.dicValue">{{item.name}}</el-radio-button>
				</el-radio-group>
			</div>
			<div class="listScreen__box">
				<span class="title">采购布样</span>
				<el-radio-group v-model="filter.sample" @change="handleSample">
					<el-radio-button label="null">全部</el-radio-button>
					<el-radio-button :label="item.dicValue" v-for="item in dicTree.PRODUCT_SHAPE.slice(0,2)" :key="item.dicValue">{{item.name}}</el-radio-button>
				</el-radio-group>
			</div>
			<div class="listScreen__box">
				<span class="title">接受开机</span>
				<el-radio-group v-model="filter.action" @change="handleAction">
					<el-radio-button label="null">全部</el-radio-button>
					<el-radio-button :label="item.dicValue" v-for="item in dicTree.PRODUCT_STARTUP" :key="item.dicValue">{{item.name}}</el-radio-button>
				</el-radio-group>
			</div>
		</div>
		<div class="buyList__content">
			<el-col :span="4" v-for="(o, index) in listData.list" :key="index">
				<el-card :body-style="{ padding: '0px' }">
					<div class="imgBox" @click="goDetail(o.id)">
						<img :src="o.buyPicUrl">
						<p class="bg clearfix">
							<span class="fl" v-if="o.buyNum">{{o.buyNum}} {{o.buyUnit | filterDict(dicTree.PRODUCT_UNIT)}}</span>
							<span class="fr">{{o.buyStatus | filterDict(filterData.state)}}</span>
						</p>
					</div>
					<div style="padding: 6px 14px 8px;">
						<p class="describe" :title="o.buyDesc">{{o.buyDesc || '商家未填写'}}</p>
					</div>
					<div class="info clearfix">
						<p class="fl" :title="o.userName">{{o.userName}}</p>
						<p class="fr">{{o.createDate | customTime}}</p>
					</div>
				</el-card>
			</el-col>
		</div>
		<div class="buyList__pageBar">
			<el-pagination layout="prev, pager, next" 
				:current-page="params.pageNo" 
				:page-size="params.pageSize" 
				:total="listData.totalNum" 
				@current-change="pageData">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	// 接口出来要换成字典
	import { listHomeProductBuys } from '@/services/supplyAndBuy';
	import { mapGetters } from 'vuex';
	export default {
		data() {
			return {
				listData: {},
				filterData: {
					state: [{dicValue: 0, name: '已删除'},
					{dicValue: 1, name: '求购中'},
					{dicValue: 2, name: '已完成'},
					{dicValue: 3, name: '已关闭'}]
				},
				filter: {
					fabric: 'null',
					sample: 'null',
					action: 'null'
				},
				params: {
					buyShapes: 'null',
					buyTypes: 'null',
					isStartUp: 'null',
					pageNo: 1,
					pageSize: 25
				}
			};
		},
		computed: {
			...mapGetters({
				dicTree: 'dict/dicTree'
			})
		},
		created() {
			this.dataFilter();
			try {
				this.getBuyListData();
			} catch(e) {
				console.log('error');
			}
			console.log(this.dicTree)
		},
		methods: {
			dataFilter() {
				for(var o in this.params) {
					if(this.params[o] === 'null') {
						this.params[o] = null;
					}
				}
			},
			async getBuyListData() {
				this.dataFilter();
				try {
					let { data } = await listHomeProductBuys(this.params);
					this.listData = data.data;
				}catch(e) {
					console.log('error',e)
				}
			},
			handleFabric() {
				this.params.buyTypes = this.filter.fabric;
				this.params.pageNo = 1;
				this.getBuyListData();
			},
			handleSample() {
				this.params.buyShapes = this.filter.sample;
				this.params.pageNo = 1;
				this.getBuyListData();
			},
			handleAction() {
				this.params.isStartUp = this.filter.action;
				this.params.pageNo = 1;
				this.getBuyListData();
			},
			pageData(e) {
				this.params.pageNo = e;
				this.getBuyListData();
			},
			// 跳转详情页
			goDetail(id) {
				this.$router.push({
					path: `/buy/${id}`
				});
			}
		}
	};
</script>

<style lang="css" scoped>
	@b buyList {
		@e screen {
			margin: 10px 0;
		}
		@e content {
			@utils-clearfix;
			.el-col-4 {
				margin-right: 1.25%;
				margin-bottom: 15px;
				width: 19%;
				&:nth-of-type(5n) {
					margin-right: 0;
				}
				.imgBox {
					position: relative;
					padding: 10px;
					padding-bottom: 0;
					box-sizing: border-box;
					width: 224px;
					height: 224px;
					cursor: pointer;
					img {
						width: 100%;
						height: 100%;
					}
					.bg {
						position: absolute;
						bottom: 0;
						padding: 0 15px;
						width: 204px;
						box-sizing: border-box;
						height: 32px;
						line-height: 32px;
						color: #fff;
						font-size: 12px;
						background: rgba(0,0,0,.4);
					}
				}
				.describe {
					@utils-ellipsis;
				}
				.info {
					padding: 5px 14px 8px;
					font-size: 13px;
					border-top: 1px solid #eaeaea;
					.fl {
						width: 140px;
						@utils-ellipsis;
					}
				}
			}
		}
		@e pageBar {
			text-align: center;
			margin: 40px auto;
		}
	}
</style>