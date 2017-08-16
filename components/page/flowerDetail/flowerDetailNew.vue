<template>
	<div class="flowerDetailNew">
		<lc-title title="最新上架" path="/flower">
			<div class="flowerDetailNew__box clearfix">
				<el-col :span="5" v-for="(o, index) in 4" :key="index">
					<el-card :body-style="{ padding: '0px' }">
						<img src="~static/image/qrcode/app.png" style="width: 100%;">
						<div class="flowerDetail__content--cardInfo">
							<p class="price"><em>¥</em>&nbsp;<span>75.00</span>/码</p>
							<p class="code">#2006889</p>
							<img class="logo" src="~static/image/logo/lace.png" />
						</div>
					</el-card>
				</el-col>
			</div>
		</lc-title>
	</div>
</template>

<script>
	import lcTitle from '@/components/layout/common/lcTitle';
	export default {
		components: {
			lcTitle
		}
	};
</script>

<style lang="scss">
	@b flowerDetailNew {
		margin-top: 40px;
		margin-bottom: 40px;
		@e box {
			padding: 20px;
		}
	}
</style>