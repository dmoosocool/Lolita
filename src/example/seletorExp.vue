<template>
<div id="example" style="margin-top:20px;">
  <loli-header fixed>
    <router-link :to="{path: '/'}" slot="left">返回</router-link>
    <span slot="title">Seletor - 选择器</span>
  </loli-header>

  <div class="lolita-seletro-group">
    <h2 class="seletor-group-title">学历</h2>
    <div
      :class="['seletor-group-content',dataList.domViewData.isPaint?'':'placeholder']"
      @click="tapSeletor"
    >
      {{dataList.domViewData.isPaint?dataList.domViewData.name:"请选择您的学历"}}
    </div>
    <Seletor :dataList="dataList"/>
  </div>
</div>
</template>
<script>
import Seletor from '../components/seletor/seletor.vue';
export default {
  data(){
    return {
      dataList:{
        title:'学历',
        data:[
          {code:'01',name:'高中'},
          {code:'02',name:'本科'},
          {code:'03',name:'专科'},
          {code:'04',name:'初中'},
          {code:'05',name:'硕士'},
          {code:'06',name:'博士'},
          {code:'07',name:'小学'},
          {code:'08',name:'其他'},

        ],
        isShowSeletor:false,
        isShowSeletorMain:false,
        domViewData:{
          isPaint:false,
          code:'',
          name:''
        },
        placeHolder:{
          flag:true,
          cont:'请选择您的学历'
        }
      }
    };
  },
  components:{
    Seletor
  },
  methods:{
    tapSeletor(){
      const self = this;
      self.dataList.isShowSeletor = true;
      setTimeout(function(){
        self.dataList.isShowSeletorMain = true;
      },20);
    }
  }
};
</script>
<style lang="stylus" scoped>
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


