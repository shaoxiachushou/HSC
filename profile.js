// miniprogram/pages/profile/profie.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    psw:  ""
  },
  record_click:function(e){

wx.navigateTo({
  url: '/pages/profile/MP3/MP3',
  success: function(res) {},
  fail: function(res) {},
  complete: function(res) {},
})
  },
  onGotUserInfo: function(e){
    console.log(e);
  },
getphone:function(e){
  this.setData({
   phone: e.detail.value
   })
},

getpsw: function(e){
  this.setData({
    psw: e.detail.value
  })
},

register:function(){
  if(this.data.phone==""||this.data.psw=="")
  {
    wx.showToast({
      title: "手机或者密码为空",
      icon: 'none',
      image: '',
      duration: 1500,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
  else
  {
  db.collection("user").add({
    data:{
      phone:this.data.phone,
      psw: this.data.psw
    }
  }).then(res =>{
    wx.showToast({
      title: '注册成功',
      icon: '',
      image: '',
      duration: 1500,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }).catch(err =>{
    console.log("注册失败")
  })
  }
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