# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).


# 配置化的修改下载页面src/config/app.config.ts文件

```TypeScript


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
```
