
const Fly = require('flyio/dist/npm/wx')
const fly = new Fly()
fly.config.timeout = 5000
const showToast = (tip = '数据加载中') => {
  wx.showLoading({
    title: tip,
    mask: true
  })
}
function errorToast (title) {
  wx.stopPullDownRefresh()
  wx.showToast({
    title: title,
    icon: 'none',
    duration: 1500
  })
}
const $ajax = {
  async get (obj, tag = true) {
    if (tag) {
      wx.showNavigationBarLoading()
      showToast()
    }
    try {
      let res = await fly.get(obj.url, obj.params = {})
      wx.hideLoading()
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
      return new Promise((resolve, reject) => {
        if (res.status === 200) {
          if (res.data.status === true) {
            resolve(res.data)
          } else {
            reject(res.data)
            errorToast(res.data.message)
          }
        } else {
          errorToast('数据请求失败')
        }
      })
    } catch (err) {
      errorToast('数据请求失败')
    }
  },
  async post (obj, tag = true) {
    if (tag) {
      showToast()
    }
    try {
      let res = await fly.post(obj.url, obj.params = {})
      wx.hideLoading()
      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
      res = res.data
      return new Promise((resolve, reject) => {
        if (res.status === 200) {
          if (res.data.status === true) {
            resolve(res.data)
          } else {
            reject(res.data)
            errorToast(res.data.message)
          }
        } else {
          errorToast('数据请求失败')
        }
      })
    } catch (err) {
      errorToast('数据请求失败')
    }
  }
}

export default $ajax
