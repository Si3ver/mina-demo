class Http {
  request(params) {
    wx.request({
      url: params.url
    })
  }
}
