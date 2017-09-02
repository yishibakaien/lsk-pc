<template>
	<div class="flowerDetailContent">
		<div class="detailBox clearfix">
			<div class="detailBox__l fl">
				<div class="bigImg">
					<img :src="productPic?productPic:obj.defaultPicUrl" />
				</div>
				<div class="imgGroup" :class="{'pad': imgData.length <= 5}">
					<span class="prev" @click="colorCardPrev"><i class="iconfont icon-Prev"></i></span>
					<span class="next" @click="colorCardNext"><i class="iconfont icon-right"></i></span>
					<img v-for="(item, index) in imgDatas" :src="item.picUrl" :key="index" @click="handlePic1(item.picUrl)" />
				</div>
				<div class="collection">
					<span :class="{'isFavorite': isFavorite === 0}" @click="handleFavorite"><i class="iconfont icon-shoucang1"></i>收藏花型</span>
				</div>
			</div>
			<div class="detailBox__r fl">
				<h3>{{obj.id}}+{{obj.ingredient}}</h3>
				<div class="detailBrder"></div>
				<div class="detailInfo">
					<p class="price">
						<span class="title">价格：</span>
						<span v-if="obj.price">
							<span class="priceNum"><b>¥</b>{{obj.price}}</span>
						<em>/{{obj.priceUnit | filterDict(dicTree.PRODUCT_UNIT)}}</em>
						</span>
						<span class="priceNum" v-else>面议</span>
					</p>
					<p v-if="obj.isShelve === 1"><span class="title">地址：</span><span>{{areaData}}</span></p>
					<p><span class="title">类型：</span>{{obj.category | filterDict(dicTree.PRODUCT_TYPE)}}</p>
					<p><span class="title">货型：</span>{{obj.productShape | filterDict(dicTree.PRODUCT_SHAPE)}}</p>
					<p v-if="obj.isStock"><span class="title">库存：</span>{{obj.isStock | filterDict(filterData.isStock)}}</p>
					<p v-else><span class="title">库存：</span>请联系商家</p>
					<div class="detailBrder"></div>
					<p class="colorCard">
						<span class="title">色卡：</span>
						<img v-for="(item, index) in colorCardData" :class="{'border': item.isSelected}" :src="item.picUrl" @click="handlePic(index)" />
					</p>
					<p>
						<span class="title fl">类型：</span>
						<div class="fl">
							<el-radio-group v-model="paramsShopping.buyType">
								<el-radio-button label="1" class="orderType">剪样</el-radio-button>
								<el-radio-button label="2" class="orderType">剪版</el-radio-button>
								<el-radio-button label="3" class="orderType">大货</el-radio-button>
							</el-radio-group>
						</div>
						<div class="clearfix"></div>
					</p>
					<p style="margin-top: 15px;">
						<span class="title fl">数量：</span>
						<div class="fl">
							<el-input-number size="small" v-model="paramsShopping.buyNum" :min="inputNumber.min" :max="inputNumber.max"></el-input-number>
						</div>
						<div class="clearfix"></div>
					</p>
					<div class="btnGroup">
						<el-popover ref="popover" placement="bottom" width="200" trigger="click">
							<div class="popover">
								<h4>{{companyObj.phone}}</h4>
								<p>
									老板，拨打电话时，记得说明是坐视布管的客户哦～
								</p>
							</div>
						</el-popover>
						<el-dialog title="采购信息登记" :visible.sync="dialogVisible" size="small">
							<div class="dialog__content clearfix">
								<div class="dialog__content--color fl">
									<p>已选色卡</p>
									<div>
										<img :src="productPic?productPic:obj.defaultPicUrl" alt="色卡信息" />
									</div>
								</div>
								<div class="dialog__content--form fr">
									<p>&nbsp;</p>
									<el-form :model="dealForm" :rules="rules" ref="dealForm" label-width="125px">
										<el-form-item label="采购类型：" prop="purchaseType" class="important">
											<el-radio-group v-model="dealForm.purchaseType">
												<el-radio-button :label="item.value" v-for="item in radioData" :key="item.value">{{item.name}}</el-radio-button>
											</el-radio-group>
										</el-form-item>
										<el-form-item label="采购人：" prop="userName" class="important">
											<el-input type="text" v-model="dealForm.userName"></el-input>
										</el-form-item>
										<el-form-item label="手机号码：" prop="phone" class="important">
											<el-input type="text" v-model="dealForm.phone"></el-input>
										</el-form-item>
									</el-form>
									<p>确认提交后系统将以短信方式通知到商家</p>
								</div>
							</div>
							<span slot="footer" class="dialog-footer">
    							<el-button @click="dialogVisible = false">取 消</el-button>
    							<el-button type="primary" @click="onSubmit('dealForm')">确 定</el-button>
  							</span>
						</el-dialog>
						<el-button v-if="obj.isShelve === 1" @click="addShopping">加入购物车</el-button>
						<el-button type="primary" class="btn-bor" @click="handleDeal">在线交易</el-button>
						<el-button @click="handleGoto3DDress">我要试衣</el-button>
						<el-button v-popover:popover v-if="obj.isShelve === 0">电话</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import { MessageBox } from 'element-ui';
	import { getColorCards } from '@/services/flower';
	import { favoriteBus, byCode } from '@/services/util';
	import { addShoppingCart, askPurchase } from '@/services/order';
	export default {
		data() {
			return {
				imgData: [],
				imgDatas: [],
				start: 0,
				end: 5,
				filterData: {
					isStock: [{ dicValue: 0, name: '需要开机' }, { dicValue: 1, name: '有库存' }]
				},
				radioData: [{value: 1, name: '剪样'},{value: 2, name: '剪版'},{value: 3, name: '大货'}],
				colorCardData: {},
				isFavorite: false,
				productPic: '',
				paramsFavorite: {
					businessId: this.obj.id,
					businessType: 1
				},
				paramsShopping: {
					buyNum: '',
					buyType: '1',
					colorId: ''
				},
				inputNumber: {
					min: 1,
					max: 1
				},
				dealForm: {
					colorId: '',
					phone: '',
					productId: '',
					purchaseNum: '',
					purchaseType: '1',
					userName: ''
				},
				areaData: '未填写',
				dialogVisible: false,
				rules: {
					purchaseType: {
						required: true,
						message: '请选择采购类型'
					},
					userName: {
						required: true,
						message: '请选择输入采购人姓名或者单位名称',
						trigger: 'blur'
					},
					phone: [{required: true,message: '请填写联系方式'},
					{pattern: /^1(3|4|5|7|8)[0-9]\d{8}$/,message: '请填写正确的联系方式'}]
				}
			};
		},
		computed: {
			...mapGetters({
				dicTree: 'dict/dicTree'
			})
		},
		watch: {
			'paramsShopping.buyType' (val) {
				if(val === '1') {
					this.inputNumber.min = 1;
					this.inputNumber.max = 1;
					this.paramsShopping.buyNum = 1;
				}
				if(val === '2') {
					this.inputNumber.min = 1;
					this.inputNumber.max = 5;
					this.paramsShopping.buyNum = 1;
				}
				if(val === '3') {
					this.inputNumber.min = 100;
					this.inputNumber.max = 1000000;
					this.paramsShopping.buyNum = 100;
				}
			}
		},
		props: {
			obj: {
				type: Object
			},
			companyObj: {
				type: Object
			}
		},
		async created() {
			this.isFavorite = this.obj.isFavorite;
			try {
				let { data } = await getColorCards({ productId: this.obj.id });
				this.colorCardData = data.data;
				this.colorCardData.forEach((item) => {
					item.isSelected = false;
				})
				// 色卡预览元imgGroup
				this.imgData = Object.assign([], this.colorCardData);
				if(this.imgData.length > 5) {
					this.imgDatas = this.imgData.slice(0, 5);
				} else {
					this.imgDatas = Object.assign({}, this.imgData);
				}
			} catch(e) {
				console.log('error', e);
			}
			// 获取全部省市信息
			if(this.companyObj.city) {
				try {
					let { data } = await byCode({ areaCode: this.companyObj.city });
					console.log(data);
					this.areaData = data.data.parentName + ' ' + data.data.areaName;
				} catch(e) {
					console.log('error', e);
				}
			}
		},
		methods: {
			// 收藏/取消收藏花型
			async handleFavorite() {
				try {
					let { data } = await favoriteBus(this.paramsFavorite);
					console.log(data);
					if(data.code === 0) {
						this.isFavorite = this.isFavorite === 1 ? 0 : 1;
					}
				} catch(e) {
					console.log('error', e);
				}
			},
			// 色卡预览
			handlePic(index) {
				this.productPic = this.colorCardData[index].picUrl;
				this.colorCardData.forEach((item) => {
					item.isSelected = false;
				})
				this.colorCardData[index].isSelected = true;
				this.paramsShopping.colorId = this.colorCardData[index].id;
			},
			handlePic1(src) {
				this.productPic = src;
			},
			// 上一张色卡
			colorCardPrev() {
				if(this.start === 0) {
					return;
				}
				this.start--;
				this.end--;
				this.imgDatas = this.imgData.slice(this.start, this.end);
			},
			// 下一张色卡
			colorCardNext() {
				if(this.end === this.imgData.length) {
					return;
				}
				this.start++;
				this.end++;
				this.imgDatas = this.imgData.slice(this.start, this.end);
			},
			// 去3D试衣
			handleGoto3DDress() {
				sessionStorage['flowerUrl'] = this.productPic ? this.productPic : this.obj.defaultPicUrl;
				this.$router.push({
					path: `/home/threeDDress`
				});
			},
			// 加入购物车
			async addShopping() {
				this.paramsShopping.colorId = this.paramsShopping.colorId ? this.paramsShopping.colorId : this.colorCardData[0].id;
				try {
					await addShoppingCart(this.paramsShopping);
				} catch(e) {
					console.log('error', e);
				}
			},
			// 在线交易
			handleDeal() {
				// 上架到蕾丝控
				if(this.obj.isShelve === 1) {
					this.addShopping()
					this.$router.push({
						path: '/shoppingCart'
					});
					return;
				}
				if(this.obj.isShelve === 0) {
					this.dialogVisible = true;
					this.dealForm.colorId = this.paramsShopping.colorId ? this.paramsShopping.colorId : this.colorCardData[0].id;
					this.dealForm.productId = this.obj.id;
					this.dealForm.purchaseNum = this.paramsShopping.buyNum;
					return;
				}
			},
			// 采购登记
			onSubmit(formName) {
				this.$refs[formName].validate(async(valid) => {
					if(valid) {
						try {
							await askPurchase(this.dealForm);
							this.dialogVisible = true;
						} catch(e) {
							console.log('error', e);
						}
					}
				});
			}
		}
	};
