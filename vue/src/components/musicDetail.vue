<template>
    <transition name="move">
    <div class="bDetails details" v-show="isShow">
       <!-- 顶栏 -->
       <div class="topBar white">
           <span @click="isShow=false"><i class="iconfont icon-left"></i>音乐</span>
           <h2>{{listData.title}}</h2>
       </div>
       <!--内容主体  -->
       <div class="post">
           <!-- {{listData}} -->
           <!-- 图书信息 -->
           <div class="infoList clearfix">
               <div class="pic"><img :src="'https://images.weserv.nl/?url='+listData.image"/></div>
               <div class="pItem">
                   <h4 class="black cutFont"><span>名称：{{listData.title}}</span> <div class="tags">
                       <span v-for="tags,i in listData.tags" v-if="i<=2">{{tags.name}}</span>
                   </div></h4>
                   <!-- 从父级传过来的数据假设层级过多，可能会引发错误，可通过循再生成第三级 -->
                   <p>作者：<span>{{listData.author[0].name}}&nbsp;</span></p>
                   <p v-for="attrs,o in listData.attrs" v-if='o<2'>发布商：{{listData.attrs.publisher[0]}}</p>
                   <div>时间：{{listData.attrs.pubdate[0]}}</div>
                   <p>评分：<span v-for="avg,keys in listData.rating" v-if='keys=="average"'>{{avg}}</span></p>
               </div>
           </div>
           <section class="postTxt">
           <!-- 图书序言：对应catlog数据 -->
               <h3>简介 :</h3>
               <div class="txj" >
                   <p v-html="listData.catalog"></p>
               </div>
               <!-- 简介：对应的是summary数据部分 -->
               <h3>内容 :</h3>
               <div class="txj" >
                   <p v-html="listData.summary"></p>
               </div>
           </section>
       </div>
   </div>
    </transition>   
</template>

<script>
export default {
    data(){
        return {
            isShow:false
        }
    },
    props:{
        // 对从父级传过来的数据进行一个类型的验证，确保是我需要的
        // 方式1：listData:Object
        listData:{
            type:Object
        }
    }
    // props:['listData']
}
</script>


<style lang="less" scoped>
.tags{float:left}
.black>span{float:left}
@red:red;
@fl:left;
.details{
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0.88rem;
    overflow-y:scroll;
    z-index: 30;
    background-color: #fff;
    transition: all 0.3s linear;
    &.move-enter,&.move-leave{
        transform: translate(0,0);
    }
    &.move-enter-active,&.move-leave-active{
        transform: translate(100%,0);
    }
    .topBar{
        background-color: #3CA2FF;
        height: 0.7rem;
        line-height: 0.7rem;
        padding-left: 0.1rem;
        overflow: hidden;
        position: relative;
        span{
                font-size: 0.26rem;
                position: absolute;
                top: 0;
                left: 0.1rem;
                width: 1.5rem;
                i{
                    vertical-align: -1px;
                }
        }
        h2{
            font-size: 0.32rem;
            text-align: center;
            font-weight: 400
        }
    }
}
// 内容主体
.post{
    padding: 0.1rem;
    .infoList{
        height: 2.7rem;
        padding-bottom: 0.2rem;
        overflow: hidden;
        border-bottom: 1px solid #ddd;
        .pic{
            width: 1.65rem;
            height: 2.45rem;
        }
        .pItem{
            width: 4.25rem;
        }
    }
}
// 内容文字
.postTxt{
    font-size: 0.2rem;
    padding: 0.2rem 0;
    h3{
        font-size: 0.24rem;
        text-align: center;
        padding-top: 0.1rem;
        border-bottom: 1px dashed #ddd;
        padding-bottom: 0.1rem;
        margin-bottom: 0.1rem;
        text-align:left;
    }
    p{
        text-indent: 2em;
    }
}
</style>