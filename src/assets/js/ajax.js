
const Fly = require('flyio/dist/npm/wx')
const fly = new Fly()
const showToast = (tip = '数据加载中') => {
  wx.showLoading({
    title: tip
  })
}
function errorToast (e) {
  let info
  if (e.code) {
    info = '数据请求失败'
  } else {
    info = '请检查网络'
  }
  wx.showLoading({
    title: info
  })
}
const $ajax = {
  async get (obj, tag = true) {
    if (tag) {
      showToast()
    }
    try {
      let res = await fly.get(obj.url, obj.params = {})
      wx.hideLoading()
      res = res.data
      return new Promise((resolve, reject) => {
        if (res.code === 0 || res.stauts === true) {
          resolve(res)
        } else {
          resolve(res)
        }
      })
    } catch (err) {
      errorToast()
    }
  },
  async post (obj, tag = true) {
    if (tag) {
      showToast()
    }
    try {
      let res = await fly.post(obj.url, obj.params = {})
      wx.hideLoading()
      res = res.data
      return new Promise((resolve, reject) => {
        if (res.code === 0 || res.status === true) {
          resolve(res)
        } else {
          resolve(res)
        }
      })
    } catch (err) {
      errorToast()
    }
  }
}

export default $ajax
