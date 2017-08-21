<template>
	<div class="cargo">
		<shop-title></shop-title>
		<div class="cargo__content">
			<div class="cargo__content--order">
				<div class="item" v-for="(item, index) in 3">
					<div class="title">
						<el-checkbox @change="handleCheckAllChange(index)">恒申纺织</el-checkbox>
						<span class="fr">运费：到付</span>
					</div>
					<div class="content">
						<div class="tableItem" v-for="(item, index) in 2">
							<el-row>
								<el-col :span="1">
									<el-checkbox @change="handleCheckAllItem(index)"></el-checkbox>
								</el-col>
								<el-col :span="7">
									<div class="imgBox fl">
										<img src="~static/img/default/maoyishang.png"/>
									</div>
									<div class="info fl">
										<span>#2006</span>
										<p>规格+成份</p>
									</div>
								</el-col>
								<el-col :span="3">
									<div class="column">
										¥15.00
									</div>
								</el-col>
								<el-col :span="5">
									<div class="column2">
										<el-input-number size="small" v-model="num" :min="0" :max="200"></el-input-number>
									</div>
								</el-col>
								<el-col :span="4">
									<div class="column">¥15.00</div>
								</el-col>
								<el-col :span="4">
									<div class="column dele">删除</div>
								</el-col>
							</el-row>
						</div>
					</div>
				</div>
			</div>
			<shop-bottom></shop-bottom>
		</div>
	</div>
</template>

<script>
	import title from './components/title';
	import bottom from './components/bottom';
	export default {
		data() {
			return {
				num: 1
			};
		},
		components: {
			'shopTitle': title,
			'shopBottom': bottom
		},
		methods: {
			handleCheckAllChange(index) {
				console.log(index);
			},
			handleCheckAllItem(index) {
				console.log(index);
			}
		}
	};
</script>

<style lang="scss" scoped>
	@b cargo {
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
	}
</style>