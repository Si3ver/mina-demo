// pages/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    bannerArea1: [
      {
        imgUrl: '/assets/images/carousel/banner1.png',
        navigator: {
          target: 'miniProgram',
          openType: 'navigate',
          version: 'release',
          appId: 'wx0a65aee066fbece0',
          path: 'packageOneclickBind/pages/oneclick/index',
          // url: '',
          // extraData: '',
        },
      },
      {
        imgUrl: '/assets/images/carousel/banner2.png',
        navigator: {
          openType: 'navigate',
          url: '/pages/my/my',
        },
      },
      {
        imgUrl: '/assets/images/carousel/banner3.png',
        navigator: {
          openType: 'switchTab',
          url: '/pages/classic/classic',
        },
      },
    ],
    swiperOptions1: {
      bannerHeight: 180,
      autoplay: true,
      interval: 3000,
      duration: 500,
      circular: true,
    },
    bannerArea2: [
      {
        imgUrl: '/assets/images/carousel/banner.png',
        navigator: {
          navigator: {
            openType: 'redirect',
            url: '/pages/my/my',
          },
        },
      },
    ],
    swiperOptions2: {
      bannerHeight: 180,
      autoplay: false,
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})
