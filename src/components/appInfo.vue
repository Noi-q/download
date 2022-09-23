<script lang="ts" setup>
import app from "@/config/app.config"
</script>

<template>
  <div class="appInfo">
    <span class="title">{{ app().appInfo.title || null }}</span>
  </div>
  <div class="info">
    <ul>
      <li>
        <span>大小</span>
        <span>{{app().appInfo.size || null}}</span>
      </li>
      <li>
        <span>更新时间</span>
        <span>{{app().appInfo.date || null}}</span>
      </li>
      <li>
        <span>版本</span>
        <span>{{app().appInfo.edition || null}}</span>
      </li>
      <li>
        <span>开发者</span>
        <span>{{app().appInfo.developer || null}}</span>
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
      justify-content: center;
      margin-left: 20px;
      width: 90%;
      li{
        display: flex;
        flex-direction: row;
        padding-bottom: 10px;
        padding-top: 10px;
        border-bottom: solid 1px #eee;

        span:nth-of-type(1){
          flex-grow: 9;
        }
        span:nth-of-type(2){
          flex-grow: 1;
        }
        span{
          color: gray;
          font-size: 15px;
        }
      }
    }
  }
</style>