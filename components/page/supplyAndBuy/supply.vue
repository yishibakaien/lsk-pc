<template>
	<div class="supplyList">
		<div class="supplyList__screen">
			<div class="listScreen__box">
				<span class="title">供应分类</span>
				<el-radio-group v-model="filter.fabric" @change="handleFabric">
					<el-radio-button label="null">全部</el-radio-button>
					<el-radio-button :label="item.dicValue" v-for="item in dicTree.PRODUCT_TYPE" :key="item.dicValue">{{item.name}}</el-radio-button>
				</el-radio-group>
			</div>
			<div class="listScreen__box">
				<span class="title">供应布样</span>
				<el-radio-group v-model="filter.sample" @change="handleSample">
					<el-radio-button label="null">全部</el-radio-button>
					<el-radio-button :label="item.dicValue" v-for="item in dicTree.PRODUCT_SHAPE.slice(0,2)" :key="item.dicValue">{{item.name}}</el-radio-button>
				</el-radio-group>
			</div>
		</div>
		<div class="supplyList__content">
				<el-col :span="4" v-for="(o, index) in supplyListData.list" :key="index">
					<el-card :body-style="{ padding: '0px' }">
						<div class="imgBox" @click="goDetail(o.id)">
							<img :src="o.productPicUrl">
							<p class="bg clearfix">
								<span class="fl" v-if="o.supplyNum">{{o.supplyNum}} {{o.supplyUnit | filterDict(dicTree.PRODUCT_UNIT)}}</span>
								<span class="fr">{{o.createDate | customTime}}</span>
							</p>
						</div>
						<div style="padding: 6px 14px 8px;">
							<p class="describe" :title="o.supplyDesc">{{o.supplyDesc}}</p>
						</div>
					</el-card>
				</el-col>
		</div>
		<div class="supplyList__pageBar">
			<el-pagination layout="prev, pager, next" :current-page="params.pageNo" :page-size="params.pageSize" :total="supplyListData.totalNum" @current-change="pageData">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import { listHomeCompanySupplys } from '@/services/supplyAndBuy';
	import { mapGetters } from 'vuex';
	export default {
		data() {
			return {
				supplyListData: {},
				filter: {
					fabric: 'null',
					sample: 'null'
				},
				params: {
					pageNo: 1,
					pageSize: 25,
					supplyShapes: 'null',
					supplyStatus: 1,
					supplyTypes: 'null'
				}
			};
		},
		computed: {
			...mapGetters({
				dicTree: 'dict/dicTree'
			})
		},
		created() {
			this.getListData();
		},
		methods: {
			dataFilter() {
				for(var o in this.params) {
					if(this.params[o] === 'null') {
						this.params[o] = null;
					}
				}
			},
			async getListData() {
				this.dataFilter();
				try {
					let { data } = await listHomeCompanySupplys(this.params);
					this.supplyListData = data.data;
				}catch(e) {
					console.log('error',e);
				}
			},
			handleFabric() {
				this.params.supplyTypes = this.filter.fabric;
				this.params.pageNo = 1;
				this.getListData();
			},
			handleSample() {
				this.params.supplyShapes = this.filter.sample;
				this.params.pageNo = 1;
				this.getListData();
			},
			pageData(e) {
				this.params.pageNo = e;
				this.getListData();
			},
			// 跳转详情页
			goDetail(id) {
				console.log(id);
				this.$router.push({
					path: `/supply/${id}`
				});
			}
		}
	};
</script>

<style lang="css" scoped>
	@b supplyList {
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
						background: rgba(0, 0, 0, .4);
					}
				}
				.describe {
					@utils-ellipsis 1;
				}
			}
		}
		@e pageBar {
			text-align: center;
			margin: 40px auto;
		}
	}
</style>