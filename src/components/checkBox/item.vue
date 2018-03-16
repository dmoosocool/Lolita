<template>
  <div
   :class="'loli-checkbox-eachitem-'+(selectionStatus?'checked':'unChecked')"
   class="loli-checkbox-eachitem"
   >
    <label class="loli-checkbox-label">{{customizeText}}</label>
    <input type="checkBox" class="loli-checkbox-input" :value="customizeValue" :name="customizeName" @click="onClick">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-checkbox"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-checkboxactive"></use>
    </svg>
  </div>
</template>
  
<script>
import '../../assets/icon/iconfont.js';
export default {
  name:'loli-checkbox-item',
  props:{
    customizeText:String,
    customizeValue:String,
    customizeName:String,
    checkedStatus:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      selectionStatus:this.checkedStatus
    };
  },
  created() {
      
  },
  methods: {
    onClick(){
      return this.selectionStatus=!this.selectionStatus;
    }
  }
};
</script>

<style scoped lang="stylus">
  .icon 
    width 30px 
    height 30px
    vertical-align -0.15rem
    fill currentColor
    overflow hidden
  .loli-checkbox-eachitem
    position relative
    margin 10px 0
    .loli-checkbox-label
      position absolute
      left 5px
      top 3px
      padding 5px 0 5px 25px
      font-size 16px
    .loli-checkbox-input
      position absolute
      opacity 0
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