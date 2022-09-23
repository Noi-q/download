import http from "../plugins/axios";

export function test(data:any){
  return http.get("/test",data)
}