</script>

<style lang="scss">
	@b flowerDetailContent {
		margin-top: 30px;
		@utils-clearfix;
	}
	/* radio-style */
	
	.orderType {
		font-size: 18px;
		border-radius: 0;
		.el-radio-button__inner {
			padding: 0;
			width: 80px;
			height: 33px;
			color: #666;
			line-height: 33px;
			border-radius: 0;
			border: 1px solid $color-grey-5;
			transition: background-color, border, color .3s cubic-bezier(.645, .045, .355, 1);
		}
		.el-radio-button__orig-radio:checked+.el-radio-button__inner {
			color: $color-primary;
			background: rgba(212, 0, 115, .05);
			background-image: url(~static/image/icon/xuanzhong.png);
			background-repeat: no-repeat;
			background-position: bottom right;
		}
	}
	/* btn */
	
	.btnGroup {
		margin-top: 55px;
		.el-button {
			width: 160px;
			height: 40px;
			color: $color-primary;
			font-size: $font-size-4;
			font-weight: 600;
		}
		.btn-bor {
			border: 1px solid $color-primary;
		}
		.el-button--primary {
			color: #fff;
		}
	}
	
	.isFavorite {
		i {
			color: #666 !important;
		}
	}
	/* popover*/
	
	.popover {
		padding: 15px;
		text-align: center;
		h4 {
			margin-bottom: 15px;
			color: $color-black;
			font-size: $font-size-5;
		}
		p {
			color: $color-grey-9;
			font-size: $font-size-3;
		}
	}
	/* 色卡选择 */
	
	.border {
		border-color: #D40073 !important;
	}
	/* dailog */
	
	.dialog__content {
		&--color {
			div {
				width: 160px;
				height: 160px;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		&--form {
			p {
				color: #666666 !important;
				font-size: 12px !important;
				text-align: right;
			}
		}
	}
	/*form*/
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