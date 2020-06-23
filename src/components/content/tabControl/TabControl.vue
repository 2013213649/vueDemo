<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="item" class="tab-control-item" :class="{activeItem:index===currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        msg: "TabControl",
        currentIndex:0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 15px;

  }
  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .activeItem{
    color: var(--color-high-text);
  }
  .activeItem span{
    border-bottom: 3px solid var(--color-high-text);
  }

</style>
