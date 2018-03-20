<template>
  <transition name="loli-actionsheet-slide">
      <div class="loli-actionsheet" v-show = options.lvalue>
        <div class="loli-actionsheet-nav">
          <span class="loli-actionsheet-close" @click="closeActionsheet"><i></i></span>
          <span class="loli-actionsheet-comform" @click="comformActionsheet">确定</span>
          <div class="loli-actionsheet-title">请选择</div>
        </div>
        <!-- 单级选择开始 -->
        <SingleType :datas="options.data" @tab="tabItem"  v-if="options.type=='0'"/>
        <!-- 单级选择结束 -->
        <!-- 多级联动开始 -->
        <div v-if="options.type=='1'">

        </div>
        <!-- 多级联动结束 -->
      </div>
  </transition>
</template>
<script>
import SingleType from './singleType.vue';
export default {
  props:{
    options:{
      type:Object,
      required:true
    }
  },
  methods:{
    closeActionsheet(){//关闭组件 不需在外做任何事情 可以在组件内直接处理
      this.options.lvalue=false;
    },
    comformActionsheet(){//点确定,对外可能需要对值处理，用$emit触发父级事件
      this.$emit('comform');
    },
    tabItem(e){//选项事件 组件内完成
      this.options.selectData.code = e.target.dataset.id;
      this.options.selectData.name = e.target.innerText;
    }
  },
  components:{
    SingleType,
  }
};
</script>
<style lang="stylus" scoped>
*
  box-sizing border-box
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
</style>
