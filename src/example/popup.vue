<template>
  <div>
    <loli-row>
      <loli-col :span=10 :offset=2><loli-button type="default" tag="button" size="large" @click="close">弹出组件</loli-button></loli-col>
      <loli-col :span=10 :offset=2><loli-button type="default" tag="button" size="large" @click="positionRight">从右边弹出</loli-button></loli-col>
    </loli-row>
    
    <loli-popup title="这是标题内容" :closePopup="closePopup1" :change.sync="closePopup1">
      <!--要插入的内容-->
      <div class="pupContent">
        <div v-for="(item,index) in bankList" :key="index">
          <i :style="{backgroundImage:`url(${item.url})`}"></i>
          <p>{{item.bankName}}</p>
        </div>
      </div>
      <!--要插入的内容-->
    </loli-popup>
      
    <transition name="fade">
      <div class="popupRight">
        <loli-popup position="right" v-show="true" :closePopup="closePopup2" :change.sync="closePopup2">
          <!--要插入的内容-->
          <loli-button type="default" tag="button" size="large" @click="positionRight">关闭弹窗</loli-button>
          <!--要插入的内容-->
        </loli-popup>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:'example-popup',
  data(){
    return{
      title:'这是标题的内容还',
      closePopup1:true,
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
      this.closePopup1 = !this.closePopup1;
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


