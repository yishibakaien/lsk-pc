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
				<span class="flowerDetail__breadcrumb--info">共 <em>19999</em> 款花型</span>
			</div>
			<div class="flowerDetail__screen">
				<div class="listScreen__box">
					<span class="title">分类</span>
					<el-radio-group v-model="filter.fabric" @change="handleFabric">
						<el-radio-button :label="item.value" v-for="item in screenData.fabric" :key="item.value">{{item.name}}</el-radio-button>
					</el-radio-group>
				</div>
				<div class="listScreen__box">
					<span class="title">库存盘点</span>
					<el-radio-group v-model="filter.stock" @change="handleSample">
						<el-radio-button :label="item.value" v-for="item in screenData.stock" :key="item.value">{{item.name}}</el-radio-button>
					</el-radio-group>
				</div>
				<div class="listScreen__box">
					<span class="title">地区</span>
					<el-radio-group v-model="filter.region" @change="handleAction">
						<el-radio-button :label="item.value" v-for="item in screenData.region" :key="item.value">{{item.name}}</el-radio-button>
					</el-radio-group>
				</div>
			</div>
			<div class="flowerDetail__content">
				<el-col :span="4" v-for="(o, index) in 25" :key="o">
					<lc-flower-card :imgs="imgGroup">
						<div class="flowerDetail__content--cardInfo">
							<p class="price"><em>¥</em>&nbsp;<span>75.00</span>/码</p>
							<p class="code">#2006889</p>
							<img class="logo" src="~static/image/logo/lace.png" />
						</div>
					</lc-flower-card>
				</el-col>
			</div>
		</div>
	</section>
</template>

<script>
	// 接口出来要换成字典
	let data = {
		fabric: [{ value: 'all', name: '全部' }, { value: '1', name: '面料' }, { value: '2', name: '大边' }, { value: '3', name: '小边' }, { value: '4', name: '睫毛' }],
		stock: [{ value: 'all', name: '全部' }, { value: '1', name: '需要开机' }, { value: '2', name: '有库存' }],
		region: [{ value: 'all', name: '全部' }, { value: '1', name: '广州' }, { value: '2', name: '深圳' }, { value: '3', name: '汕头' }, { value: '4', name: '长乐' }, { value: '5', name: '柯桥' }, { value: '6', name: '其他' }]
	}
	let imgs = ['http://image.tswq.wang/product/ios-f68465f09df549cda468aa6941137efb.jpg',
	'http://image.tswq.wang/product/ios-867b928d34fe4e7a974f5e1ed7fadf2b.jpg',
	'http://image.tswq.wang/product/1502858132869',
	'http://image.tswq.wang/product/ios-84dad6e122bd4d7b80940c14e07dba9f.jpg',
	'http://image.tswq.wang/product/1502858132869'];
	import HeaderBar from '@/components/layout/HeaderBar';
	import nav from '@/components/layout/Nav';
	import lcFlowerCard from '@/components/layout/common/lcFlowerCard';
	export default {
		data() {
			return {
				screenData: data,
				imgGroup: imgs,
				filter: {
					fabric: 'all',
					stock: 'all',
					region: 'all'
				}
			};
		},
		components: {
			HeaderBar,
			lcFlowerCard,
			'lcNav': nav
		},
		methods: {
			handleFabric() {
				console.log(this.filter.fabric);
			},
			handleSample() {
				console.log(this.filter.stock);
			},
			handleAction() {
				console.log(this.filter.region);
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
			@m cardInfo {
				position: relative;
				padding: 6px 14px 8px;
				.price {
					color: rgba(0, 0, 0, .4);
					em {
						color: $color-primary;
						font-size: 13px;
						font-weight: 600;
					}
					span {
						color: $color-primary;
						font-size: 15px;
						font-weight: 600;
					}
				}
				.code {
					font-size: 14px;
					color: $color-black;
				}
				.logo {
					width: 80px;
					position: absolute;
					right: 15px;
					top: 10px;
				}
			}
		}
	}
</style>