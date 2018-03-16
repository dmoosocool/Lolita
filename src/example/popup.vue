<template>
  <div style="height:2000px;">
      <loli-button type="default" tag="button" size="large" @click="close">弹出组件</loli-button>
      <loli-popup :title="title" :list="bankList" :closePopup="closePopup" :change.sync="closePopup"></loli-popup>
  </div>
</template>

<script>
export default {
  name:'example-popup',
  data(){
    return{
      title:'这是标题的内容还',
      closePopup:true,
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
      this.closePopup = !this.closePopup;
    }
  },
};
</script>

<style lang='stylus' scoped>

</style>


