<template>
	<section>
		<header-bar></header-bar>
		<lc-nav></lc-nav>
		<div class="shoppingCart wrap">
			<div class="shoppingCart__content">
				<div class="shoppingCart__content--title">
					<el-tabs v-model="activeName">
						<el-tab-pane :label="'大货花型' + `${num}`" name="cargo"></el-tab-pane>
						<el-tab-pane :label="'剪版花型' + `${num}`" name="cutVersion"></el-tab-pane>
						<el-tab-pane :label="'剪样花型' + `${num}`" name="cutting"></el-tab-pane>
					</el-tabs>
				</div>
				<div class="shoppingCart__content--main">
					<cargo v-show="activeName === 'cargo'"></cargo>
					<cutting v-show="activeName === 'cutting'"></cutting>
					<cut-version v-show="activeName === 'cutVersion'"></cut-version>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import HeaderBar from '@/components/layout/HeaderBar';
	import nav from '@/components/layout/Nav';
	import cargo from '@/components/page/shoppingCart/cargo';
	import cutting from '@/components/page/shoppingCart/cutting';
	import cutVersion from '@/components/page/shoppingCart/cutVersion';
	export default {
		data() {
			return {
				num: 2,
				activeName: 'cargo'
			}
		},
		components: {
			HeaderBar,
			'lcNav': nav,
			cargo,
			cutting,
			cutVersion
		}
	};
</script>

<style lang="scss" scoped>
	@b shoppingCart {
		min-height: 800px;
		@e content {
			@m title {}
		}
	}
</style>
