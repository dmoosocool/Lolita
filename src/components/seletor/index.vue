<template>
  <LayoutGroup
    :title="title?title:options.title"
    :isShow="options.isShowSeletor&&options.title==value.title"
    :activeItem="value"
    @showSeletor="openSeletor"
    @maskTap ="tapMaskClose"
  >
    <div slot="tabSeletor">
      <transition name='showUp'>
        <div class='seletor-main' v-if='options.isShowSeletor&&options.title==value.title' >
          <TabsHeader :title="title?title:options.title" @closeBtn="closeSeletor" @comformBtn="comformSeletor"/>
          <Items :datas="options.data" @tabs = "seletorItemsTap"/>
        </div>
      </transition>
    </div>
  </LayoutGroup>
</template>
<script>
import LayoutGroup from '../commont/layoutGroup';
import TabsHeader from '../commont/tabsHeader';
import Items from './seletorItems.vue';
export default {
  data(){
    return {
      chocess:{},
      value:{},
      isChangeVal:false,
    };
  },
  methods:{
    openSeletor(e){
      this.value.title = e.target.dataset.val;
      this.options.isShowSeletor = true;
      this.$emit('open',e);
    },
    closeSeletor(){
      this.options.isShowSeletor = false;
      this.isChangeVal = false;
    },
    comformSeletor(){
      if(this.isChangeVal){
        this.value = {
          type:0,//0单项1多级联动
          code:this.chocess.code,
          name:this.chocess.name
        };
        this.options.isShowSeletor = false;
        this.isChangeVal = false;
      }else {
        alert('请选择一项');
      }
      this.$emit('onSelect',{...this.value});
    },
    seletorItemsTap(e){
      this.chocess = {
        code:e.target.dataset.id,
        name:e.target.innerText
      };
    },
    tapMaskClose(){
      if(this.options.closeOnClickMask){
        this.closeSeletor();
      }
    },
  },
  props:{
    options:{
      type:Object,
      required:true
    },
    title:{
      type:String,
    }
  },
  components:{
    LayoutGroup,
    TabsHeader,
    Items,
  },
  watch:{
    chocess:{
      handler(newValue, oldValue) {
        this.isChangeVal = true;
      },
      deep: true
    }
  }
};
</script>

<style lang="stylus" scoped>


</style>
