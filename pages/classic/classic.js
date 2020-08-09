import { Http } from '../../util/http.js'
const http = new Http()

Component({
  properties: {

  },
  data: {

  },
  attached(options) {
    console.log('👉: attached -> options', options)
    http.request({url: 'classic/latest', desc: '请求最新一期期刊', success: (data) => {
      console.log(data)
    }})
    http.request({url: 'classic/latest', desc: '重新请求最新一期期刊', success: (data) => {
      console.log(data)
    }})
  },
  methods: {
    
  }
})
