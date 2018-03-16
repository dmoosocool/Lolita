<template>
  <div
    class="loli-accordion-group"
    :show="show"
    :class="'loli-accordion-group--' + ( componentStatus ? 'show' : 'hide')"
  >
    <div class="loli-accordion-group--title" @click="onClick">
      <span>{{title}}</span>
    </div>

    <div class="loli-accordion-group--content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loli-accordion-group',
  data: function(){
    return {
      componentStatus: this.show
    };
  },

  props: {
    title: String,
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(event){
      // 因为在vue2.0中不能直接更改props里面的东西 否则会报错, 所以组件新建一个属性用于存放组件状态.
      return this.componentStatus = !this.componentStatus;
    }
  }
};
</script>

<style lang="stylus" scoped>
.loli-accordion-group
  font-size 16px
  color: #000000
  background-color #ffffff
  border-radius 2px
  box-shadow 0 1px 1px 0 rgba(0,0,0,.1)
  overflow hidden
  &--title
    line-height 56px
    margin 0 20px
  &--content
    margin 0 20px 10px 20px

  &--show &--content
    display block
  &--show &--title
    color lighten(#000, 70%)
  &--hide &--content
    display none

.loli-accordion-group--show .loli-accordion-group--title
  border-bottom: 1px solid #e5e5e5
</style>

