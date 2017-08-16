<template>
	<div class="flowerDetailNew">
		<lc-title title="最新上架" path="/flower">
			<div class="flowerDetailNew__box clearfix">
				<el-col :span="5" v-for="(o, index) in 4" :key="index">
					<!--<el-card :body-style="{ padding: '0px' }">
						<img src="~static/image/qrcode/app.png" style="width: 100%;">
						<div class="flowerDetail__content--cardInfo">
							<p class="price"><em>¥</em>&nbsp;<span>75.00</span>/码</p>
							<p class="code">#2006889</p>
							<img class="logo" src="~static/image/logo/lace.png" />
						</div>
					</el-card>-->
					<lc-flower-card :imgs="imgGroup">
						<!--<div class="flowerDetail__content--cardInfo">
							<p class="price"><em>¥</em>&nbsp;<span>75.00</span>/码</p>
							<p class="code">#2006889</p>
							<img class="logo" src="~static/image/logo/lace.png" />
						</div>-->
					</lc-flower-card>
				</el-col>
			</div>
		</lc-title>
	</div>
</template>

<script>
	// mock数据
	let imgs = ['http://image.tswq.wang/product/ios-f68465f09df549cda468aa6941137efb.jpg',
	'http://image.tswq.wang/product/ios-867b928d34fe4e7a974f5e1ed7fadf2b.jpg',
	'http://image.tswq.wang/product/1502858132869',
	'http://image.tswq.wang/product/ios-84dad6e122bd4d7b80940c14e07dba9f.jpg',
	'http://image.tswq.wang/product/1502858132869'];
	import lcTitle from '@/components/layout/common/lcTitle';
	import lcFlowerCard from '@/components/layout/common/lcFlowerCard';
	export default {
		data() {
			return {
				imgGroup: imgs
			}
		},
		components: {
			lcTitle,
			lcFlowerCard
		}
	};
</script>

<style lang="scss">
	@b flowerDetailNew {
		margin-top: 40px;
		margin-bottom: 40px;
		@e box {
			padding: 20px;
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