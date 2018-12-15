<template>
    <div id="app">

        <!-- 显示路由匹配的那个组件的窗口 -->
        <!-- 默认组件 -->

        <router-view></router-view>
        <!-- 显示导航组件 -->
        <v-nav></v-nav>
    </div>
</template>

<script>
// 将头部组件导入进来
import nav from '@/components/nav'
export default {
    data(){
        return{
            msg:"Hello,Vue!全家桶工具",
            // home:"/"
            list:{}
        }
    },
    components:{
        "v-nav":nav
    },
    // 通过created钩子函数在DOM没渲染完成之前去取数据，避免数据没准备好导致报错
    // created(){
    //     // 通过vue-resource加载ajax数据
    //     // vue-resource的用法
    //     //语法：获取jsonpthis.$http.jsonp(url,{params: {pageID:29},jsonp:"callback"})
    //     // 参数：{params: {pageID:29},jsonp:"callback"} 会拼接到url上
    //     //获取本地数据：https://github.com/pagekit/vue-resource
    //     // 语法： this.$http.get('/someUrl').then(response => {
    //     //     this.someData = response.body;
    //     // }, response => {
    //     //     // error callback
    //     // });
    //     // }
    //     this.$http.jsonp('https://api.douban.com/v2/book/search?q=JavaScript&count=10&alt=xd',{ jsonp:"callback"}).then((res)=>{
    //         console.log(res.body);
    //         // 将获取的数据赋值给list,让数据响应式
    //         this.list=res.body;
    //     }).catch((res)=>{
    //         console.log("获取数据出错时");
    //     });
    // }
}
</script>

<style>
    #app{
        /* color:red */
    }
</style>
