<template lang="html">
  <section>
    <!-- <dress></dress> -->
  </section>
</template>

<script>
// import Dress from '@/components/page/dress/Dress'
import {
  MODELS
} from '@/utils/consts/consts'
import {
  _fixType,
  saveFile
} from '@/utils/utils'
import html2canvas from 'html2canvas'
const TYPE = 'png';
export default {
  components:{
    // Dress
  },
  methods: {
    // 保存图片
    handleSavePic() {
      console.log('正在保存图片');
      html2canvas(this.$refs.picOrigin, {
        useCORS: true,
        onrendered: function(canvas) {
          var imgData = canvas.toDataURL(TYPE)
          // 1.加工image data，替换mime type
          imgData = imgData.replace(_fixType(TYPE), 'image/octet-stream')
          // 2.下载后的问题名
          var filename = 'models_' + (new Date()).getTime() + '.' + TYPE
          // 3.下载
          saveFile(imgData, filename)
        }
      });
    },
  }
}
</script>

<style lang="css">
</style>
