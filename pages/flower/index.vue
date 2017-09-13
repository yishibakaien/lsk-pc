<template>
	<section>
		<header-bar></header-bar>
		<lc-nav></lc-nav>
		<div class="wrap flowerDetail">
			<div class="flowerDetail__breadcrumb">
				<el-breadcrumb separator=">" class="flowerDetail__breadcrumb--main">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>花型展厅</el-breadcrumb-item>
				</el-breadcrumb>
				<span class="flowerDetail__breadcrumb--info">共 <em>{{listData.totalNum}}</em> 款花型</span>
			</div>
			<div class="flowerDetail__screen">
				<div class="listScreen__box">
					<span class="title">分类</span>
					<el-radio-group v-model="filter.fabric" @change="handleFabric">
						<el-radio-button label="">全部</el-radio-button>
						<el-radio-button :label="item.dicValue" v-for="item in dicTree.PRODUCT_TYPE" :key="item.dicValue">{{item.name}}</el-radio-button>
					</el-radio-group>
				</div>
				<div class="listScreen__box">
					<span class="title">库存盘点</span>
					<el-radio-group v-model="filter.stock" @change="handleSample">
						<el-radio-button :label="item.value" v-for="item in screenData.stock" :key="item.value">{{item.name}}</el-radio-button>
					</el-radio-group>
				</div>
				<div class="listScreen__box">
					<span class="title" style="margin-right: 15px;">地区(多选)</span>
					<el-checkbox style="padding: 5px 10px 0 0" class="fl" v-model="areaAll">全部</el-checkbox>
					<el-checkbox-group v-model="filter.region" @change="handleAction" style="padding-top: 5px">
						<el-checkbox v-for="item in areaData" :label="item.value" :key="item.value">{{item.name}}</el-checkbox>
					</el-checkbox-group>
				</div>
			</div>
			<div class="flowerDetail__content">
				<el-col :span="4" v-for="(o, index) in listData.list" :key="index">
					<div @click="goDetail(o.id)">
						<lc-flower-card :obj="o"></lc-flower-card>
					</div>
				</el-col>
			</div>
			<div class="flowerDetail__pageBar">
				<el-pagination layout="prev, pager, next" :current-page="params.pageNo" :page-size="params.pageSize" :total="listData.totalNum" @current-change="pageData">
				</el-pagination>
			</div>
		</div>
	</section>
</template>

<script>
	// 接口出来要换成字典
	let data = {
		stock: [{ value: '', name: '全部' }, { value: '0', name: '需要开机' }, { value: '1', name: '有库存' }],
	}
	import HeaderBar from '@/components/layout/HeaderBar';
	import nav from '@/components/layout/Nav';
	import lcFlowerCard from '@/components/layout/common/lcFlowerCard';
	import { listProducts } from '@/services/flower';
	import {getSettledLands} from '@/services/util';
	import { mapGetters } from 'vuex';
	export default {
		head: {
			title: '花型展厅'
		},
		data() {
			return {
				screenData: data,
				areaData: [],
				listData: {},
				areaAll: true,
				filter: {
					fabric: '',
					stock: '',
					region: []
				},
				params: {
					categorys: '',
					isStock: '',
					pageNo: 1,
					pageSize: 25,
					settledLands: ''
				}
			};
		},
		watch: {
			areaAll(val) {
				if (val === true) {
					this.filter.region = [];
					this.params.settledLands = '',
					this.params.pageNo = 1;
					this.getListProducts();
				}
			}
		},
		computed: {
			...mapGetters({
				dicTree: 'dict/dicTree'
			})
		},
		components: {
			HeaderBar,
			lcFlowerCard,
			'lcNav': nav
		},
		async created() {
			this.getListProducts();
			try {
				let {data} = await getSettledLands();
				this.areaData = data.data;
				console.log(this.areaData);
			}catch(e) {
				console.log('error', e);
			}
		},
		methods: {
			async getListProducts() {
				try {
					let { data } = await listProducts(this.params);
					this.listData = data.data;
				} catch(e) {
					console.log('error', e);
				}
			},
			handleFabric() {
				console.log(this.filter.fabric);
				this.params.categorys = this.filter.fabric;
				this.params.pageNo = 1;
				this.getListProducts();
			},
			handleSample() {
				console.log(this.filter.stock);
				this.params.isStock = this.filter.stock;
				this.params.pageNo = 1;
				this.getListProducts();
			},
			handleAction() {
				if (this.filter.region.length > 0) {
					this.areaAll = false;
				}
				this.params.settledLands = this.filter.region.join(',');
				this.params.pageNo = 1;
				this.getListProducts();
			},
			// 翻页
			pageData(e) {
				this.params.pageNo = e;
				this.getListProducts();
			},
			// 跳转详情页
			goDetail(id) {
				this.$router.push({
					path: `/flower/${id}`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@b flowerDetail {
		margin-top: 10px;
		margin-bottom: 10px;
		min-height: 800px;
		@e breadcrumb {
			position: relative;
			margin-bottom: 10px;
			@m main {
				padding: 10px 0;
				font-size: 14px;
			}
			@m info {
				position: absolute;
				top: 6px;
				left: 120px;
				font-size: 15px;
				color: #999;
				em {
					color: #151515;
				}
			}
		}
		@e content {
			@utils-clearfix;
			margin: 20px 0;
			.el-col-4 {
				margin-right: 1.25%;
				margin-bottom: 15px;
				width: 19%;
				&:nth-of-type(5n) {
					margin-right: 0;
				}
			}
		}
		@e pageBar {
			margin: 40px auto;
			text-align: center;
		}
	}
</style>