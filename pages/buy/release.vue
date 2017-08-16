<template>
	<div class="buyRelease">
		<header-bar></header-bar>
		<lc-nav></lc-nav>
		<div class="buyRelease__content wrap">
			<lc-page-title title="发布求购"></lc-page-title>
			<div class="buyRelease__content--form">
				<el-form :model="releaseBuyForm" :rules="rules" ref="releaseBuyForm" label-width="125px">
					<el-form-item label="花型图片：" class="important">
						<el-input type="file" v-model="releaseBuyForm.pic"></el-input>
						<!--<lc-file></lc-file>-->
					</el-form-item>
					<el-form-item label="花型分类：" prop="fenlei" class="important">
						<el-radio-group v-model="releaseBuyForm.fenlei">
							<el-radio-button :label="item.value" v-for="item in screenData.fabric" :key="item.value">{{item.name}}</el-radio-button>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="大货类型：" prop="dahuo" class="important">
						<el-radio-group v-model="releaseBuyForm.dahuo">
							<el-radio-button :label="item.value" v-for="item in screenData.stock" :key="item.value">{{item.name}}</el-radio-button>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="是否接受开机：" prop="kaiji" class="important">
						<el-radio-group v-model="releaseBuyForm.kaiji">
							<el-radio-button :label="item.value" v-for="item in screenData.region" :key="item.value">{{item.name}}</el-radio-button>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="求购数量：">
						<div style="width: 360px; margin-right: 15px;" class="fl">
							<el-input type="text" v-model="releaseBuyForm.shuliang"></el-input>
						</div>
						<el-dropdown trigger="click" @command="handelDropdown" menu-align="start">
							<el-button type="text">
								{{danwei || '公斤'}}<i class="el-icon-caret-bottom el-icon--right"></i>
							</el-button>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item :command="item" v-for="item in screenData.unit" :key="item.value">{{item.name}}</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-form-item>
					<el-form-item label="求购说明：" prop="shuoming" class="important">
						<el-input type="textarea" :autosize="{ minRows: 4, maxRows: 6}" v-model="releaseBuyForm.shuoming"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">发布求购</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	// 接口出来要换成字典
	let data = {
		fabric: [{ value: '1', name: '面料' }, { value: '2', name: '大边' }, { value: '3', name: '小边' }, { value: '4', name: '睫毛' }],
		stock: [{ value: 'all', name: '胚布' }, { value: '1', name: '成品' }],
		region: [{ value: 'all', name: '接受' }, { value: '1', name: '不接受' }],
		unit: [{ value: '1', name: '公斤' }, { value: '2', name: '码' }, { value: '3', name: '条' }]
	}
	import HeaderBar from '@/components/layout/HeaderBar';
	//	import lcFile from '@/components/layout/common/aliUpload';
	import nav from '@/components/layout/Nav';
	import lcPageTitle from '@/components/layout/common/lcPageTitle';
	export default {
		data() {
			return {
				releaseBuyForm: {
					pic: '',
					fenlei: '1',
					dahuo: '',
					kaiji: '',
					shuliang: '',
					shuoming: '',
					danwei: ''
				},
				danwei: '',
				rules: {
					fenlei: {
						required: true,
						message: '请选择分类'
					},
					dahuo: {
						required: true,
						message: '请选择大货类型'
					},
					kaiji: {
						required: true,
						message: '请选择是否开机'
					},
					shuoming: {
						required: true,
						message: '请填写求购说明'
					}
				},
				screenData: data
			};
		},
		components: {
			HeaderBar,
			'lcNav': nav,
			lcPageTitle
			//			lcFile
		},
		methods: {
			// 选择单位
			handelDropdown(e) {
				this.releaseBuyForm.danwei = e.value;
				this.danwei = e.name;
			},
			// 发布
			onSubmit() {
				
			}
		}
	};
</script>

<style lang="scss" scoped>
	@b buyRelease {
		@e content {
			min-height: 600px;
			@m form {
				margin-top: 30px;
			}
		}
	}
</style>
<style type="text/css">
	.important {
		label {
			&::before {
				content: '*';
				color: red;
				padding-right: 2px;
			}
		}
	}
</style>