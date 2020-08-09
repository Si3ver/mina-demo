Component({
  properties: {
    index: {
      type: Number,
      observer: function (newVal) {
        const val = newVal < 10 ? '0' + newVal : newVal
        this.setData({
          _index: val
        })
      }
    }
  },
  data: {
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    _index: '',
    year: 0,
    month: '',
  },
  attached: function () {
    const date = new Date()
    const year = date.getFullYear()
    const month = this.data.months[date.getMonth()]
    this.setData({
      year,
      month,
    })
  },
  methods: {

  }
})
