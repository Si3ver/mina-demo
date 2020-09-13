// pages/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    swiperOptions: {
      type: Object,
      value: {
        bannerHeight: 180,  // 图片高度(rpx)
        autoplay: true,     // 是否自动播放
        interval: 3000,     // 轮播间隔
        duration: 500,      // 每张停留时间
        circular: true,     // 是否首尾衔接
      },
    },
    bannerArea: {
      type: Array,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindChange(e) {
      console.log("👉: bindchange -> e", e)
      this.setData({
        swiperIndex: e.detail.current
      })
    },
    onClickBanner(e) {
      console.log("👉: onClickBanner -> e", e)
    },
  }
})
