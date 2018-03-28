<template>
<div>
    <loli-header>
      <router-link to="/" slot="left">返回</router-link>
      <span slot="title"></span>
  </loli-header>
   <loli-tree-selector title="地址" :options="options" @comform="comformSelected"  @open="openTreeSelector"/>
   <loli-tree-selector title="营业部" :options="options" @comfrom="comformSelected" @open="openTreeSelector"/>
 </div>
</template>
<script>
import DIC from './DICdata.json';
export default {
  data(){
    return {
      options:{
        title:'',
        type:'',//类型:单级选择，1:多级联动
        lvalue:false,
        xAxis:[],
        data:'',
        isShowSeletor:false,//是否唤起组件,默认false隐藏
        closeOnClickMask:true,//点击遮罩层是否关闭组件
      }
    };
  },
  methods:{
    openTreeSelector(e){
      const val = e.target.dataset.val;
      this.options.title = val;
      switch(val){
      case '地址':
        this.options.data = DIC.addr;
        this.options.xAxis=['省','市','区'];
        break;
      case '营业部':
        this.options.xAxis=['省','营业部'];
        this.options.data = DIC.addr;
        break;
      default:
        break;
      }
    },
    comformSelected(res){
      console.log(res);
    }

  }
};
</script>
