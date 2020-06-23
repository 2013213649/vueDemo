<template>
  <div>
    <div class="tab-bar-item" @click="clickLink">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data() {
      return {
        msg: "TabBarItem"
      }
    },
    props:{
      path:{
        type:String
      },
      activeColor:{
        type:String,
        default:'red'
      }
    },
    computed:{
      isActive(){
        // console.log("this.$route.path --> " + this.$route.path);
        //$route选中的是活跃对象
        return this.$route.path.indexOf(this.path) !== -1
      },
      //动态绑定样式
      activeStyle(){
        return this.isActive ? {color:this.activeColor}:{}
      }
    },
    methods:{
      clickLink(){
        // console.log(this.path);
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
