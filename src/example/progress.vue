<template>
   <div class="progress">
    <div class="progress-title">进度条</div>
    <ul v-for="(item,idx) in 10" :key="idx">
      <div class="progress-title">{{(idx+1)*10}}</div>
       <loli-progress :dynamic="(idx+1)*10"></loli-progress>
    </ul>
   </div>
</template>
<script>
export default {
  name:'example-progress',
  data(){
    return{
      
    };
  }
};
</script>
<style lang="stylus" scoped>
.progress
  padding 0 40px
  &-title 
    font-size 16px
    height 50px
    line-height 60px
</style>


