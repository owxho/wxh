// pages/comment/comment.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieid:0,
    detail:{},
    score: 3,
    content:"",
    images:[],//保存用户选中的图片
    fileIds:[]
  },
  submit(){
    //1.上传9张图片
    wx.showLoading({
      title: '评论中',
    });
    //1.1上传图片到云存储
    //1.2创建promise数组
    let promiseArr=[];
    //1.3创建循环9次
    for(let i=0;i<this.data.images.length;i++){
    //1.4创建promise push数组中
      promiseArr.push(new Promise((reslove,reject)=>{
    //1.5获取当前上传图片
    var item=this.data.images[i];
    //1.6创建正则表达式拆分文件后缀 .jpg  .png
    let suffix=/\.\w+$/.exec(item)[0];
    //1.7上传图片
    wx.cloud.uploadFile({
      cloudPath:new Date().getTime()+suffix,//上传至云端的路径
      filePath:item,//小程序临时路径
      success:res=>{
        console.log(res.fileID)
        var ids = this.data.fileIds.concat(res.fileID)
        this.setData({
          fileIds:ids
        })
         //1.8上传成功后将当前云存储fileID保存数组
          //1.9追加任务列表
        reslove();
      },
      fail:err=>{
        console.log(err);
      }
    })
    //1.9.1失败显示出错信息
      }));
    }
    //2.一次性将图片的fileID保存到集合中
    Promise.all(promiseArr).then(res=>{
      //2.添加数据
      db.collection("comment").add({
        data:{
          content:this.data.content,//评论内容
          score:this.data.score,//评论分数
          movieid:this.data.movieid,//电影id
          fileIds:this.data.fileIds//上传图片id
        }
      }).then(res=>{
        wx.hideLoading();//隐藏加载框
        wx.showToast({//显示提示框
          title: '评价成功',
        })
      }).catch(err=>{
        console.log(err)
        wx.hideLoading();
        wx.showToast({
          title:'评价失败',
        })
      })
    })
  },
  oncontentChange(e){
    this.setData({
      content:e.detail
    })
  },
  onscoreChange(e) {
    this.setData({
      score: e.detail
    });
  },
  uploadimg(){
    //选中图片9张
    wx.chooseImage({
      count:9,
      sizeType:["original","compressed"],
      sourceType:["album","camera"],
      success: res=>{
      const tempFiles=res.tempFilePaths;
        //预览,将用户选中的图片保存到数组里面
        this.setData({
          images: tempFiles
        })
       
      },
    }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.接受电影列表传递的参数id并且保存到data
    // console.log(options.id)
    this.setData({
      movieid:options.id
    })
    //2.提示数据加载的框
    wx.showLoading({
      title: '加载中',
    })
    //3.调用云函数，将电影传递云函数
    wx.cloud.callFunction({
      name:"getdetail",
      data:{movieid:options.id}//参数
    }).then(res=>{
      //4.获取云函数返回数据并且保存到data
      // console.log(res.result);
      //将字符串保存到data中
      var obj=JSON.parse(res.result);
      this.setData({
        detail:obj
      })
    //5.隐藏加载框
    wx.hideLoading()
    }).catch(err=>{
      wx.hideLoading()
    })

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