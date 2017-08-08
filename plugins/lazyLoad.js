import Vue from 'vue'
import LazyLoad from 'vue-lazyload'
Vue.use(LazyLoad, {
  preLoad: 1.3,
  attempt: 1
})
