<template>
	<div class="buyDetailList">
		<div class="buyDetailList__title">
			<span class="buyDetailList__title--default" v-if="listTotalDefault">
				求购中
			</span>
			<span class="buyDetailList__title--main" v-else>
				共有<em>10</em>人接单
			</span>
		</div>
		<div class="buyDetailList__content">
			<div class="buyDetailList__content--default" v-if="listContentDefault">
				暂无人接单
			</div>
			<div class="buyDetailList__content--main clearfix" v-else>
				<div class="item fl" v-for="item in 10">
					<img src="~assets/img/default/changjia.png"/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				listContentDefault: false,
				listTotalDefault: false
			};
		}
	};
</script>
<style lang="scss" scoped>
@b buyDetailList {
	margin-top: 30px;
	border: 1px solid $color-grey-5;
	@e title {
		height: 40px;
		line-height: 40px;
		background: #f8f8f8;
		border-bottom: 1px solid $color-grey-5;
		span {
			padding-left: 30px;
		}
		em {
			color: $color-primary;
		}
	}
	@e content {
		min-height: 192px;
		@m default {
			line-height: 192px;
			text-align: center;
		}
		@m main {
			.item {
				margin: 17px 0 0 15px;
				width: 72px;
				height: 72px;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}	
</style>