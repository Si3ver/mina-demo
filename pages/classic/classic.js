import { ClassicModel } from '../../models/classic'
import { LikeModel } from '../../models/like'
const classicModel = new ClassicModel()
const likeModel = new LikeModel()

Component({
  properties: {

  },
  data: {
    classicData: {}
  },
  attached(options) {
    console.log('👉: attached -> options', options)
    classicModel.getLatest((classicData) => {
      this.setData({
        classicData
      })
    })
  },
  methods: {
    onLike: function(e) {
      console.log(e)
      const { behavior } = e.detail || {}
      likeModel.like(behavior, this.data.classicData.id, this.data.classicData.type)
    }
  }
})
