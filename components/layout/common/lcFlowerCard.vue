<template>
	<div class="flowerCard">
		<div class="flowerCard__imgMain">
			<img :src="imgMainSrc" />
		</div>
		<div class="flowerCard__imgGroup clearfix">
			<span class="prev fl" :class="{'ban': start === 0}" @click.stop="handlePrev" v-if="obj.colors.length > 4"><</span>
			<div class="imgs fl" :class="{'pad': obj.colors.length <= 4}">
				<img v-for="item in imgsData" :src="item.picUrl" @click.stop="handleImg(item.picUrl)" />
			</div>
			<span class="next fl" :class="{'ban': end === obj.colors.length}" @click.stop="handleNext" v-if="obj.colors.length > 4">></span>
		</div>
		<div class="flowerCard__info">
			<div class="flowerCard__info--cardInfo">
				<p class="price"><em>¥</em>&nbsp;<span>{{obj.price}}</span>/{{obj.priceUnit | filterDict(dicTree.PRODUCT_UNIT)}}</p>
				<p class="code">#{{obj.id}}</p>
				<img class="logo" src="~static/image/logo/lace1.png" />
			</div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		data() {
			return {
				imgMainSrc: this.obj.colors[0].picUrl,
				imgsData: this.obj.colors,
				start: 0,
				end: 4
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
			if(this.obj.colors.length > 4) {
				this.imgsData = this.obj.colors.slice(0, 4);
			}
		},
		methods: {
			handleImg(src) {
				this.imgMainSrc = src;
			},
			handlePrev() {
				if(this.start === 0) {
					return;
				}
				this.start--;
				this.end--;
				this.imgsData = this.obj.colors.slice(this.start, this.end);
			},
			handleNext() {
				if(this.end === this.obj.colors.length) {
					return;
				}
				this.start++;
				this.end++;
				this.imgsData = this.obj.colors.slice(this.start, this.end);
			}
		}
	};
</script>

<style lang="scss" scoped>
	@b flowerCard {
		border: 1px solid $color-grey-3;
		border-radius: 1px;
		background: #fff;
		overflow: hidden;
		@e imgMain {
			width: 194px;
			height: 194px;
			padding: 15px 15px 8px 15px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		@e imgGroup {
			width: 100%;
			height: 42px;
			padding: 0 10px;
			.imgs {
				width: 178px;
				height: 42px;
				display: inline-block;
				overflow: hidden;
				img {
					float: left;
					margin-right: 6px;
					width: 38px;
					height: 38px;
					cursor: pointer;
					border: 1px solid transparent;
					&:hover {
						border: 1px solid red;
					}
					&:last-of-type {
						margin-right: 0;
					}
				}
			}
			.pad {
				padding: 0 0 0 5px;
			}
			span {
				display: inline-block;
				width: 13px;
				height: 38px;
				line-height: 38px;
				color: $color-grey-4;
				background: #fff;
				border: 1px solid $color-grey-4;
				cursor: pointer;
				-webkit-user-select: none;
				-moz-user-select: none;
				user-select: none;
			}
			.ban {
				cursor: not-allowed;
			}
		}
		@e info {
			@m cardInfo {
				position: relative;
				padding: 6px 14px 8px;
				.price {
					color: rgba(0, 0, 0, .4);
					em {
						color: $color-primary;
						font-size: 13px;
						font-weight: 600;
					}
					span {
						color: $color-primary;
						font-size: 15px;
						font-weight: 600;
					}
				}
				.code {
					font-size: 14px;
					color: $color-black;
				}
				.logo {
					width: 85px;
					position: absolute;
					right: 15px;
					top: 22px;
				}
			}
		}
	}
</style>