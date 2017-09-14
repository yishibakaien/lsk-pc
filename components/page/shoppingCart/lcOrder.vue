<template>
	<div class="cargo">
		<div class="cargo__title">
			<el-row>
				<el-col :span="2">
					<el-checkbox v-model="checkAll" @change="handleAll">全选</el-checkbox>
				</el-col>
				<el-col :span="6">花型</el-col>
				<el-col :span="3">参考单价</el-col>
				<el-col :span="5">数量</el-col>
				<el-col :span="4">小计</el-col>
				<el-col :span="4">操作</el-col>
			</el-row>
		</div>
		<div class="cargo__content">
			<div class="cargo__content--order">
				<div class="item" v-for="(item, index) in listData">
					<div class="title">
						<el-checkbox v-model="checkoutAll" :label="index" @change="handleCheckAllChange(index,$event)">{{item.companyName}}</el-checkbox>
						<span class="fr" v-if="type!=='2'">运费：到付</span>
					</div>
					<div class="content">
						<div class="tableItem" v-for="(obj,e) in item.shoppingCarts">
							<el-row>
								<el-col :span="1">
									<el-checkbox v-model="checkout[index]" :label="obj.id" @change="handleCheckAllItem(obj.id)">{{ '' }}</el-checkbox>
								</el-col>
								<el-col :span="7">
									<div class="imgBox fl">
										<img :src="obj.picUrl" />
									</div>
									<div class="info fl">
										<span>{{obj.productId}}</span>
										<p>{{obj.ingredient}}</p>
									</div>
								</el-col>
								<el-col :span="3">
									<div class="column">
										¥{{obj.price/100}}/{{obj.priceUnit | filterDict(dicTree.PRODUCT_UNIT)}}
									</div>
								</el-col>
								<el-col :span="5">
									<div class="column" v-if="type==='1'">
										1
									</div>
									<div class="column2" v-else-if="type==='2'">
										<el-input-number size="small" v-model="obj.buyNum" :min="100" :max="1000000" @change="handleChange(obj)"></el-input-number>
									</div>
									<div class="column2" v-else-if="type==='3'">
										<el-input-number size="small" v-model="obj.buyNum" :min="1" :max="5" @change="handleChange(obj)"></el-input-number>
									</div>
								</el-col>
								<el-col :span="4">
									<div class="column">¥{{obj.price/100 * obj.buyNum}}</div>
								</el-col>
								<el-col :span="4">
									<div class="column dele" @click="handleDele(1,obj.id)">删除</div>
								</el-col>
							</el-row>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="cargo__bottom">
			<el-row>
				<el-col :span="2">
					<el-checkbox v-model="checkAll" @change="handleAll">全选</el-checkbox>
				</el-col>
				<el-col :span="3"><span class="dele" @click="handleDele(2)">删除选中的花型</span></el-col>
				<el-col :span="3" :offset="3"><span>已选中 <em>{{totalNum}}</em> 款花型</span></el-col>
				<el-col :span="4"><span>商品总价：<em>¥{{totalPrice}}</em> </span></el-col>
				<el-col :span="5"><span>应付金额：<em>¥{{totalPrice}}</em> (不含运费)</span></el-col>
				<el-col :span="4">
					<el-button type="primary" style="width: 100%; height: 52px;position: relative; top: -3px; font-size: 18px;">去结算</el-button>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import { listShoppingCart, deleteShoppingCart, setBuyNum } from '@/services/order';
	export default {
		data() {
			return {
				num: 1,
				listData: [],
				ids: [],
				paramsList: {
					buyType: this.type
				},
				paramsDele: {
					ids: []
				},
				checkout: [], // 购物车选择
				checkoutAll: [], // 店铺全选
				checkAll: false // 全选
			};
		},
		computed: {
			...mapGetters({
				dicTree: 'dict/dicTree'
			}),
			totalNum() {
				let arr = [];
				this.checkout.forEach(item => {
					arr = arr.concat(item);
				})
				return arr.length;
			},
			totalPrice() {
				let arr = [];
				let num = 0;
				this.checkout.forEach(item => {
					arr = arr.concat(item);
				})
				arr.forEach(item => {
					for(let i = 0; i < this.listData.length; i++) {
						for(let j = 0; j < this.listData[i].shoppingCarts.length; j++) {
							if(this.listData[i].shoppingCarts[j].id === item) {
								num += this.listData[i].shoppingCarts[j].buyNum * this.listData[i].shoppingCarts[j].price;
							}
						}
					}
				})
				return num / 100;
			}
		},
		props: {
			type: ''
		},
		watch: {
			type(val) {
				this.paramsList.buyType = val;
				this.getShoppingList();
			},
			checkout(val) {
				let data = [];
				for(let i = 0; i < this.listData.length; i++) {
					data.push([]);
				}
				for(let i = 0; i < this.checkoutAll.length; i++) {
					let index = this.checkoutAll[i];
					let arr = [];
					this.listData[index].shoppingCarts.forEach((item) => {
						arr.push(item.id);
					})
					data.splice(index, 1, arr);
				}
				if(!val.length) {
					return;
				}
				let set = new Set(this.checkoutAll);
				for(let i = 0; i < val.length; i++) {
					if(val[i].length !== data[i].length) {
						set.delete(i);
					}
				}
				this.checkoutAll = Array.from(set);
			}
		},
		async created() {
			this.getShoppingList();
		},
		methods: {
			// 重置
			reset() {
				this.checkout = [];
				this.checkoutAll = [];
				this.checkAll = false;
			},
			// 获取我的求购列表
			async getShoppingList() {
				this.reset();
				try {
					let { data } = await listShoppingCart(this.paramsList);
					this.listData = data.data;
					for(let i = 0; i < this.listData.length; i++) {
						this.checkout.push([]);
					}
				} catch(e) {
					console.log('error', e)
				}
			},
			// 选中店铺所有购物车
			handleCheckAllChange(e, el) {
				//				console.log(el.target.checked);
				if(!el.target.checked) {
					this.checkout.splice(e, 1, []);
					this.checkAll = false;
					return;
				}
				let arr = [];
				this.listData[e].shoppingCarts.forEach((item) => {
					arr.push(item.id);
				})
				this.checkout.splice(e, 1, arr);
			},
			// 选中单个购物车
			handleCheckAllItem(e) {
				console.log(e, this.checkout);
				//				let data = [];
				//				for(let i = 0; i < this.checkoutAll.length; i++) {
				//					let index = this.checkoutAll[i];
				//					let arr = [];
				//					data[index].shoppingCarts.forEach((item) => {
				//						arr.push(item.id);
				//					})
				//					data.splice(index, 1, arr);
				//				}
				//				if (this.checkout[e-0].length !== data[e-0]) {
				//					
				//				}
			},
			// 删除选中购物车
			async handleDele(type, id) {
				let params = {};
				let arr = [];
				if(type === 1) {
					params.ids = [id];
				} else {
					this.checkout.forEach(item => {
						arr = arr.concat(item);
					})
					params.ids = arr;
				}
				try {
					await deleteShoppingCart(params);
					this.getShoppingList()
				} catch(e) {
					console.log('error', e)
				}
			},
			// 全选
			handleAll() {
				if(this.checkAll) {
					for(let i = 0; i < this.listData.length; i++) {
						this.checkoutAll.push(i)
					}
				} else {
					this.checkoutAll = [];
					this.checkout = [];
					for(let i = 0; i < this.listData.length; i++) {
						this.checkout.push([]);
					}
				}
				for(let i = 0; i < this.checkoutAll.length; i++) {
					let index = this.checkoutAll[i];
					let arr = [];
					this.listData[index].shoppingCarts.forEach((item) => {
						arr.push(item.id);
					})
					this.checkout.splice(index, 1, arr);
				}
			},
			// 设置购物车数量
			handleChange(obj) {
				setTimeout(async () => {
					let params = {};
					params.buyNum = obj.buyNum;
					params.id = obj.id;
					try{
						await setBuyNum(params);
					}catch(e) {
						console.log('error',e)
					}
				}, 0);
			}
		}
	};
