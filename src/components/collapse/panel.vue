<template>
  <div class="loli-panel" ref="loliPanel">
    <div class="loli-panel-title" @click="toggle">
      <span><slot></slot></span>
      <i ref="icon" class="icon anticon icon-right" :class="[isActive?'entryActive':'leaveActive']"></i>
    </div>
    <div class="loli-content"><slot name="content"></slot></div>
  </div>
</template>
<script>
import '@/assets/iconfont/iconfont.css';
export default {
  name:'panel',
  data(){
    return{
      index:0,
      isActive:false,
    };
  },
  methods:{
    show:function(){
      this.$refs.loliPanel.style.height = this.$refs.loliPanel.scrollHeight + 'px';
    },
    hide:function(){
      this.$refs.loliPanel.style.height = '49px';
    },
    toggle () {
      this.$parent.toggle({
        name: this.name || this.index,
        isActive: this.isActive
      });
    }
  },
  props:{
    name:[String]
  },
};
</script>
<style lang="stylus" scoped>
.loli-panel
  overflow hidden
  transition .2s all ease
  border 1px solid #ebeef5
  border-right none
  border-left none
  border-radius 0 3px
  height 38px
  margin-top -1px
  &-title
    height 49px
    display flex
    justify-content space-between
    align-items center
    color #303133
    padding 0 12px
    background-color #fff//#f7f7f7
    span
      font-size 13px
      font-weight 500
      max-height 49px
      overflow hidden
      text-overflow:ellipsis;
      white-space: nowrap;
    i
      font-size 14px
      font-style normal
      transition .2s all ease
      color #999
    .entryActive
      transform rotate(90deg)
      transform-origin center
    .leaveActive
      transform:rotate(0);
      transform-origin:center;
  .loli-content
    padding 10px
    padding-top 0
    font-size 13px
    background-color #fff
    color #303133
    max-height 150px
    overflow hidden
    overflow-y auto
    overflow-scrolling: touch;
    p
      font-size 13px
      color #303133
</style>


