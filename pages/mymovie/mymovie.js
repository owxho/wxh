// pages/mymovie/mymovie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'',
    image:{}//保存选中的图片
  },
  submit(){
    //1.提示加载框
    //2.获取留言的内容
    //3.获取图片
    //4.创建正则表达式摘取文件扩展名
    //5.上传图片
    //5.1上传成功
    //5.2获取fileID
    //5.3向集合添加纪录
    //5.4失败
  },
  oncontentChange:function(event){
  this.setData({
    content:event.detail
  })
  },
  upload(){
    wx.chooseImage({
      count:1,
      sizeType:["original","compressed"],
      sourceType:["album","camera"],
      success:res=>{
        var file=res.tempFilePaths[0];
        console.log(file)
        this.setData({
          image:file
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})