<template>
    <div class="wrapper">
        <div class="searchBox">
            <form action="#" id="searchForm" onsubmit="return false">
                <input type="text" v-model="val" class="ipt" @keyup.enter="search" placeholder="书名、作者">
                <input type="button" class="subBtn" value="搜索"  @click.prevent="search">
            </form>
        </div>
        <!-- 展示图书信息 -->
        <div class="content">
            <!-- {{booksData}} -->
            <ul class="infoList">
                <!-- book就是每一本数 -->
                <li v-for="book in booksData.books" @click="showDetail(book)">
                    <!-- {{item}} -->
                    <div class="pic"><img :src="'https://images.weserv.nl/?url='+book.image"/></div>
                    <div class="pItem">
                        <h4 class="black" ref="catchYou">名称：{{book.title}}</h4>
                        <div class="tags">
                            <!-- 通过v-if控制循环次数 -->
                            <span v-for="tags,i in book.tags" v-if="i<=2">{{tags.name}}</span>
                        </div>
                        <p>作者：{{book.author[0]}}</p>
                        <p>评分：{{book.rating.average}}</p>
                        <div class="gray">时间：{{book.pubdate}}</div>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 这里显示详情页组件 -->
        <book-detail :listData="selectedBook" ref="bookCom"></book-detail>
    </div>
</template>

<script>
// 导入详情页的组件
import bdetail from '@/components/bookDetail'
export default {
    data(){
        return {
            val:"",
            count:10,
            booksData:{},
            selectedBook:{}
        }
    },
    methods:{
        search(){
            this.$http.jsonp('https://api.douban.com/v2/book/search?q='+this.val+'&count='+this.count+'&alt=xd',{ jsonp:"callback"}).then((res)=>{
            console.log(res.body);
            // 将获取的数据赋值给list,让数据响应式
            this.booksData=res.body;
            }).catch((res)=>{
                console.log("获取数据出错时");
            });
        },
        // 点击某一本书，将该本书的数据存储起来
        showDetail(book){
            this.selectedBook=book;
        // 拿到所有写了ref属性的标签元素对象
        // console.log(this.$refs.catchYou[0]);
            // 点击父级的li时，切换图书详情页的可见状态
            //通过$refs来访问子组件，既然拿到了子组件的实例，就可以访问该子组件的任何属性和方法
        //    console.log(this.$refs.bookCom)
        //  
           this.$refs.bookCom.isShow=true;
        }
    },
    components:{
        'book-detail':bdetail
    },
    created(){
        
        this.$http.jsonp('https://api.douban.com/v2/book/search?q=JavaScript&count='+this.count+'&alt=xd',{ jsonp:"callback"}).then((res)=>{
            console.log(res.body);
            // 将获取的数据赋值给list,让数据响应式
            this.booksData=res.body;
        }).catch((res)=>{
            console.log("获取数据出错时");
        });
    }
}    
</script>

<style scoped>

</style>
