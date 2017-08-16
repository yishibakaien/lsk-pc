<template lang="html">
  <div class="dress-wrapper">
    <el-row :gutter="15">
      <el-col :span="16">
        <el-card>
          <div slot="header" class="dress-wrapper--header">
            <h1>3D试衣</h1>
            <div>
              <el-button  @click="handleDIYClothes" :disabled="!Pic.uploadPic">版衣定制</el-button>
              <el-button type="primary" @click="handleSavePic" :disabled="!Pic.uploadPic">保存图片</el-button>
            </div>
          </div>
            <img v-lazy="Pic.origin" crossOrigin="anonymous" ref="picOrigin" class="dress-wrapper--img" :style="{'background-image':`url(${Pic.uploadPic})`,'background-size':`${ratio/4}%`}">
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div slot="header" class="dress-wrapper--header">
            <h1>花型预览</h1>
            <label v-if="!$slots.uploadBtn">
              <i class="el-icon-upload dress-upload--icon"></i>
              <input type="file" accept="image/jpeg,image/jpg,image/png"  name="file" value="" @change="handleUpload" v-show="false">
            </label>
            <slot name="uploadBtn"></slot>
          </div>
          <!-- 上传区域 -->
          <div class="dress-upload">
            <div class="dress-upload__zoom">
              <p @click="handleZoom('+')"><i class="el-icon-plus"></i></p>
              <p @click="handleZoom('-')"><i class="el-icon-minus"></i></p>
            </div>
            <div class="dress-upload__img" :style="{'background-image':`url(${Pic.uploadPic})`,'background-size':`${ratio}%`}">
            </div>
            <p class="dress-upload--text" v-if="hasUploadPic">请先上传花型图片</p>
          </div>
          <slot name="productMenu"></slot>
        </el-card>
        <br/>
        <el-row>
        <el-col :span="8" v-for="(item, index) in MODELS" :key="item" class="dress-model">
          <el-card>
            <img @click="handleViewModels(item,index)" v-lazy="`${MODEL_THUMBNAIL_DOMAIN}${item}`"  width="88" height="100" class="dress-model--img">
          </el-card>
        </el-col>
      </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  _fixType,
  saveFile,
  convertImgToBase64
} from '@/utils/utils'
import DICT from '@/utils/consts/consts'
import html2canvas from 'html2canvas'
const MODEL_THUMBNAIL_DOMAIN = '/img/models_prototype/'
const MODEL_ORIGIN_DOMAIN = '/img/models/'
const TYPE = 'png';
const SESSION = 'design-clothes';
export default {
  data() {
    return {
      MODELS: DICT.MODEL,
      MODEL_THUMBNAIL_DOMAIN: MODEL_THUMBNAIL_DOMAIN,
      MODEL_ORIGIN_DOMAIN: MODEL_ORIGIN_DOMAIN,
      url: '',
      ratio: 100,
      Pic: {
        // 缩略图
        thumbnail: '',
        // 模特的序号
        activeIndex: '',
        // 原图
        origin: '',
        // 上传的图片
        uploadPic: ''
      }
    };
  },
  created() {
    this.Pic.activeIndex = 0;
  },
  // props: ['chooseItem'],
  mounted() {
    // 默认取第一张
    // this.url = window.sessionStorage['flowerUrl'];
  },
  mounted() {
    this.Pic.activeIndex = 0;
    if (this.url) {
      let img = this.url.indexOf('?') >= 0 ? this.url.split('?')[0] : this.url;
        convertImgToBase64(img, base64Img => {
          this.Pic.uploadPic = base64Img;
        });
    }
  },
  beforeDestroy() {
    // window.sessionStorage.removeItem('flowerUrl');
  },
  watch: {
    Pic: {
      handler(val) {
        val.origin = MODEL_ORIGIN_DOMAIN + this.MODELS[val.activeIndex];
        val.thumbnail = MODEL_THUMBNAIL_DOMAIN + this.MODELS[val.activeIndex];
      },
      deep: true
    }
    // chooseItem(val) {
    //   this.Pic.uploadPic = val;
    // }
  },
  computed: {
    hasUploadPic() {
      return !this.Pic.uploadPic;
    }
  },
  methods: {
    // HTML2TOCANVAS
    handleHtmlToCanvas(img, callback) {
      let self = this;
      console.log('正在保存图片');
      html2canvas(img, {
        useCORS: true,
        onrendered: function(canvas) {
          var imgData = canvas.toDataURL(TYPE);
          callback(imgData);
        }
      });
    },
    // 保存图片
    handleSavePic() {
      this.handleHtmlToCanvas(this.$refs.picOrigin, (data) => {
        // 1.加工image data，替换mime type
        let imgData = data.replace(_fixType(TYPE), 'image/octet-stream')
        // 2.下载后的问题名
        let filename = 'models_' + (new Date()).getTime() + '.' + TYPE
        // 3.下载
        saveFile(imgData, filename);
      })
    },
    // 版衣定制
    handleDIYClothes() {
      this.handleHtmlToCanvas(this.$refs.picOrigin, (data) => {
        sessionStorage[SESSION] = data;
      });
    },
    // 上传花型
    handleUpload(event) {
      let self = this;
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        self.Pic.uploadPic = this.result;
      };
    },
    // 花型放大&缩小
    handleZoom(type) {
      this.ratio = type === '+' ? this.ratio + (++this.ratio) / 10 : this.ratio - (this.ratio--) / 10;
    },
    // 对话框-----选择花型
    handleViewModels(item, index) {
      this.Pic.origin = MODEL_ORIGIN_DOMAIN + item;
      this.Pic.activeIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
@component-namespace dress {
     @b wrapper{
        @m header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        @m img {
            transition: 0.8s;
        }
    }
    @b model {
        transition: 0.8s;
        &:hover {
            box-shadow: 0 2px 4px 0 $color-light-primary, 0 0 6px 0 $color-light-primary;
        }
    }
    @b upload {
        min-height: 300px;
        box-sizing: border-box;
        padding-left: 50px;
        position: relative;
        @e img {
            width: 280px;
            height: 280px;
            overflow: hidden;
            transition: all 0.8s;
        }
        @e img {
            size: 280px;
            overflow: hidden;
            transition: all 0.8s;
        }
        @m icon {
            font-size: 20px;
            padding-right: 10px;
            cursor: pointer;
        }
        @m text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            color: grey;
        }
        @e zoom {
            position: absolute 4px 10px;
            p {
                border: 1px solid $color-grey-4;
                size: 24px;
                cursor: pointer;
                text-align: center;
                margin-bottom: 10px;
                transition: 0.8s;
                &:hover {
                    border-color: $color-primary;
                    color: $color-primary;
                }
            }
        }
    }
}
</style>
