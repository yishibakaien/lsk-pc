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
					<img v-for="(item, index) in imgDatas" :src="item.picUrl" :key="index" @click="handlePic(item.picUrl)" />
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
						<img v-for="(item, index) in colorCardData" :src="item.picUrl" @click="handlePic(item.picUrl)" />
					</p>
					<p>
						<span class="title fl">类型：</span>
						<div class="fl">
							<el-radio-group v-model="radio3" @change="handleOrderType">
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
							<el-input-number size="small" v-model="num6" :min="0" :max="20000"></el-input-number>
						</div>
						<div class="clearfix"></div>
					</p>
					<div class="btnGroup">
						<el-popover ref="popover1" placement="bottom" width="200" trigger="click">
							<div class="popover">
								<h4>{{companyObj.phone}}</h4>
								<p>
									老板，拨打电话时，记得说明是坐视布管的客户哦～
								</p>
							</div>
						</el-popover>
						<el-button v-if="obj.isShelve === 1">加入购物车</el-button>
						<el-button type="primary" class="btn-bor">在线交易</el-button>
						<el-button @click="handleGoto3DDress">我要试衣</el-button>
						<el-button v-popover:popover1 v-if="obj.isShelve === 0">电话</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import { getColorCards } from '@/services/flower';
	import { favoriteBus, byCode } from '@/services/util';
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
				colorCardData: {},
				isFavorite: false,
				productPic: '',
				paramsFavorite: {
					businessId: this.obj.id,
					businessType: 1
				},
				areaData: '未填写',
				radio3: '1',
				num6: '1'
			};
		},
		computed: {
			...mapGetters({
				dicTree: 'dict/dicTree'
			})
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
			console.log(this.companyObj)
			this.isFavorite = this.obj.isFavorite;
			try {
				let { data } = await getColorCards({ productId: this.obj.id });
				this.colorCardData = data.data;
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
			handleOrderType() {
				console.log(this.radio3)
			},
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
			handlePic(src) {
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
</style>