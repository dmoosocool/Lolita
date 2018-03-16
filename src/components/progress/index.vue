<template>
  <div class="loli-progress">
    <div class="loli-progress-contral" :style="{width:dynamic+'%',backgroundColor:color}"></div>
  </div>
</template>
<script>
export default {
  name:'loli-progress',
  data(){
    return{
       
    };
  },
  methods:{
    
  },
  props:{
    dynamic:Number,
    color:{
      type:String,
      default:'#f69433'
    }
  }
};
</script>

<style lang="stylus" scoped> 
.loli-progress
  height 3px
  width 315px
  position relative 
  background #ebebeb
  overflow hidden
  &-contral
    position absolute 
    left 0
    top 0 
    height 100%
</style>


