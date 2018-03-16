<template>

  <div :class="['seletor-box',isShowSeletor?'seletor-on':'seletor-off']">
    <div class="mask"></div>
    <transition name="showUp">
      <div :class="['seletor-main',isShowSeletorMain?'slideUp':'slideDown']">
        <Seletornav :title="title" @closeBtn="closeSeletor" @comformBtn="comformSeletor"/>
        <Seletoritem :dataList="dataList" @tabs = "seletorItemsTap"/>
      </div>
    </transition>
  </div>

</template>
<script>
import Seletornav from './seletorNav.vue';
import Seletoritem from './seletorItems.vue';

export default {
  data(){
    return {
      title:'学历',
      dataList:[
        {code:'01',name:'高中'},
        {code:'02',name:'本科'},
        {code:'03',name:'专科'},
        {code:'04',name:'初中'},
        {code:'05',name:'硕士'},
        {code:'06',name:'博士'},
        {code:'07',name:'小学'},
        {code:'08',name:'其他'},

      ],
      isShowSeletor:true,
      isShowSeletorMain:true,
      domViewData:{
        isPaint:false,
        code:'',
        name:''
      }
    };
  },
  components: {
    Seletornav,
    Seletoritem
  },
  methods:{
    closeSeletor(){
      const self = this;
      self.isShowSeletorMain = false;
      setTimeout(function(){
        self.isShowSeletor = false;
      },500);
    },
    comformSeletor(){
      const self = this;
      if(self.domViewData.code!=''&&self.domViewData.name!=''){
        self.domViewData.isPaint = true;
        self.isShowSeletorMain = false;
        setTimeout(function(){
          self.isShowSeletor = false;
        },500);
      }else {
        alert('请选择一项');
      }
    },
    seletorItemsTap(e){
      this.domViewData.code = e.target.dataset.id;
      this.domViewData.name = e.target.innerText;
    }
  },

};
</script>
<style lang="stylus" scoped>
  .seletor-box
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
  .seletor-main
    position: fixed
    width: 100%
    bottom: 0
    transform translateY(100%)
    z-index: 101
    min-height: 2.7rem
    max-height: 60%
    background-color: #fcfcfc
    transition transform .5s
    // animation: lichSelMove .4s;
    // -webkit-animation: lichSelMove .4s;
  .mask
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    z-index: 100;
  .seletor-on
    display block

  .seletor-off
    display none
  .slideUp
    transform translateY(0)
  .slideDown
    transform translateY(100%)

</style>

