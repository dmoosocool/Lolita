<template>
<div id="outerBox">
  <div class="lolita-seletro-group">
    <h2 class="seletor-group-title">学历</h2>
    <div
      data-type='0'
      :class="['seletor-group-content',domViewData.name!=''?'':'placeholder']"
      :data-id="domViewData.code"
      @click="tapSeletor"
    >
      {{domViewData.name!='' ? domViewData.name:'请选择您的'+options.title}}
    </div>
    <Actionsheet
      :options="options"
      @comform="comformSure"
    />
    <Lolimask
      :isMaskShow="options.lvalue"
      :closeOnClickMask="options.closeOnClickMask"
      @clickMask="onClickMask"/>
  </div>
</div>
</template>
<script>
import Actionsheet from '../components/actionsheet/index.vue';
import Lolimask from '../components/actionsheet/mask.vue';
import DIC from  './DICdata.json';//字典数据
console.log(DIC);
export default {
  data(){
    return {
      domViewData:{
        code:'',
        name:'',
      },
      options:{
        title:'学历',
        type:'',//类型:单级选择，1:多级联动
        lvalue:false,//是否唤起组件,默认false隐藏
        closeOnClickMask:true,//点击遮罩层是否关闭组件
        selectData:{
          code:'',
          name:''
        },
        data:'',
      }
    };
  },
  components:{
    Actionsheet,
    Lolimask
  },
  methods:{
    tapSeletor(e){
      const type = e.target.dataset.type;
      this.options.type = type;
      this.options.data = DIC['type_'+type];
      this.options.lvalue = true;
    },
    comformSure(){
      if(this.options.selectData.code ==''|| this.options.selectData.name =='') {
        alert('请选择一项');
      }else {
        this.domViewData.name = this.options.selectData.name;
        this.domViewData.code = this.options.selectData.code;
        this.options.lvalue = false;
      }
    },
    onClickMask(){
      this.options.closeOnClickMask&&( this.options.lvalue = false);
    }

  },
  computed:{}
};
</script>
<style lang="stylus" scoped>
#outerBox
  margin-top 40px
.lolita-seletro-group
  padding 0 15px
.seletor-group-title
  font-size 15px
  opacity .3
  font-weight normal
.seletor-group-content
  height: 50px
  line-height: 50px
  font-size: 18px
  opacity: .9
  border-bottom: 1px solid #d1dfe9
.placeholder
  font-size: 14px
  color #999
</style>


