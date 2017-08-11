import Vue from 'vue'
import lcImage from './lcImage.vue'
import lcTitleBlock from './lcTitleBlock.vue'
import lcUpload from './lcUpload.vue'
// =================================
const Components = {
  lcImage,
  lcTitleBlock,
  lcUpload
}
for (let i in Components) {
  Vue.component(i, Components[i])
}
