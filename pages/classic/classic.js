import { ClassicModel } from '../../models/classic'
const classic = new ClassicModel()

Component({
  properties: {

  },
  data: {
    classicData: {}
  },
  attached(options) {
    console.log('👉: attached -> options', options)
    classic.getLatest((classicData) => {
      this.setData({
        classicData
      })
    })
  },
  methods: {
    
  }
})
