<template>
<div id="outerBox">
     <Actionsheet
      :options="options"
      @comform="comformSure"
    />

  <div class="lolita-seletro-group">
    <h2 class="seletor-group-title">学历</h2>
    <div
      data-title = '学历'
      data-type='0'
      :class="['seletor-group-content',viewData.edu.value!=''?'':'placeholder']"
      :data-id="viewData.edu.code"
      @click="tapSeletor"
    >
      {{viewData.edu.value!='' ? viewData.edu.value:'请选择您的学历'}}
    </div>
  </div>

  <div class="lolita-seletro-group">
    <h2 class="seletor-group-title">地址</h2>
    <div
      data-title = '地址'
      data-type='1'
      :class="['seletor-group-content',viewData.addr.length!=0?'':'placeholder']"
      :data-id="viewData.addr.code"
      @click="tapSeletor"
    >
      {{address!=''?address:'请选择您的地址'}}
    </div>
  </div>

</div>
</template>
<script>
import Actionsheet from '../components/actionsheet/index.vue';
import DIC from  './DICdata.json';//字典数据
export default {
  data(){
    return {
      viewData:{//页面展数据内容
        edu:{//学历
          code:'',
          value:''
        },
        addr:[],
      },
      options:{//组件参数
        title:'',
        type:'',//类型:单级选择，1:多级联动
        lvalue:false,//是否唤起组件,默认false隐藏
        closeOnClickMask:true,//点击遮罩层是否关闭组件
        xAxis:['省','市','区'],
        data:'',
      }
    };
  },
  components:{
    Actionsheet,
  },
  methods:{
    tapSeletor(e){
      const type = e.target.dataset.type;
      this.options.type = type;
      this.options.title = e.target.dataset.title;
      this.options.data = DIC['type_'+type];
      this.options.lvalue = true;
    },
    comformSure(res){
      if(res.type==0){
        switch(res.name){
        case '学历':
          this.viewData.edu=res;
          break;
        default:
          break;
        }
      }else {
        this.viewData.addr=res.resData;
        console.log(this.viewData.addr);
      }
      this.options.lvalue = false;
    },
    onClickMask(){
      this.options.closeOnClickMask&&( this.options.lvalue = false);
    }

  },
  computed:{
    address(){
      let addrTxt = '';
      for(let i=0;i< this.viewData.addr.length;i++){
        addrTxt +=this.viewData.addr[i].value;
      }
      return addrTxt;
    }
  }
};
</script>
<style lang="stylus" scoped>
#outerBox
  margin-top 40px
.lolita-seletro-group
  padding 0 15px
  margin-bottom 30px
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


