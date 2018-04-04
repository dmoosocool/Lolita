<template>
  <LayoutGroup
    :title="title?title:options.title"
    :isShow="options.isShowSeletor&&options.title==value.title"
    :activeItem="value"
    @showSeletor="openSeletor"
    @maskTap ="tapMaskClose"
  >
    <div slot="treeSelect">
      <transition name='showUp'>
        <div class='seletor-main' v-if="options.isShowSeletor&&options.title==value.title">
          <TabsHeader :title="title?title:options.title" @closeBtn="closeSeletor" @comformBtn="comformSeletor"/>
          <ItemList
          :options="options"
          :items="itemLitsDatas"
          :result="result"
          @itemtab="tabItem"
          @navTab ="navHasBeenTab"
          />
        </div>
      </transition>
    </div>
  </LayoutGroup>
</template>
<script>
import LayoutGroup from '../commont/layoutGroup';
import TabsHeader from '../commont/tabsHeader';
import ItemList from './mutilType';
export default {
  data(){
    return {
      value:{},
      result:{},
      actionLv:0,//多级联动层级，默认从第0级开始
    };
  },
  props:{
    options:{
      type:Object,
    },
    title:{
      type:String
    }
  },
  methods:{
    openSeletor(e){
      this.value.title = e.target.dataset.val;
      this.options.isShowSeletor = true;
      this.$emit('open',e);
    },
    tapMaskClose(){
      if(this.options.closeOnClickMask){
        this.closeSeletor();
      }
    },
    comformSeletor(){
      if (JSON.stringify(this.result) == '{}'||(this.result.resData.length!=this.actionLv+1))  {
        alert('请选择'+this.options.xAxis.join(''));
        return;
      }
      this.result.title = this.options.title;//选择的是什么项目，页面有多个下拉选择的情况可以用这个判断区分
      this.result.type = 1;//0单项1多级联动
      let resData = JSON.stringify({...this.result});//通过转换，不受vm绑定模式影响数据
      this.$emit('comform',JSON.parse(resData));//多级联动的result是双向绑定，在mutilType子组件内直接返回不用处理
      this.value = JSON.parse(resData);
      this.closeSeletor();

    },
    closeSeletor(){
      this.options.isShowSeletor = false;
      this.actionLv =0;
      this.isChangeVal = false;
      this.result = {};

    },
    tabItem(res){
      //最后一层不用加1了,否则上一层选择后，层级自动加一指向下一层
      this.actionLv<this.options.xAxis.length-1&&(this.actionLv =res.lv+1);
    },
    navHasBeenTab(lv){
      this.actionLv = lv;
    },
    computedItemsData(n){
      const self = this;
      let newObj = this.options.data;
      for(let i=0;i<n&&i<this.options.xAxis.length-1;i++){
        if(i==0){
          newObj = newObj.filter(function(item){
            return item.name == self.result.resData[i].value;
          });
        }else {
          newObj = newObj[0].data.filter(function(item){
            return item.name == self.result.resData[i].value;
          });
        }
      }
      return newObj;
    }
  },
  components:{
    LayoutGroup,
    TabsHeader,
    ItemList
  },
  computed:{
    itemLitsDatas(){
      const self = this;
      if(self.actionLv==0){
        return {
          data:this.options.data,
          lv:this.actionLv
        };
      }else {
        let newObj = self.computedItemsData(self.actionLv);
        if(newObj[0].data.toString()==''){//下一层数据为空,则停留在当层
          self.actionLv--;
          newObj =  self.actionLv!=0?( self.computedItemsData(self.actionLv)):self.options.data;
        }
        return {
          data: newObj[0].data.toString()==''?newObj:newObj[0].data,//如果下一层数据为空,则停留在当前层
          lv: self.actionLv
        };
      }
    }
  }
};
</script>
