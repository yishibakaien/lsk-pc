/**
 * =======
 * 过 滤 器
 * =======
 */
import Vue from 'vue'
// ======================
/**
 * 自定义时间
 * @param  {[type]} item [description]
 * @return {[type]}      [description]
 */
export const customTime = item => {
  if (!item) {
    return ''
  }
  // =======now
  let nowTime = new Date().getTime()
  let minuteTime = 60 * 1000
  let hourTime = 60 * minuteTime
  let dayTime = 24 * hourTime
  let monthTime = dayTime * 30
  let yearTime = monthTime * 12
  // =======history
  let publish = new Date(item)
  let publishTime = publish.getTime()
  let date = publish.getDate() < 9
    ? `0${publish.getDate() + 1}`
    : publish.getDate() + 1
  let year = publish.getFullYear()
  let month = publish.getMonth() < 9
    ? `0${publish.getMonth() + 1}`
    : publish.getMonth() + 1
  let historyTime = parseInt(nowTime) - parseInt(publishTime)
  let descTime
  if (historyTime >= yearTime) {
    // 按年算
    descTime = `${year}-${month}-${date}`
  } else if (historyTime < yearTime && historyTime >= monthTime) {
    // 按月算
    descTime = `${month}-${date}`
  } else if (historyTime < monthTime && historyTime >= dayTime) {
    // 按天算
    descTime = parseInt(historyTime / dayTime) + '天前'
  } else if (historyTime < dayTime && historyTime >= hourTime) {
    // 按小时算
    descTime = parseInt(historyTime / hourTime) + '小时前'
  } else if (historyTime < hourTime && historyTime >= minuteTime) {
    // 按分钟算
    descTime = parseInt(historyTime / minuteTime) + '分钟前'
  } else {
    descTime = '刚刚'
  }
  return descTime
}
/**
 * 日期格式化
 * @param  {[type]} timestamp [description]
 * @return {[type]}           [description]
 */
export const dateFormat = timestamp => {
  let date = new Date(timestamp)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10
    ? '0' + (date.getMonth() + 1)
    : date.getMonth() + 1) + '-'
  let D = (date.getDate() < 10
    ? '0' + (date.getDate())
    : date.getDate())

  return Y + M + D
}
/* 针对字典的过滤
规定字典格式：
  是否有库存
  isStock: [
    {
      label: '需要开机',
      value: '0'
    }, {
      label: '有库存',
      value: '1'
    }
  ], */
export const filterDict = (val, $arr, label = 'name') => {
  try {
    if (!val) {
      return val
    }
    let filter = $arr.filter(item => item.dicValue.toString() === val.toString())
    return filter[0][label]
  } catch (e) {}
}
// ======================
const filters = {
  dateFormat,
  filterDict,
  customTime
}
// ======================
export default filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
