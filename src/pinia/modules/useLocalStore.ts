import { defineStore } from "pinia"

export const useLocalStore = defineStore("local", {
  state(){
    return {
      info: "欢迎使用download，开源地址:https://github.com/Noi-q/download"
    }
  },
  actions:{}
})