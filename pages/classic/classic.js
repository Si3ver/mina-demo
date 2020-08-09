import { Http } from '../../util/http.js'
const http = new Http()

Component({
  properties: {

  },
  data: {

  },
  attached(options) {
    console.log('👉: attached -> options', options)
    http.request({url: 'classic/latest', success: (data) => {
      console.log(data)
    }})
  },
  methods: {
    
  }
})
