<template>

    <div class="nav">
        <div class="fixedTop"></div>
        <ul class="navList">
            <router-link :to="{path:'books'}" tag="li" exact>
                <a>
                    <i class="iconfont icon-tushu"></i>
                    <span>图书</span>
                </a>
            </router-link>
            <router-link :to="{path:'movies'}" tag="li">
                <a>
                    <i class="iconfont icon-movie"></i>
                    <span>电影</span>
                </a>
            </router-link>
            <router-link :to="{path:'music'}" tag="li">
                <a>
                    <i class="iconfont icon-music"></i>
                    <span>音乐</span>
                </a>
            </router-link>
            
        </ul>
    </div>

</template>

