
<template>
   <transition name="fade">
    <div class="loli-popup" v-if="show">
       <div class="content">
           <div class="title"><b @click="closePupop"></b><h4>{{title}}</h4></div>
           <div>
                <slot></slot>
           </div>
       </div>
   </div>
   </transition>
</template>
<script>
export default {
  name:'loli-popup',
  methods:{
    closePupop:function(){
      this.$emit('update:change', false);
    }
  },
  props:{
    title:String,
    show:{ //是否关闭
      type:Boolean,
      default:true
    }
  }
};
</script>
<style lang='stylus' scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.disPopup
  display none 
.loli-popup
  position fixed 
  left 0 
  top 0 
  width 100% 
  height 100% 
  background  rgba(0, 0, 0, 0.5) 
  z-index 999
  .position-right
    position absolute 
    left 0 
    top 0
    width 100% 
    height 100%
    background-color #fff
  .content
    position absolute 
    top 50% 
    left 50% 
    width 335px 
    max-height 500px 
    transform translate(-50%,-50%) 
    background-color #fff 
    border-radius 5px 
    .title
      display flex 
      justify-content center 
      font-size 20px 
      text-align center 
      height 80px 
      line-height 100px 
      display relative 
      h4 
        max-width 220px 
        font-size 16px
        overflow hidden 
        text-overflow ellipsis 
        white-space nowrap 
      b
        position absolute 
        left 30px 
        top 30px 
        width 30px 
        height 30px 
        background url('../../assets/close.png') no-repeat center 
        background-size:cover
</style>


