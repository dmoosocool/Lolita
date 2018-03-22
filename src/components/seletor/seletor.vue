<template>

  <div :class="['seletor-box',dataList.isShowSeletor?'seletor-on':'seletor-off']">
    <div class="mask"></div>
    <transition name="showUp">
      <div :class="['seletor-main',dataList.isShowSeletorMain?'slideUp':'slideDown']">
        <Seletornav :title="dataList.title" @closeBtn="closeSeletor" @comformBtn="comformSeletor"/>
        <Seletoritem :dataList="dataList.data" @tabs = "seletorItemsTap"/>
      </div>
    </transition>
  </div>

</template>
<script>
import Seletornav from './seletorNav.vue';
import Seletoritem from './seletorItems.vue';

export default {
  props:{
    dataList:{
      type:Object,
      required:true
    }
  },
  components: {
    Seletornav,
    Seletoritem
  },
  methods:{
    closeSeletor(){
      const self = this;
      self.dataList.isShowSeletorMain = false;
      setTimeout(function(){
        self.dataList.isShowSeletor = false;
      },200);
    },
    comformSeletor(){
      const self = this;
      if(self.dataList.domViewData.code!=''&&self.dataList.domViewData.name!=''){
        self.dataList.domViewData.isPaint = true;
        self.dataList.isShowSeletorMain = false;
        setTimeout(function(){
          self.dataList.isShowSeletor = false;
        },200);
      }else {
        alert('请选择一项');
      }
    },
    seletorItemsTap(e){
      this.dataList.domViewData.code = e.target.dataset.id;
      this.dataList.domViewData.name = e.target.innerText;
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
    transition transform .2s ease-out
    // animation: lichSelMove .4s;
    // -webkit-animation: lichSelMove .4s;
  .mask
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0,0,0,.7)
    z-index: 100
    transition background .2s easy-out
  .seletor-on
    display block

  .seletor-off
    display none
  .slideUp
    transform translateY(0)
  .slideDown
    transform translateY(100%)
  .showUp-enter,
  .showUp-enter-active
    transform: translate3d(0, 100%, 0);

</style>

