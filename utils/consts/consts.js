export default Object.freeze({
  COMPANY: {
    name: '©福建省长乐市坐视布管网络科技有限公司',
    record: '闽ICP备14005607号-1'
  },
  // 阿里云OSS的DOMAIN
  ALI_DOMAIN: process.env.NODE_ENV === 'production'
    ? `http://zsbg.oss-cn-shenzhen.aliyuncs.com/`
    : `http://zsbg.oss-cn-shenzhen.aliyuncs.com/`,
  // AES加密密钥
  ECB_KEY: `zuoshibuguanzsbg`,
  // 高德地图KEY
  GAODE_MAP_KEY: `6d31eef168eeb05a84f0b1eeabb0de75`,
  TOEKN: 'x-token',
  // 模特
  MODEL: [
    'modle1_all.png',
    'modle1_back.png',
    'modle1_front.png',
    'modle1_side.png',
    'modle2_all.png',
    'modle2_back.png',
    'modle2_front.png',
    'modle2_side.png',
    'modle3_all.png',
    'modle3_back.png',
    'modle3_front.png',
    'modle3_side.png'
  ]
})
