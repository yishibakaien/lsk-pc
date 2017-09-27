<!--author: liuyifei-->
<template>
	<div class="buyRelease">
		<header-bar></header-bar>
		<lc-nav></lc-nav>
		<div class="buyRelease__content wrap">
			<lc-page-title title="发布供应"></lc-page-title>
			<div class="buyRelease__content--form">
				<el-form :model="releaseSupplyForm" :rules="rules" ref="releaseSupplyForm" label-width="125px">
					<el-form-item label="花型图片：" prop="productPicUrl" class="important">
						<div v-if="imgBase64">
							<img :src="imgBase64" width="80" height="80" />
						</div>
						<el-button type="primary" size="small">{{btnText}}</el-button>
						<lc-upload fileType="4" @doUpload="uploadImg"></lc-upload>
					</el-form-item>
					<el-form-item label="花型分类：" prop="supplyType" class="important">
						<el-radio-group v-model="releaseSupplyForm.supplyType">
							<el-radio-button :label="item.value" v-for="item in screenData.fabric" :key="item.value">{{item.name}}</el-radio-button>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="大货类型：" prop="supplyShapes" class="important">
						<el-radio-group v-model="releaseSupplyForm.supplyShapes">
							<el-radio-button :label="item.value" v-for="item in screenData.stock" :key="item.value">{{item.name}}</el-radio-button>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="供应数量：" prop="supplyNum">
						<div style="width: 360px; margin-right: 15px;" class="fl">
							<el-input type="text" v-model="releaseSupplyForm.supplyNum"></el-input>
						</div>
						<el-dropdown trigger="click" @command="handelDropdown" menu-align="start">
							<el-button type="text">
								{{unitTxt}}<i class="el-icon-caret-bottom el-icon--right"></i>
							</el-button>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item :command="item" v-for="item in unitOptions" :key="item.value">{{item.name}}</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-form-item>
					<el-form-item label="供应说明：" prop="supplyDesc" class="important">
						<el-input type="textarea" :autosize="{ minRows: 4, maxRows: 6}" v-model="releaseSupplyForm.supplyDesc"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit('releaseSupplyForm')">发布求购</el-button>
					</el-form-item>
				</el-form>
			</div>
			<el-dialog title="提示" :visible.sync="dialogVisible" size="tiny">
				<div class="dialog__info">
					<i class="iconfont icon-xuanzhe"></i>
					<p>已成功发布供应</p>
				</div>
				<div class="dialog__footer">
					<el-button type="primary" @click="resetForm('releaseSupplyForm')">继续发布</el-button>
					<el-button @click="dialogVisible = false">我的供应</el-button>
				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	// 接口出来要换成字典(时间紧张，暂不替换)
	let data = {
		fabric: [{ value: '100010', name: '面料' }, { value: '100011', name: '大边' }, { value: '100012', name: '小边' }, { value: '100013', name: '睫毛' }],
		stock: [{ value: '200010', name: '胚布' }, { value: '200011', name: '成品' }],
		unit: [{ value: '400011', name: '公斤' }, { value: '400010', name: '码' }, { value: '400012', name: '条' }]
	}
	import HeaderBar from '@/components/layout/HeaderBar';
	import lcUpload from '@/plugins/components/lcUpload';
	import nav from '@/components/layout/Nav';
	import lcPageTitle from '@/components/layout/common/lcPageTitle';
	import { releaseCompanySupply } from '@/services/supplyAndBuy';
	export default {
		head: {
			title: '发布供应'
		},
		data() {
			return {
				releaseSupplyForm: {
					productPicUrl: '',
					supplyType: '',
					supplyShapes: '',
					supplyNum: '',
					supplyDesc: '',
					supplyUnit: ''
				}, // 表单数据
				imgBase64: '',
				unitTxt: '公斤',
				rules: {
					productPicUrl: {
						required: true,
						message: '请上传花型图片'
					},
					supplyType: {
						required: true,
						message: '请选择分类',
						trigger: 'change'
					},
					supplyShapes: {
						required: true,
						message: '请选择大货类型',
						trigger: 'change'
					},
					supplyDesc: [{
						required: true,
						message: '请填写供应说明(最多50个字)'
					}, {
						min: 1,
						max: 50,
						message: '请输入1-50个字'
					}],
					supplyNum: {
						pattern: /^[0-9]*$/,
						message: '请输入正确的供应数量'
					}
				}, // 验证规则
				dialogVisible: false,
				screenData: data,
				unitOptions: data.unit //单位
			};
		},
		components: {
			HeaderBar,
			'lcNav': nav,
			lcPageTitle,
			lcUpload
		},
		watch: {
			'releaseSupplyForm.supplyType' (val, oldVal) {
				if(val === '100013') {
					if(this.releaseSupplyForm.supplyShapes === '200010') {
						this.unitOptions = data.unit.slice(0, 1);
						return;
					}
					this.unitOptions = data.unit.slice(0, 3);
				} else {
					if(this.releaseSupplyForm.supplyShapes === '200010') {
						this.unitOptions = data.unit.slice(0, 1);
						return;
					}
					this.unitOptions = data.unit.slice(0, 2);
				}
			},
			'releaseSupplyForm.supplyShapes' (val, oldVal) {
				if(val === '200010') {
					this.unitOptions = data.unit.slice(0, 1);
				} else {
					if(this.releaseSupplyForm.supplyType === '100013') {
						this.unitOptions = data.unit.slice(0, 3);
						return;
					}
					this.unitOptions = data.unit.slice(0, 2);
				}
			},
			unitOptions(val, oldVal) {
				this.releaseSupplyForm.supplyUnit = val[0].value;
				this.unitTxt = val[0].name;
			}
		},
		computed: {
			btnText() {
				return this.imgBase64 ? "修改图片" : "添加图片"
			}
		},
		methods: {
			// 上传图片
			uploadImg(e) {
				if(e) {
					this.imgBase64 = e[0].result;
					this.releaseSupplyForm.productPicUrl = e[0].storeAs;
				}
			},
			// 选择单位
			handelDropdown(e) {
				this.releaseSupplyForm.supplyUnit = e.value;
				this.unitTxt = e.name;
			},
			// 发布
			onSubmit(formName) {
				console.log(this.releaseSupplyForm)
				this.$refs[formName].validate(async(valid) => {
					if(valid) {
						try {
							let { data } = await releaseCompanySupply(this.releaseSupplyForm);
							if(data.code === 0) {
								this.dialogVisible = true;
							}
						} catch(e) {
							console.log('error', e);
						}
					}
				});
			},
			// 继续发布
			resetForm(formName) {
				this.$refs[formName].resetFields();
				this.imgBase64 = '',
				this.dialogVisible = false;
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
	
	.dialog__info {
		text-align: center;
		font-size: 23px;
		i {
			font-size: 38px;
			color: $color-primary;
		}
		p {
			margin-top: 20px;
			color: $color-grey-9;
		}
	}
	
	.dialog__footer {
		margin-top: 30px;
		button {
			margin: 0 35px;
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