</script>

<style lang="scss" scoped>
	@b cargo {
		@e title {
			margin-bottom: 5px;
			height: $item--height;
			line-height: $item--height;
			text-align: center;
			color: $color-grey-9;
			background: $color-grey-2;
		}
		@e content {
			@m order {
				margin-top: 15px;
				.item {
					margin-bottom: 20px;
					.title {
						margin-bottom: 8px;
						span {
							padding-right: 10px;
							color: $color-black;
							font-size: $font-size-3;
						}
					}
				}
				.content {
					.tableItem {
						height: 110px;
						text-align: center;
						border: 1px solid $color-grey-5;
						border-bottom: 0;
						&:last-of-type {
							border-bottom: 1px solid $color-grey-5;
						}
						.column {
							line-height: 110px;
							font-size: $font-size-2;
							color: $color-black;
						}
						.column2 {
							padding-top: 40px;
						}
						.dele {
							color: $color-grey-9;
							cursor: pointer;
							&:hover {
								text-decoration: underline;
							}
						}
					}
					.imgBox {
						margin: 10px 0 0 20px;
						padding: 5px;
						width: 80px;
						height: 80px;
						border: 1px solid $color-grey-3;
						background: #fff;
						img {
							width: 100%;
							height: 100%;
						}
					}
					.info {
						margin-top: 15px;
						span {
							font-size: $font-size-2;
							color: $color-black;
							text-indent: 1em;
						}
						p {
							margin-top: 30px;
							font-size: $font-size-1;
							color: $color-grey-9;
							text-indent: 1em;
						}
					}
				}
			}
		}
		@e bottom {
			box-sizing: border-box;
			margin-bottom: 5px;
			margin-top: 40px;
			height: 52px;
			line-height: 52px;
			text-align: center;
			color: $color-grey-9;
			border: 1px solid $color-grey-5;
			.dele {
				font-size: $font-size-3;
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
			}
			em {
				color: $color-primary;
				font-weight: 600;
			}
		}
	}
</style>