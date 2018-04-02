<template>
  <div class="loli-mulitil-container">
    <div class="loli-tabs">
      <span
      v-for="(ax,idx) in options.xAxis"
      :key="idx"
      :class="titleCls(idx)"
      @click="navTabsEvent" :data-lv='idx'
      >
        {{titleTabViewTxt(idx)}}
      </span>
    </div>
    <div class="loli-multil-items">
      <span
      v-for="item in items.data"
      :key = item.code
      :data-val="item.name"
      :data-id="item.code"
      :data-lv="items.lv"
      @click="itemsTabEvent"
      >{{item.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      tabsList:[{//用户记录tabs 选项的激活或选中状态
        flag:1,//0|1,val=''&&flag=1时激活状态active；val=''&&flag=0,隐藏状态；val=!'',显示单没active状态
        val:''
      }]
    };
  },
  props:{
    options:{
      type:Object,
      require:true
    },
    items:{
      type:Object
    },
    result:{
      type:Object
    }

  },
  beforeMount(){//beforeMount 挂载开始之前被调用，轮询有多少层（最多四层）
    for(var i=1;i<this.options.xAxis.length;i++){
      this.tabsList.push({flag:0,val:''});
    }
  },
  methods:{
    navTabsEvent(e){
      const tg = e.target;
      const lv = tg.dataset.lv*1;
      this.tabsList[lv].flag=1;
      this.tabsList[lv].val = '';
      for(var i=0;i<this.tabsList.length;i++){
        if(i>lv){//点标题时，后面层级的标题隐藏
          this.tabsList[i].val = '';
          this.tabsList[i].flag = 0;
        }
      }
      this.currentSeletItems();
      this.$emit('navTab',lv);
    },
    itemsTabEvent(e){
      const tg = e.target;
      const idx = tg.dataset.lv*1;
      const tgTxt = tg.innerText;
      this.tabsList[idx].val=tg.innerText;
      this.tabsList[idx].code=tg.dataset.id;
      this.tabsList[idx].noNxet = false;
      this.$emit('itemtab',{lv:idx,el:e});
      let nextLvData = this.items.data.filter(function(v,i){
        return v.name == tgTxt;
      });
      if(idx==this.tabsList.length-1||(idx<this.tabsList.length-1 && nextLvData[0].data.toString()=='' )){//最后一项或下一才呢过 不用替换标题
        const siblings = tg.parentNode.childNodes;
        for(let i=0;i<siblings.length;i++){//相邻兄弟元素去掉选中状态
          if(siblings[i].nodeName=='SPAN'){
            siblings[i].className = '';
          }
        }
        (idx<this.tabsList.length-1 && nextLvData[0].data.toString()=='')&&( this.tabsList[idx].noNxet = true);
        tg.className='items-active';//
      }else {
        this.tabsList[idx+1].flag=1;//头部的下一个tab按钮激活状态
      }
      this.currentSeletItems();
    },
    titleCls(i){
      // idx!=options.xAxis.length-1?(tabsList[idx].val?'':tabsList[idx].flag?'tabs-active':'tabs-off'):(tabsList[idx].flag?'tabs-active':'tabs-off')
      let cls = '';
      if(i!=this.options.xAxis.length-1){
        if(this.tabsList[i].val&&!this.tabsList[i].noNxet){
          cls='';
        }else if((this.tabsList[i].val&&this.tabsList[i].noNxet)||this.tabsList[i].flag){
          cls = 'tabs-active';
        }else {
          cls = 'tabs-off';
        }
        // cls = this.tabsList[i].val?'':this.tabsList[i].flag?'tabs-active':'tabs-off';
        // cls=(this.tabsList[i].val && this.tabsList[i].noNxet)?'':this.tabsList[i].flag?'tabs-active':'tabs-off';
      }else {
        cls = this.tabsList[i].flag?'tabs-active':'tabs-off';
      }
      return cls;
    },
    titleTabViewTxt(i){
      let txt = this.options.xAxis[i];
      i<this.tabsList.length-1 && !this.tabsList[i].noNxet&& this.tabsList[i].val!=''&& (txt = this.tabsList[i].val);
      return txt;
    },
    currentSeletItems(){//每操作一次都计算已选项的结果
      this.result.resData = [];
      for(let i=0;i<this.tabsList.length;i++){
        if(this.tabsList[i].val!=''){
          this.result.resData.push({
            value:this.tabsList[i].val,
            code:this.tabsList[i].code
          });
        }else {//只要有没值 停止后面的遍历
          continue;
        }
      }
    },
  }
};
</script>
<style lang="stylus" scoped>
.loli-tabs
  padding-left: 5%
  height: 31px
  border-bottom: 1px solid #EBF0F4;/*no*/
  & span
    font-size: 15px
    height: 31px
    display: inline-block
    font-weight: bold
    &:not(:last-child)
      margin-right: 10px
    &.tabs-active
      border-bottom: 2px solid #F69433
      color: #0469c8
    &.tabs-off
      display none
.loli-multil-items
  height: 220px
  overflow-y: scroll
  font-size: 15px
  overflow-scrolling: touch
  padding-bottom: 40px
  & span
    padding: 0 5%
    display: block
    height: 38px
    line-height: 38px
    position: relative
    &.items-active
      color: #0469c8
      background-color: #E2EDF6
      &:after
        display: block
        content: ''
        box-sizing: border-box
        width: 6px
        height: 12px
        border-color: #0469c8
        -webkit-transform: rotate(45deg)
        transform: rotate(45deg)
        border-width: 2px
        border-style: solid
        border-top: 0
        border-left: 0
        position: absolute
        top: 0;
        bottom: 0;
        margin: auto;
        right: 5%;
</style>

