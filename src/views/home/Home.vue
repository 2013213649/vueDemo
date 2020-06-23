<template>
  <div id="home">
    <!--导航-->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <!--<scroll class="content"-->
            <!--ref="scroll"-->
            <!--:probe-type="3"-->
            <!--@scroll="contentScroll"-->
            <!--:pull-up-load="true"-->
            <!--@pullingUp="loadMore"/>-->
    <!--轮播图-->
    <home-swiper :pBanners="banners"/>

    <!--简绍-->
    <recommend-view :recommendInfo="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']"/>
  </div>
</template>

<script>

  import  HomeSwiper from "./childComps/HomeSwiper"
  import  RecommendView from "./childComps/RecommendView"
  import  FeatureView from "./childComps/FeatureView"

  import  NavBar from '@/components/common/navbar/NavBar'
  // import  Scroll from '@/components/common/scroll/Scroll'
  import  TabControl from "@/components/content/tabControl/TabControl"

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
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      // Scroll
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
