<template>
	<div class="buyList">
		<div class="buyList__screen">
			<div class="listScreen__box">
				<span class="title">求购分类</span>
				<el-radio-group v-model="filter.fabric" @change="handleFabric">
					<el-radio-button :label="item.value" v-for="item in screenData.fabric" :key="item.value">{{item.name}}</el-radio-button>
				</el-radio-group>
			</div>
			<div class="listScreen__box">
				<span class="title">采购布样</span>
				<el-radio-group v-model="filter.sample" @change="handleSample">
					<el-radio-button :label="item.value" v-for="item in screenData.sample" :key="item.value">{{item.name}}</el-radio-button>
				</el-radio-group>
			</div>
			<div class="listScreen__box">
				<span class="title">接受开机</span>
				<el-radio-group v-model="filter.action" @change="handleAction">
					<el-radio-button :label="item.value" v-for="item in screenData.action" :key="item.value">{{item.name}}</el-radio-button>
				</el-radio-group>
			</div>
		</div>
		<div class="buyList__content">
			<!--<el-row type="flex" justify="space-between">-->
				<el-col :span="4" v-for="(o, index) in 25" :key="o">
					<el-card :body-style="{ padding: '0px' }">
						<img src="~static/image/qrcode/app.png" style="width: 100%;">
						<div style="padding: 6px 14px 8px;">
							<span>好吃的汉堡</span>
						</div>
					</el-card>
				</el-col>
			<!--</el-row>-->
		</div>
	</div>
</template>

<script>
	// 接口出来要换成字典
	let data = {
		fabric: [{ value: 'all', name: '全部' }, { value: '1', name: '面料' }, { value: '2', name: '大边' }, { value: '3', name: '小边' }, { value: '4', name: '睫毛' }],
		sample: [{ value: 'all', name: '全部' }, { value: '1', name: '成品' }, { value: '2', name: '胚布' }],
		action: [{ value: 'all', name: '全部' }, { value: '1', name: '接受' }, { value: '2', name: '不接受' }]
	}
	export default {
		data() {
			return {
				screenData: data,
				filter: {
					fabric: 'all',
					sample: 'all',
					action: 'all'
				}
			};
		},
		methods: {
			handleFabric() {
				console.log(this.filter.fabric);
			},
			handleSample() {
				console.log(this.filter.sample);
			},
			handleAction() {
				console.log(this.filter.action);
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
			}
		}
	}
</style>