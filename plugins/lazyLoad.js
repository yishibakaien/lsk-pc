import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '~assets/default/morenhuaxing.png',
  attempt: 1
})
