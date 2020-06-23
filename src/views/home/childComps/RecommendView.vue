<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommendInfo" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    data() {
      return {
        msg: "RecommendView"
      }
    },
    props:{
      recommendInfo:{
        type:Array,
        default(){
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    justify-content: space-around;
    text-align: center;
    width: 100%;
    font-size: 12px;
    padding: 10px  0 20px;
    border-bottom: 10px  solid  #ccc;
    border-top: 10px  solid  #ccc;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 70px;
    height: 65px;
    margin-bottom: 6px;
  }
</style>
