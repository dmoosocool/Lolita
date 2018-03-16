<template>
   <div class="loli-radio-eachitem" @click="onClick">
      <label class="loli-radio-label">{{customizeText}}</label>
      <input type="radio" class="loli-radio-input" :value="customizeValue" :name="customizeName">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-radio"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-radioactive"></use>
      </svg>
    </div>
</template>

<script>
import '../../assets/icon/iconfont.js';
export default {
  name: 'loli-radio-item',
  props: {
    customizeText: String,
    customizeValue:String,
    customizeName:{
      type:String
    },
  },
  data(){
    return{
      counterArray:[]
    };
  },
  methods:{
    onClick(event){
      this.$emit('click',event);
    }
  }
};
</script>

<style lang="stylus" scoped>
.icon 
    width 30px 
    height 30px
    vertical-align -0.15rem
    fill currentColor
    overflow hidden
.loli-radio-eachitem
  margin 10px 0
  position relative
  background-color #fff
  .loli-radio-label
    position absolute
    left 5px
    top 3px
    padding 5px 0 5px 25px
    font-size 16px
  .loli-radio-input
    position absolute
    top 0
    left 0
    opacity 0
    z-index 99
    width 100%
    height 25px
    &:checked
      &~svg
        display none
        &~svg
          display inline-block  
  svg
    display inline-block
    &~svg
      display none
</style>