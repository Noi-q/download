<script lang="ts" setup>
import app from "@/config/app.config"
</script>

<template>
  <div class="appInfo">
    <span class="title">{{ app().update.title || null }}</span>
  </div>
  <div class="info">
    <ul>
      <li v-for="(item,index) in app().update.content || null" :key="index">
        <span>{{item || null}}</span>
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
  height: 270px;
  margin-top: 20px;
  ul{
    display: flex;
    flex-direction: column;
    //justify-content: center;
    flex-wrap: wrap;
    margin-left: 20px;
    width: 90%;
    li{
      width: 100%;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      line-height: 20px;
      span{
        color: gray;
        font-size: 15px;
      }
    }
  }
}
</style>