<template>
<div class="oss-file">
  <input type="file" ref="upload" accept="image/png,image/jpeg,image/bmp,image/jpg" :multiple="multiple" @change="doUpload" />
</div>
</template>
<script>
// 获取文件名不带后缀
function getFileName(o) {
  var pos = o.lastIndexOf('.');
  return o.substring(pos, 0);
}
import {
  OSS_Token
} from '@/services/util';
export default {
  /**
   * multiple 是否多选
   * id ID
   * fileType 上传的文件类型___-1：默认目录；0：常用；1：头像(个人、公司 包括banner)；2：相册(企业风采，素材库)；3：花型图片         ；4：供应和求购； 101：首页banner；102：新闻；103：广告(不定期更新)
   * maxNum 上传最大数量
   * maxSize 上传每个文件大小限制
   */
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    fileType: [String, Number],
    maxNum: Number,
    maxSize: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      dir: '',
      region: 'oss-cn-shenzhen',
      url: []
    };
  },
  methods: {
    /**
     * [UUID]
     */
    uuidMethod() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },
    /**
     * 上传文件
     * @param  {[type]} target [原生事件]
     */
    doUpload(e) {
      const files = this.$refs.upload
      // 文件总数量
      const fileLen = files.files;
      // 1.上传数量最大值
      if (this.maxNum && fileLen.length > this.maxNum) {
        this.$message({
          type: 'error',
          message: `最多只能上传${this.maxNum}张图片`
        });
        e.target.value = '';
        return;
      }
      for (let i = 0; i < fileLen.length; i++) {
        let file = fileLen[i];
        // 2.图片大小限制
        let size = Math.round(file.size / 1024 / 1024);
        if (size > this.maxSize) {
          this.$message({
            type: 'error',
            message: `图片大小请限制在${this.maxSize}MB以内`
          });
          e.target.value = '';
          return;
        }
      };
      // 3.OSS token
      OSS_Token(this.fileType).then((res) => {
        let data = res.data.data;
        let arr = [];
        this.dir = data.dir;
        this.url = [];
        if (fileLen.length > 0) {
          const client = new OSS.Wrapper({
            region: _.region,
            secure: true,
            accessKeyId: data.accessKeyId,
            accessKeySecret: data.accessKeySecret,
            stsToken: data.securityToken,
            bucket: data.bucket
          });
          this.$emit('begin');
          for (let i = 0; i < fileLen.length; i++) {
            let file = fileLen[i];
            // KEY
            let storeAs = this.dir + 'web-' + _.uuidMethod().split('-').join('') + '.' + file.name.split('.')[file.name.split('.').length - 1];
            arr.push(new Promise((resolve, reject) => {
              //1 上传图片=>oss
              client.multipartUpload(storeAs, file, {}).then((results) => {
                //2 本地图片
                //=> 获取大小size,名字name,图片base64
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                  this.url.push({
                    size: file.size,
                    name: (getFileName(file.name)).substring(29, 0),
                    result: e.target.result,
                    storeAs: storeAs
                  });
                  resolve(this.url);
                };
              }).catch((err) => {
                console.log(err);
              });
            }));
          }
          Promise.all(arr).then(urls => {
            e.target.value = '';
            this.$emit('doUpload', urls[urls.length - 1]);
          });
        }
      }).catch();
    }
  }
};
</script>
<style type="text/css" scoped>
.oss-file {
  float: left;
}

.oss-file input {
  position: absolute;
  opacity: 0;
  filter: alpha(opacity=0);
}
</style>
