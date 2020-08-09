import {
  HTTP
} from '../util/http'

class ClassicModel extends HTTP {
  getLatest(sCallBack) {
    this.request({
      url: 'classic/latest',
      desc: '请求最新一期期刊',
      success: (data) => {
        sCallBack(data)
      }
    })
  }
}

export {
  ClassicModel
}
