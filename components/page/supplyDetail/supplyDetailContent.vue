<template>
	<div class="buyDetailContent">
		<div class="detailBox clearfix">
			<div class="detailBox__l fl">
				<div class="bigImg2 bigImg">
					<img :src="obj.productPicUrl" />
				</div>
				<div class="collection">
					<span @click="handleFavorite"><i class="iconfont icon-shoucang1" :class="{'isFavorite': obj.isFavorite === 0}"></i>收藏花型</span>
					<span>&nbsp;&nbsp;&nbsp;&nbsp;浏览量：{{obj.viewCount}}</span>
				</div>
			</div>
			<div class="detailBox__r1 detailBox__r fl">
				<h4>{{obj.supplyDesc}}</h4>
				<div class="detailBrder1"></div>
				<div class="detailInfo">
					<p><span class="title">供应类型：</span>{{obj.supplyShape | filterDict(dicTree.PRODUCT_SHAPE)}}-{{obj.supplyType | filterDict(dicTree.PRODUCT_TYPE)}}</p>
					<p v-if="obj.supplyNum"><span class="title">供应数量：</span>{{obj.supplyNum}}&nbsp;{{obj.supplyUnit | filterDict(dicTree.PRODUCT_UNIT)}}</p>
					<p v-else><span class="title">供应数量：</span>未填写</p>
					<p><span class="title">发布时间：</span>{{obj.updateDate | customTime}}</p>
					<div class="detailBrder1"></div>
					<p><span class="title">供应厂家：</span>{{obj.userName}}</p>
					<div class="detailBrder1"></div>
					<div class="btnGroup">
						<el-button type="primary" @click="moreSupply">更多供应</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>       

<script>
	import {favoriteBus} from '@/services/util';
	import { mapGetters } from 'vuex';
	export default {
		data() {
			return {
			};
		},
		props: {
			obj: {
				type: Object
			}
		},
		computed: {
			...mapGetters({
				dicTree: 'dict/dicTree'
			})
		},
		created() {
//			console.log(this.dicTree)
		},
		methods: {
			moreSupply() {
				this.$router.push({
					path: `/supplyAndBuy`,
					query: {
						type: 'supply'
					}
				});
			},
			async handleFavorite() {
				console.log(this.obj)
				try {
					let {data} = await favoriteBus({businessId: this.obj.id,businessType: 3});
					if (data.code === 0) {
						this.obj.isFavorite = this.obj.isFavorite===0?1:0
					}
				}catch(e) {
					console.log('error', e);
				}
			}
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
	.isFavorite {
		color: $color-grey-9 !important;
	}
</style>