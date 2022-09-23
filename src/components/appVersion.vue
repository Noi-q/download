<script lang="ts" setup>
import app from "@/config/app.config"
import {useRouter} from "vue-router";
const router = useRouter()

const download = (url: string)=>{
  router.push({
    name:"Install",
    params:{
      url:url
    }
  })
}
</script>

<template>
  <div class="appInfo">
    <span class="title">{{ app().version.title || null }}</span>
  </div>
  <div class="info">
    <ul>
      <li
        v-for="(item,index) in app().version.content || null"
        :key="index"
        :class="index%2 == 0 ? 'leson' : ''"
        @click="download(item.url)"
      >
        <span>{{item.edition}}</span>
        <span>{{item.date}}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.appInfo{
  .title{
    margin-left: 20px;
    font-weight: bolder;
    font-size: 25px;
  }
}
.info{
  margin-top: 20px;
  height: 270px;
  ul{
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    li{
      padding-left: 10px;
      padding-right: 10px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      span{
        width: 50%;
        height: 40px;
        text-align: center;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: gray;
        font-size: 15px;
      }
    }
  }
}
.leson{
  background-color: #eee;
}
</style>