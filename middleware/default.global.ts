// 全局路由拦截中间件，文件名有global标识，Nuxt会将该文件设置为全局的
export default defineNuxtRouteMiddleware((to,from)=>{
    console.log('我从哪个页面来：',from);
    console.log('我要去的页面：',to);
    // 路由拦截
    if(to.path === '/getData'){
        abortNavigation();//停止跳转
        return navigateTo('/routeParams');//重定向指定页面
    }
})