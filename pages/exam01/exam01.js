// pages/exam01/exam01.js
//env添加的环境的id
const db=wx.cloud.database({
  env:'web-test-01-ggk7c'
});
Page({
  data: {
  },
insert(){
  db.collection("webwx04").add({
    data:{
      name:"tom",
      age:12
    }
  }).then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
},
select(){
  db.collection("webwx04").get().then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
},
upload(){
  wx.chooseImage({
    count:1,
    sizeType:['original','compressed'],
    sourceType:['album','camera'],//图片的来源 相册 相机
    success: function(res) {
      var file=res.tempFilePaths[0];
      //上传图片
      wx.cloud.uploadFile({
        //新图片名称
        cloudPath:new Date().getTime()+".jpg",
        //选中图片
        filePath:file,
        success:res=>{
          //云存储的图片路径
          console.log(res.fileID);
        }
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