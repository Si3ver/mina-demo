import {
  config
} from '../config.js'

const tips = {
  1: '服务器有点累，请等一会儿再试',
  1005: 'appkey无效，请前往www.7yue.pro申请',
  3000: '期刊不存在'
}
class Http {
  request(params) {
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method || 'GET',
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        console.log(`[API] ${params.url}`, res)
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          params.success(res.data)
        } else { // 服务器错误
          const { error_code = 1 } = res.data
          this._show_error(error_code)
        }
      },
      fail: (err) => { // 调用错误
        console.error(err)
        this._show_error(1)
      }
    })
  }
  _show_error (error_code) {
    let toastContent = error_code in tips ? tips[error_code] : tips[1]
    wx.showToast({
      title: toastContent,
      icon: 'none',
      duration: 2000,
    })
  }
}

export {
  Http
}
