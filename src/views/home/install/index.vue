<script lang="ts" setup>
import {useRoute} from 'vue-router'
import app from "@/config/app.config"
const route = useRoute()
const url:any = route.params.url
window.location.href = url
</script>

<template>
  <div class="title">
    <span>{{app().name}}</span>
  </div>
  <div class="tips">
    <span>下载时请勿离开页面 (如未自动安装，请手动安装) </span>
  </div>
</template>

<style lang="less" scoped>
  .title{
    display: flex;
    flex-direction: row;
    justify-content: center;
    span{
      font-size: 25px;
      font-weight: bolder;
    }
  }
  .tips{
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    span{
      font-size: 15px;
      color: #40BF77;
    }
  }
</style>