<template lang="html">
  <div class="lc-image" :style="getStyle" @click="handleClickImg" :class="{'is-overhidden':showOriginPic,'is-round':shape==='round'}">
    <img class="ls-image--img" v-lazy="imgObj" :class="{'is-view':showOriginPic,'is-disabledHover':disabledHover}">
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    },
    error: {
      type: String,
      default: 'https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png'
    },
    canView: {
      type: Boolean,
      default: true
    },
    height: String,
    width: String,
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
    handleImg() {
      this.$emit('click');
    }
  },
  computed: {
    imgObj() {
      return {
        src: this.src,
        error: this.error
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
        @when overhidden {
            overflow: auto;
        }
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
