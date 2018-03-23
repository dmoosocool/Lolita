<template>
  <div>
    <loli-row>
      <loli-col :span=10 :offset=4><loli-button type="default" tag="button" size="large" @click="close">弹出组件</loli-button></loli-col></loli-row>
    
    <loli-popup title="这是标题内容" :show="show" :change.sync="show">
      <!--要插入的内容-->
      <div class="pupContent">
        <div v-for="(item,index) in bankList" :key="index">
          <i :style="{backgroundImage:`url(${item.url})`}"></i>
          <p>{{item.bankName}}</p>
        </div>
      </div>
      <!--要插入的内容-->
    </loli-popup>
  </div>
</template>

<script>
export default {
  name:'example-popup',
  data(){
    return{
      title:'这是标题的内容还',
      show:false,
      closePopup2:true,
      bankList:[{
        url:require('../assets/bank_list.png'),
        bankName:'农业银行'
      },{
        url:require('../assets/bank_list.png'),
        bankName:'建设银行'
      },{
        url:require('../assets/bank_list.png'),
        bankName:'建设银行'
      },{
        url:require('../assets/bank_list.png'),
        bankName:'建设银行'
      },{
        url:require('../assets/bank_list.png'),
        bankName:'建设银行'
      },{
        url:require('../assets/bank_list.png'),
        bankName:'建设银行'
      },{
        url:require('../assets/bank_list.png'),
        bankName:'建设银行'
      },{
        url:require('../assets/bank_list.png'),
        bankName:'建设银行'
      }]
    }; 
  }, 
  methods:{
    close:function(){
      this.show = !this.show;
    },
    positionRight:function(){
      this.closePopup2 = !this.closePopup2;
    }
  },
};
</script>

<style lang='stylus' scoped>
.popupRight
  &.fade-enter-active, &.fade-leave-active
    transition: all 1s ease     
  &.fade-enter, &.fade-leave-active
    opacity: 0 
.pupContent
  height 420px
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
    float left
    i 
      margin-right 10px 
      background-size  3rem 8.9rem 
      width  33px 
      height  34px 
      background-position -1px -32px 
    p
      font-size 16px 
</style>


