import { config } from '../config.js'
import logger from './logger'

const tips = {
  1: '服务器有点晕儿，请等一会儿再试',
  1005: 'appkey无效，请前往www.7yue.pro申请',
  3000: '期刊不存在'
}
class Http {
  constructor () {
    this.rid = 0
  }
  request(params) {
    let rid = this.rid++
    const { url, method = 'GET', desc = '', data = {} } = params
    logger.logRequest({cgi: {method, desc, url}, params: data, rid})
    wx.request({
      url: config.api_base_url + url,
      method,
      data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          logger.logResponse({cgi: {method, desc, url}, params: data, data: res.data, rid})
          params.success(res.data)
        } else {
          logger.logErrorResponse({cgi: {method, desc, url}, params: data, data: res.data, rid})
          const { error_code = 1 } = res.data
          this._show_error(error_code)
        }
      },
      fail: (err) => {
        logger.logErrorResponse({cgi: {method, desc, url}, params: data, data: err, rid})
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
