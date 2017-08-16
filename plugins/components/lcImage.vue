<<<<<<< HEAD
<template lang="html">
  <div class="lc-image" :style="getStyle" @click="handleClickImg" :class="{'is-round':shape==='round'}">
    <img class="ls-image--img" v-lazy="imgObj" :class="{'is-disabledHover':disabledHover}">
  </div>
</template>

<script>
import emitter from 'element-ui/lib/mixins/emitter'
const defaultUrl = require(`@/assets/img/default/changjia.png`)
export default {
  name: 'lcImage',
  mixin: [emitter],
  props: {
    src: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: defaultUrl
    },
    canView: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '160'
    },
    height: {
      type: String
    },
    shape: {
      type: String,
      default: 'square'
    },
    disabledHover: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    src(val) {
      this.dispatch('elFormItem', 'el.form.change', [val]);
    }
  },
  methods: {
    handleClickImg() {
      this.$emit('click');
    }
  },
  computed: {
    imgObj() {
      return {
        src: this.src,
        error: this.error
      }
    },
    getStyle() {
      if ((this.width && !this.height)) {
        return {
          'width': `${this.width}px`,
          'height': `${this.width}px`
        }
      }
      return {
        'width': `${this.width}px`,
        'height': `${this.height}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes imgfade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@component-namespace lc {
     @b image{
        color: $color-white;
        overflow: hidden;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        vertical-align: middle;
        @when round {
            border-radius: 50%;
        }
        @m img {
            max-width: 100%;
            min-height: 100%;
            vertical-align: middle;
            transition: all 0.3s;
            animation: imgfade 0.4s;
            &:hover {
                transform: scale(1.05);
            }
            @when round {
                border-radius: 50%;
            }
            @when disabledHover {
                &:hover {
                    transform: none;
                }
            }
        }
    }
}
</style>
=======
<template lang="html">
  <div class="lc-image" :style="getStyle" @click="handleClickImg" :class="{'is-round':shape==='round'}">
    <img class="ls-image--img" src="～@/assets/img/qrcode/app.png" :class="{'is-disabledHover':disabledHover}">
  </div>
</template>

<script>
// **********
// ** 用 法 **
// **********
// 1.正方形(400*400)图片 => 只需填width
// <ts-image width="400"></ts-image>
// 2.长方形(400*500)图片 =>
// <ts-image width="400" height="500"></ts-image>
// 3.如需自定义默认错误图片
// <ts-image width="400" error="require('xxx.png')"></ts-image>
// 4.如需点击查看大图（未做）
// <ts-image width="400" canView></ts-image>
// 5.圆图显示
// <ts-image width="400" shape="round"></ts-image>
import emitter from 'element-ui/lib/mixins/emitter'
const defaultUrl = `@/assets/img/default/changjia.png`
export default {
  name: 'lcImage',
  mixin: [emitter],
  props: {
    error: {
      type: String,
      default: defaultUrl
    },
    canView: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '160'
    },
    height: {
      type: String
    },
    shape: {
      type: String,
      default: 'square'
    },
    disabledHover: {
      type: Boolean,
      default: false
    },
    src: {
      type: String
    }
  },
  watch: {
    src(val) {
      this.dispatch('elFormItem', 'el.form.change', [val]);
    }
  },
  methods: {
    handleClickImg() {
      this.$emit('click');
    }
  },
  computed: {
    imgObj() {
      return {
        src: this.src,
        error: this.error
      }
    },
    getStyle() {
      if ((this.width && !this.height)) {
        return {
          'width': `${this.width}px`,
          'height': `${this.width}px`
        }
      }
      return {
        'width': `${this.width}px`,
        'height': `${this.height}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes imgfade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@component-namespace lc {
     @b image{
        color: $color-white;
        overflow: hidden;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        vertical-align: middle;
        @when round {
            border-radius: 50%;
        }
        @m img {
            max-width: 100%;
            min-height: 100%;
            vertical-align: middle;
            transition: all 0.3s;
            animation: imgfade 0.4s;
            &:hover {
                transform: scale(1.05);
            }
            @when round {
                border-radius: 50%;
            }
            @when disabledHover {
                &:hover {
                    transform: none;
                }
            }
        }
    }
}
</style>
>>>>>>> 5ad032fee8e25de0eeb06703ac3e729486074978
