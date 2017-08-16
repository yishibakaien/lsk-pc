<template>
	<div class="supplyDetailContent">
		<div class="detailBox clearfix">
			<div class="detailBox__l fl">
				<div class="bigImg2 bigImg">
					<img src="~assets/img/default/morenhuaxing.png" />
				</div>
				<div class="collection">
					<span><i class="iconfont el-icon-star-on"></i>收藏花型</span>
				</div>
			</div>
			<div class="detailBox__r1 detailBox__r fl">
				<h4>花型编号+成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分</h4>
				<div class="detailBrder1"></div>
				<div class="detailInfo">
					<p><span class="title">求购类型：</span>广东省广州市</p>
					<p><span class="title">求购数量：</span>面料</p>
					<p><span class="title">其他要求：</span>胚布</p>
					<p><span class="title">求购时间：</span>需要开机</p>
					<div class="detailBrder1"></div>
					<p><span class="title">采购商：</span>需要开机</p>
					<div class="detailBrder1"></div>
					<p><span class="title">状态：</span>需要开机</p>
					<div class="btnGroup">
						<el-button type="primary">我要接单</el-button>
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
			};
		},
		methods: {
		}
	};
</script>

<style lang="scss">
	@b supplyDetailContent {
		padding: 15px;
		box-sizing: border-box;
		width: 800px;
		border: 1px solid $color-grey-5;
		@utils-clearfix;
	}
	.bigImg2 {
		width: 420px;
		height: 420px;
		img {
			width: 420px;
			height: 420px;
		}
	}
	
	/* btn */
	.btnGroup {
		margin-top: 20px;
		.el-button {
			width: 100%;
			height: 40px;
			font-size: $font-size-4;
		}
		.el-button--primary {
			color: #fff;
		}
	}
</style>