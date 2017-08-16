<template>
	<div class="buyDetailContent">
		<div class="detailBox clearfix">
			<div class="detailBox__l fl">
				<div class="bigImg2 bigImg">
					<img src="~static/img/default/morenhuaxing.png" />
				</div>
				<div class="collection">
					<span><i class="iconfont el-icon-star-on"></i>收藏花型</span>
				</div>
			</div>
			<div class="detailBox__r1 detailBox__r fl">
				<h4>花型编号+成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分成分</h4>
				<div class="detailBrder1"></div>
				<div class="detailInfo">
					<p><span class="title">供应类型：</span>胚布-面料</p>
					<p><span class="title">供应数量：</span>222</p>
					<p><span class="title">发布时间：</span>2016/6/2</p>
					<div class="detailBrder1"></div>
					<p><span class="title">供应厂家：</span>新诚信</p>
					<div class="detailBrder1"></div>
					<div class="btnGroup">
						<el-button type="primary">更多供应</el-button>
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
	@b buyDetailContent {
		margin-top: 30px;
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