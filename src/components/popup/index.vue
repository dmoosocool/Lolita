
<template>
    <div id="popup" :class="{disPopup:closePopup}">
       <div class="content">
           <div class="title"><b @click="closePupop"></b><h4>{{title}}</h4></div>
           <div class="pupContent">
                <div v-for="(item,index) in list" :key="index">
                  <i :style="{backgroundImage:`url(${item.url})`}"></i>
                  <p>{{item.bankName}}</p>
                </div>
           </div>
       </div>
   </div>
</template>
<script>
export default {
  name:'loli-popup',
  methods:{
    closePupop:function(){
      this.$emit('update:change', true);
    }
  },
  props:{
    title:String,
    list:Array, //列表数据
    closePopup:{ //是否关闭
      type:Boolean,
      default:true
    }
  }
};
</script>
<style lang='stylus' scoped>
.disPopup
  display none 
#popup
  position fixed 
  left 0 
  top 0 
  width 100% 
  height 100% 
  background  rgba(0, 0, 0, 0.2)  
  .content
    position absolute 
    top 50% 
    left 50% 
    width 335px 
    height 500px 
    transform translate(-50%,-50%) 
    background-color #fff 
    border-radius 5px 
    .title
      display flex 
      justify-content center 
      font-size 20px 
      text-align center 
      height 100px 
      line-height 100px 
      display relative 
      h4 
        max-width 220px 
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
    .pupContent
      display flex 
      justify-content center 
      align-items  center  
      flex-wrap wrap 
      padding 0 15px
      div
        height 40px 
        width 50% 
        display flex 
        justify-content center 
        align-items  center 
        position relative 
        i 
          margin-right 10px 
          background-size  3rem 9rem 
          width  33px 
          height  34px 
          background-position 0px 5px 
        p
          font-size 16px 
</style>


