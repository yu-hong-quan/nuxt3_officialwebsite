// 指定页面路由拦截
export default defineNuxtRouteMiddleware((to,from)=>{
    console.log('被指定路由中间件的页面');
    
    
})