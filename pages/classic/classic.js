import { ClassicModel } from '../../models/classic'
import { LikeModel } from '../../models/like'
const classicModel = new ClassicModel()
const likeModel = new LikeModel()

Component({
  properties: {

  },
  data: {
    classicData: {},
    latest: true,
    first: false,
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
    },

    onNext: function (event) {
      console.log('👉: event', event)
      this._updateClassic('next')
    },

    onPrevious: function (event) {
      console.log('👉: event', event)
      this._updateClassic('previous')
    },

    _updateClassic: function (nextOrPrevious) {
      const { index } = this.data.classicData || {}
      console.log('👉: nextOrPrevious', nextOrPrevious)
      console.log('👉: index', index)
    },
  }
})
