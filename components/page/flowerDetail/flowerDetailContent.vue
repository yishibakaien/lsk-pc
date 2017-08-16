<template>
	<div class="flowerDetailContent">
		<div class="detailBox clearfix">
			<div class="detailBox__l fl">
				<div class="bigImg">
					<img src="~static/img/default/morenhuaxing.png" />
				</div>
				<div class="imgGroup">
					<img v-for="item in 5" src="~static/img/default/maoyishang.png" :key="item" />
				</div>
				<div class="collection">
					<span><i class="iconfont el-icon-star-on"></i>收藏花型</span>
				</div>
			</div>
			<div class="detailBox__r fl">
				<h3>花型编号+成分</h3>
				<div class="detailBrder"></div>
				<div class="detailInfo">
					<p class="price"><span class="title">价格：</span><span class="priceNum"><b>¥</b>75.00</span><em>/码</em></p>
					<p><span class="title">地址：</span>广东省广州市</p>
					<p><span class="title">花型：</span>面料</p>
					<p><span class="title">货型：</span>胚布</p>
					<p><span class="title">库存：</span>需要开机</p>
					<div class="detailBrder"></div>
					<p class="colorCard">
						<span class="title">色卡：</span>
						<img v-for="item in 9" src="~static/img/default/changjia.png" />
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
							<el-input-number size="small" v-model="num6" :min="0" :max="200"></el-input-number>
						</div>
						<div class="clearfix"></div>
					</p>
					<div class="btnGroup">
						<el-button>我要试衣</el-button>
						<el-button class="btn-bor">立即购买</el-button>
						<el-button type="primary">加入购物车</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				radio3: '1',
				num6: '1'
			};
		},
		methods: {
			handleOrderType() {
				console.log(this.radio3)
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
			transition: background-color,border,color .3s cubic-bezier(.645,.045,.355,1);
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
</style>