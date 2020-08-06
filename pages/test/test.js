// pages/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad(options) {
      console.log("👉: onLoad -> options", options);
      wx.lin.showLoading({
        type: "flash",
        fullScreen: true,
      });
      setTimeout(() => {
        wx.lin.hideLoading();
      }, 2000);
    },
  },
});
