<script lang="ts" setup>
import {useRouter} from "vue-router"
import {useLocalStore} from "../../pinia";
import app from "@/config/app.config"
import QrcodeVue from "qrcode.vue";
import AppInfo from "@/components/appInfo.vue"
import AppUpdate from "@/components/appUpdate.vue"
import AppVersion from "@/components/appVersion.vue"

const localStore = useLocalStore()
const router = useRouter()

const download = (url: string)=>{
  router.push({
    name:"Install",
    params:{
      url:url
    }
  })
}
console.error(localStore.info)
</script>

<template>
  <div class="home">
    <div class="logo">
      <img :src="app().src" alt="">
    </div>
    <div class="name">
      <span>{{ app().name }}</span>
    </div>
    <div class="system">
      <i :style="{color: app().system.iconColor}" :class="app().system.icon"></i>
      <span :style="{color: app().system.descriptionColor}">&nbsp;{{ app().system.description }}</span>
    </div>
    <div class="QR-Code">
      <qrcode-vue :value="app().app.url" :size="app().app.size"></qrcode-vue>
    </div>
    <div class="download">
      <button :style="{backgroundColor:app().download.background}" @click="download(app().download.url)">{{ app().download.title }}</button>
    </div>
    <div class="report">
      <a :href="app().report.url">{{ app().report.text }}</a>
    </div>
    <hr class="hr-clear">
    <div class="info">
      <app-info></app-info>
    </div>
    <hr class="hr-clear">
    <div class="update">
      <app-update></app-update>
    </div>
    <hr class="hr-clear">
    <div class="version">
      <app-version></app-version>
    </div>
    <hr class="hr-clear">
  </div>
</template>

<style lang="less" scoped>
  .home{
    width: 100%;
    height: 100%;
    .logo{
      display: flex;
      flex-direction: row;
      justify-content: center;
      img{
        width: 5rem;
        height: 5rem;
        box-shadow: 0 0 5px #888888;
        border-radius: 10px;
      }
    }
    .name{
      height: 90px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      span{
        align-self: flex-end;
        font-weight: 800;
        font-size: 25px;
      }
    }
    .system{
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .QR-Code{
      margin-top: 3rem;
      height: 150px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .download{
      margin-top: 2.5rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      button{
        padding:10px;
        width: 200px;
        //padding-left: 50px;
        //padding-right: 50px;
        border: none;
        color: white;
        background-color: #42B983;
        border-radius: 30px;
        font-size: 20px;
        outline: none;
      }
    }
    .report{
      margin-top: 1.5rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      a {
        text-decoration: none;
        color: orange;
        font-size: 15px;
        border-bottom: solid 1px orange;
      }
    }
    .hr-clear{
      width: 90%;
      margin: 0 auto;
      margin-top: 2rem;
      margin-bottom: 2rem;
      border: solid .5px #eee;
    }
  }
</style>