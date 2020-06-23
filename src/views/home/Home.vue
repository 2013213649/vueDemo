<template>
  <div id="home">
    <!--导航-->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!--轮播图-->
    <home-swiper :p-banners="banners"/>
    <!--简绍-->
    <recommend-view :recommendInfo="recommends"/>
  </div>
</template>

<script>
  import  NavBar from '@/components/common/navbar/NavBar'
  import  HomeSwiper from "./childComps/HomeSwiper"
  import  RecommendView from "./childComps/RecommendView"
  import {getHomeMultidata} from "@/network/home";
  export default {
    name: "Home",
    data() {
      return {
        msg: "Home",
        banners:[],
        recommends:[],
        dKeywords:[],
        keywords:[]
      }
    },
    created(){
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.dKeywords = res.data.dKeyword.list;
        this.keywords = res.data.keywords.list;
        this.recommends = res.data.recommend.list;
      })
    },
    components:{
      NavBar,
      HomeSwiper,
      RecommendView
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #f9f9f9;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>
