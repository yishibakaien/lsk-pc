export default Object.freeze({
  // 阿里云OSS的DOMAIN
  ALI_DOMAIN: process.env.NODE_ENV === 'production'
    ? `http://zsbg.oss-cn-shenzhen.aliyuncs.com/`
    : `http://zsbg.oss-cn-shenzhen.aliyuncs.com/`,
  // AES加密密钥
  ECB_KEY: `zuoshibuguanzsbg`,
  // 高德地图KEY
  GAODE_MAP_KEY: `6d31eef168eeb05a84f0b1eeabb0de75`,
  TOEKN: 'x-token'
})
