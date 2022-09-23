import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"
import {syncRoute} from "../config/syncRoute";
import Layout from "../layout/index.vue"



const defaultRoutes:RouteRecordRaw[] = [
  {
    path:"/",
    component:Layout,
    redirect:"/app",
    children:[
      {
        path:"/app",
        component:()=>import("../views/home/index.vue")
      }
    ]
  }
]


const router = createRouter({
  // history:createWebHistory("/download"),
  history:createWebHistory(),
  routes:[...defaultRoutes, ...syncRoute]
})

export default router

