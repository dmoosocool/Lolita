<template>
   <div class="loli-step-inside">
      <div class="loli-step-left">
        <div v-if="stepLine" class="loli-step-line" :class="'loli-step-line-'+[colors ? 'normal' : 'color']"></div>
        <div class="step-icon" :class="'step-icon-'+[currentStatus ? 'show' : 'hide']" ><i :class="{'sucess':currentStatus}">{{num}}</i></div>
      </div>
      <div class="loli-step-right">{{title}}</div>
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
      colors:false
    };
  },
  props:{
    title:String,
    // colors:{
    //   type:String,
    //   default:'color'
    // },
  },
};
</script>
<style lang="stylus" scoped>
.loli-step-inside
  width 100%
  display flex
  .loli-step-left
    width 8%
    height 100%
    display flex
    justify-content center
    align-items center
    position relative
    .loli-step-line
      width 2px
      height 140px
      &-color 
        background-color #c0c4cc
      &-normal
        background-color #0469c8
    .step-icon
      position absolute
      height 24px
      width 24px
      border-width 1px
      border-style solid 
      border-radius 50%
      left 1px
      top 0
      background #fff
      z-index 99
      &-show
        border-color #0469c8
      &-hide 
        border-color #dcdfe6
      i 
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%) 
        width 14px
        height 14px
        font-style normal
        text-align center
        font-size 16px
        opacity .7
      .sucess
        background url('../../assets/icon_success.png') no-repeat center 
  .loli-step-right
    font-size 16px
    padding 6px 4px
</style>
