<script lang="ts" setup>

</script>

<template>
  <header>
    <img class="header-img" src="https://assets.pgyer.com/static/images/template/colorful/top_bg_mobile.png" alt="">
  </header>
  <main>
    <router-view/>
  </main>
</template>

<style lang="less" scoped>
  .header-img{
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
  }
  main{
    margin-top: 40px;
  }
</style>