<template>

    <div class="loli-actionsheet-box">
      <transition name="fade">
        <div class="loli-mask" v-if = options.lvalue @click="onClickMask"></div>
      </transition>
      <transition name="loli-actionsheet-slide">
      <div class="loli-actionsheet"  v-if = options.lvalue>
        <div class="loli-actionsheet-nav">
          <span class="loli-actionsheet-close" @click="closeActionsheet"><i></i></span>
          <span class="loli-actionsheet-comform" @click="comformActionsheet">确定</span>
          <div class="loli-actionsheet-title">请选择</div>
        </div>
        <!-- 单级选择 -->
        <SingleType :datas="options.data" @tab="tabItem"  v-if="options.type=='0'"/>

        <!-- 多级联动始 -->
        <MutilType
          v-if="options.type=='1'"
          :options="options"
          :items="itemLitsDatas"
          :result="result"
          @itemtab="tabItem"
          @navTab ="navHasBeenTab"
        />
      </div>
    </transition>

    </div>
</template>
<script>
import SingleType from './singleType.vue';
import MutilType from './mutilType.vue';
export default {
  data(){
    return {
      result:{},
      selectItmes:{},
      actionLv:0,//多级联动层级，默认从第0级开始
    };
  },
  props:{
    options:{
      type:Object,
      required:true
    },
    closeOnClickMask:{
      type:Boolean
    }
  },
  methods:{
    closeActionsheet(){//关闭组件 不需在外做任何事情 可以在组件内直接处理
      this.options.lvalue=false;
      this.actionLv = 0;
    },
    comformActionsheet(){//点确定,对外可能需要对值处理，用$emit触发父级事件,并传递选择结果的对象

      if(this.options.type==0){
        if(this.selectItmes.code==''||this.selectItmes.value==''){
          alert('请选择其中一项');
        }
        //这样通过中间变量selectItems赋值给返回的结果可以避免选择时没点确定页面的值就改变了
        this.result.code = this.selectItmes.code;
        this.result.value = this.selectItmes.value;
      }else if(this.options.type==1 && JSON.stringify(this.result) == '{}'||(this.result.resData.length!=this.options.xAxis.length))  {
        alert('请选择'+this.options.xAxis.join(''));
        return;
      }
      this.result.type = this.options.type;//区分单选还是多级
      this.result.name = this.options.title;//选择的是什么项目，页面有多个下拉选择的情况可以用这个判断区分
      this.actionLv =0;
      this.$emit('comform',this.result);//多级联动的result是双向绑定，在mutilType子组件内直接返回不用处理

    },
    tabItem(res){//选项事件 组件内完成
      if(this.options.type==0){//单选
        this.selectItmes = {
          code : res.target.dataset.id,
          value : res.target.innerText
        };
      }else {//多级
        const el = res.el;
        let lv = res.lv;
        this.selectItmes.resData = [];
        this.selectItmes.resData[lv]={
          code : el.target.dataset.id,
          value : el.target.innerText
        };
        //最后一层不用加1了,否则上一层选择后，层级自动加一指向下一层
        this.actionLv<this.options.xAxis.length-1&&(this.actionLv =lv+1);
      }
    },
    navHasBeenTab(lv){
      this.actionLv = lv;
    },
    onClickMask(){
      this.options.lvalue = false;
    }


  },
  components:{
    SingleType,
    MutilType
  },
  computed:{
    itemLitsDatas(){
      const self = this;
      if(this.actionLv==0){
        return {
          data:this.options.data,
          lv:this.actionLv
        };
      }else {
        let newObj = this.options.data;
        for(let i=0;i<this.actionLv&&i<this.options.xAxis.length-1;i++){
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
        return {
          data:newObj[0].data,
          lv:this.actionLv
        };
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
*
  box-sizing border-box
.loli-mask
  position: fixed
  z-index 100
  width: 100%
  height: 100%
  top: 0
  left: 0
  background-color: rgba(0, 0, 0, 0.7)
  transition: 0.2s ease-out
.loli-actionsheet
  position: fixed
  z-index 1000
  left: 0
  right: 0
  bottom: 0
  transition: 0.2s ease-out
  background-color:#FFF
  &-nav
    position relative
    height 50px
    padding 0 5%
    & span
      display block
      font-size 16px
      opacity .8
      position absolute
      box-sizing border-box
  &-close
    width 30px
    height 30px
    top 5px
    left 3%
    &>i
      display block
      width 12px
      height 12px
      margin 9px 0 0 9px
      background url(../../assets/xIcon.png) center center
      background-size 100%
  &-comform
    top: 3px
    right: 0
    padding: 10px 5% 10px 10px
  &-title
    position absolute
    top 0
    left 0
    z-index -2
    text-align center
    line-height 42px
    font-size 15px
    width:100%
  &-slide-enter,
  &-slide-leave-active {
    transform: translate3d(0, 100%, 0);
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }



</style>
