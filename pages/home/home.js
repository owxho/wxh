// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  jumpcomment(e){
    //跳转：关闭并且跳转
    // wx.redirectTo({
    //   url: '/pages/comment/comment',
    // })
    //获取电影的id
    //e时间对象 ;target 触发事件元素 button
    //dataset所有自定义属性
    var id=e.target.dataset.movieid;
    //跳转：保留并且跳转
    wx.navigateTo({
      url: '/pages/comment/comment?id='+id,
    })
  },
  loadMore(){
    //1.调用云函数
    wx.cloud.callFunction({
      name: "movielist",
      data: {
        start: this.data.list.length,
        count: 10
      }
    }).then(res => {
      var res = JSON.parse(res.result);
      console.log(res.subjects)
      this.setData({
        list:this.data.list.concat(res.subjects)
      })
    }).catch(err => {
      console.log(err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.调用云函数
    this.loadMore();
    //2.将云函数返回的电影列表保存
    //3.显示当前组件
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})