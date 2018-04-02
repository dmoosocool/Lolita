<template>
  <div class="seletor-nav">
    <span class="sel-clostBtn" @click="seletorClose"><i class="icon anticon icon-close"></i></span>
    <span class="sel-comform" @click="seletorComform">确定</span>
    <div class="sel-title">请选择{{title}}</div>
  </div>
</template>
<script>
export default {
  props:{
    title:{
      type:String,
      required:true
    }
  },
  methods:{
    seletorClose(){
      this.$emit('closeBtn');
    },
    seletorComform(){
      this.$emit('comformBtn');
    },
  }
};
</script>
<style lang="stylus" scoped>
  .seletor-nav
    position relative
    height 50px
    padding 0 5%
    & span
      display block
      font-size 16px
      opacity .8
      position absolute
      box-sizing border-box
  .sel-clostBtn
      width 30px
      height 30px
      top 5px
      left 3%
      &>i
        display block
        width 12px
        height 12px
        margin 9px 0 0 9px
        font-size 20px
        // background url(../../assets/xIcon.png) center center
        // background-size 100%
  .sel-comform
    top: 3px
    right: 0
    padding: 10px 5% 10px 10px
  .sel-title
    position absolute
    top 0
    left 0
    z-index -2
    text-align center
    line-height 42px
    font-size 15px
    width:100%
</style>
