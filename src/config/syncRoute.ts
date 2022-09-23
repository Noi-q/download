import {RouteRecordRaw} from "vue-router"
import Layout from "@/layout/index.vue"
export const syncRoute:RouteRecordRaw[] = [
  {
    path:"/app/install",
    component:Layout,
    children:[
      {
        name:"Install",
        path:"/app/install/:url",
        component:()=>import("@/views/home/install/index.vue")
      }
    ]
  }
]