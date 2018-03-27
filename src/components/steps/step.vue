<template>
   <div class="loli-steps">
     <div class="loli-step-line"><i v-if="stepLine" :class="['loli-step-line-'+lineColors]"></i></div>
     <div class="loli-step-circle" :class="['loli-step-circle-'+stepCircle]"><span class="icon anticon" :class="[!num?successOrfail?'icon-check':'icon-close':'']">{{num}}</span></div>
     <div class="loli-step-title">
        <h4>{{title}}</h4>
        <div class="loli-step-content">{{description}}</div>
     </div>
   </div>
</template>
<script>
export default {
  name:'loli-step',
  data(){
    return{
      num:1,
      currentStatus:false,
      stepLine:true,
      lineColors:'default',
      stepCircle:'default',
      successOrfail:''
    };
  },
  props:{
    title:String,
    description:String
  },
};
</script>
<style lang="stylus" scoped>
.loli-steps
  position relative
  width 360px
  height 80px
  display flex
  .loli-step-line
    position relative
    width 26px
    height 100%
    &-default 
      background-color #c0c4cc
    &-normal
      background-color #0469c8
    &-error
      background-color #ff3300
    i 
      position absolute 
      left 50%
      bottom 2px
      transform translateX(-50%)
      width 1px
      height 50px
  .loli-step-circle
    position absolute
    left 0
    top 0
    width 26px
    height 26px
    border-radius 50%
    border-width 1px
    border-style solid 
    &-default 
      border-color #c0c4cc
    &-normal
      border-color #0469c8
    &-error
      border-color #ff3300
    span 
      width 14px
      font-size 14px
      line-height 14px
      position absolute 
      left 50%
      top 50% 
      transform translate(-50%,-50%)
      text-align center 
      color #ccc
    .icon-check
      color #0469c8
    .icon-close
      color #ff3300
  .loli-step-title
    width 300px
    padding 4px 12px
    box-sizing border-box
    h4 
      font-size 15px
      overflow hidden 
      text-overflow ellipsis 
      white-space nowrap 
    .loli-step-content
      color #333
      padding-top 4px
</style>
