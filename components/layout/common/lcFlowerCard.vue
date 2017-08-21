<template>
	<div class="flowerCard">
		<div  class="flowerCard__imgMain">
			<img :src="imgMainSrc"/>
		</div>
		<div class="flowerCard__imgGroup clearfix">
			<span class="prev fl" :class="{'ban': start === 0}" @click.stop="handlePrev" v-if="imgs.length > 4"><</span>
			<div class="imgs fl" :class="{'pad': imgs.length <= 4}">
				<img v-for="item in imgsData" :src="item" @click.stop="handleImg(item)"/>
			</div>
			<span class="next fl" :class="{'ban': end === imgs.length}" @click.stop="handleNext" v-if="imgs.length > 4">></span>
		</div>
		<div class="flowerCard__info">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				imgMainSrc: this.imgs[0],
				imgsData: this.imgs,
				start: 0,
				end: 4
			};
		},
		props: {
			imgs: {
				type: Array
			}
		},
		mounted() {
			if (this.imgs.length > 4) {
				this.imgsData = this.imgs.slice(0,4);
			}
		},
		methods: {
			handleImg(src) {
				this.imgMainSrc = src;
			},
			handlePrev() {
				if (this.start === 0) {
					return;
				}
				this.start --;
				this.end --;
				this.imgsData = this.imgs.slice(this.start,this.end);
			},
			handleNext() {
				if (this.end === this.imgs.length) {
					return;
				}
				this.start ++;
				this.end ++;
				this.imgsData = this.imgs.slice(this.start,this.end);
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
}
</style>