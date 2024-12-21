Page({
  data: {
    title: '歇了么'
  },

  // 点击休息按钮
  onRestClick() {
    wx.navigateTo({
      url: '/pages/rest/rest'
    })
  }
})
