<template>
  <div class="loli-accordion-item">
    <slot>{{text}}</slot>
  </div>
</template>

<script>
export default {
  name: 'loli-accordion-item',
  props: {
    text: String,
  }
};
</script>

<style lang="stylus" scoped>
.loli-accordion-item
  padding 0 10px
  font-size 14px
  line-height 48px
  border-bottom: 1px solid #e5e5e5
  &:last-child
    border-bottom 0;
</style>

