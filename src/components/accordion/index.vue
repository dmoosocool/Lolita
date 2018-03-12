<template>
  <div
    class="loli-accordion-group"
    :type="type"
    :accordion="accordion"
    @click="onClick"
  >
    <div class="loli-accordion-group--title">
      <slot>{{title}}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loli-accordion-group',
  props: {
    title: String,
    type: {
      type: Boolean,
      default: false
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(event){
      this.$emit('click', event);
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
  &--title
    line-height 56px
    padding-left 20px

</style>

