export default ()=>({
  title:"Download",
  src:"https://avatars.githubusercontent.com/u/76736117?v=4",
  name:"Download App",
  system:{
    /**
     * android  fa fa-android
     * ios  fa fa-apple
     * telegram fa fa-telegram
     */
    // 具体图标地址: http://www.fontawesome.com.cn/faicons/
    icon:"fa fa-android",
    description:"适用于Android设备",
    iconColor:"gray",
    descriptionColor:"gray"
  },
  // 二维码
  app:{
    url:"https://t.me/Global_FrontEndNP",
    size:150
  },
  // 安装
  download:{
    title:"安装",
    background:"#42B983",
    url:"https://github.com/nest/nest-simulator/archive/refs/tags/v3.3.zip"
  },
  // 举报
  report:{
    url:"https://t.me/Global_FrontEndNP",
    text:"举报该应用"
  },
  // 应用信息
  appInfo:{
    title:"应用信息",
    size:"10.1MB",
    date:"2022-09-23",
    edition:"1.0.1",
    developer:"Noi-q"
  },
  // 更新日志
  update:{
    title:"更新说明",
    content:[
      "修复了缓存产生的bug",
      "修复了app无法下载的bug",
      "优化了页面的体验"
    ]
  },
  // 历史版本
  version:{
    title:"历史版本",
    content:[
      {
        edition:"1.0.0(test)",
        date:"2022-01-02",
        url:"https://t.me/Global_FrontEndNP"
      },
      {
        edition:"1.0.0(test)",
        date:"2022-01-02",
        url:"https://t.me/Global_FrontEndNP"
      },
      {
        edition:"1.0.0(test)",
        date:"2022-01-02",
        url:"https://t.me/Global_FrontEndNP"
      }
    ]
  }
})