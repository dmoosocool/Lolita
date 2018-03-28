<template>
<div>
  <loli-header>
      <router-link to="/" slot="left">返回</router-link>
      <span slot="title"></span>
  </loli-header>
    <loli-seletor :options="options" @onSelect="selectedValue" @open="openSelector" title="学历" />
    <loli-seletor :options="options" @onSelect="selectedValue" @open="openSelector" title="职业" />
  </div>
</template>
<script>
import DICData from './DICdata.json';
export default {
  data(){
    return {
      value:{},
      options:{
        title:'',
        data:[],
        isShowSeletor:false,
        closeOnClickMask:true,
        placeHolder:{
          flag:true,
          cont:'请选择您的学历'
        },
      }
    };
  },
  methods:{
    selectedValue(res){
      console.log({...res});
    },
    openSelector(e){
      const val = e.target.dataset.val;
      this.options.title = val;
      switch(val){
      case '学历':
        this.options.data = DICData.edu;
        break;
      case '职业':
        this.options.data = DICData.job;
        break;
      default:
        break;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>

</style>


