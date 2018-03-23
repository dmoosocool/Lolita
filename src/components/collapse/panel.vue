<template>
  <div class="loli-panel" ref="loliPanel">
    <div class="loli-panel-title" @click="toggle">
      <span><slot></slot></span>
      <i ref="icon" :class="[isActive?'entryActive':'leaveActive']"></i>
    </div>
    <div class="loli-content"><slot name="content"></slot></div>
  </div>
</template>
<script>
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
      this.$refs.loliPanel.style.height = '38px';
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
  border 1px solid #dddee1
  border-radius 0 3px
  height 38px
  margin-top -1px
  &-title
    height 38px
    line-height 38px
    display flex
    justify-content space-between
    align-items center
    color #666
    padding 0 12px
    background-color #f7f7f7
    span
      font-size 12px
      max-height 36px
      overflow hidden
      text-overflow:ellipsis;
      white-space: nowrap;
    i 
      width 14px
      height 14px
      background url('../../assets/arrow.png') no-repeat center
      backgground-size cover
      font-style normal
      transition .2s all ease
    .entryActive 
      transform rotate(90deg)
      transform-origin center
    .leaveActive 
      transform:rotate(0);
      transform-origin:center;
  .loli-content
    padding 10px
    font-size 13px
    background #fff
    max-height 150px
    overflow hidden 
    overflow-y auto
    overflow-scrolling: touch;
</style>


