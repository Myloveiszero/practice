// miniprogram/pages/index/index.js
const DB = wx.cloud.database().collection("userInfo");
Page({
  addInfo() {
    DB.add({
      data: {
        name: "Jury",
        age: 18
      },
      success(res) {
        console.log("添加成功", res)
      },
      fail(res) {
        console.log("添加失败", res)
      }
    })
  }

})