<template lang="html">

  <el-button type="primary" :disabled="disabled" @click="handleRun">{{text}}</el-button>
</template>

<script>
export default {
	data() {
		return {
			time: 0
		}
	},
	props: {
		second: {
			type: Number,
			default: 10
		}
	},
	computed: {
		text() {
			return this.time > 0 ? this.time + 's 后重获取' : '获取验证码'
		},
		disabled() {
			return this.time > 0
		}
	},
	beforeDestroy() {
		clearInterval(this.timer)
	},
	methods: {
		timer() {
			if (this.time > 0) {
				this.time --;
				setTimeout(this.timer, 1000)
			} else {
				clearTimeout(this.timer)
			}
		},
		handleRun() {
			this.time = this.second
			this.timer()
			this.$emit('click')
		}
	}
}
</script>

<style lang="css">
</style>
