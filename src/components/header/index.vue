<template>
   <component :is="'div'" class="loli-header">
     <div class="loli-header-left">
        <slot name="left"></slot>
     </div>
     <h1 class="loli-title"><slot>{{msg}}</slot></h1>
     <div class="loli-header-right">
       <slot name="right"></slot>
     </div>
  </component>
</template>
<script>
export default {
  name: 'loli-Header',
  props: {
    msg: String,
  },
};
</script>
<style lang="stylus" scoped>
$bgColor = #fff;
$fontColor = #000;

.loli-header {
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  display: flex;
  font-size: 14px;
  line-height: 1;
  position: relative;
  white-space: nowrap;
  color: $fontColor;
  background-color: $bgColor;

  .loli-header-left, .loli-header-right {
    flex: 0.5;
    line-height: 2.8;
  }

  .loli-header-left {
    text-align: left;
  }

  .loli-header-right {
    text-align: right;
  }

  .loli-title {
    text-align: center;
    font-weight: 400;
    font-size: inherit;
    line-height: 2.8;
    flex: 1;
  }
}
</style>


