// pages/home/mysug/mysug.js
var app = getApp();
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    rows: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e) {
    const _ = app.globalData.db.command
    console.log('app.globalData.userInfo._openid', app.globalData.userInfo._openid)
    app.globalData.db.collection('qyzx_texts').where({
      // gt 方法用于指定一个 "大于" 条件，此处 _.eq()是获取与其相等的项
      _openid: _.eq(app.globalData.openid),
      deleted: false
    })
      .get().then(res => {
        this.setData({
          rows: res.data,
        });
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})