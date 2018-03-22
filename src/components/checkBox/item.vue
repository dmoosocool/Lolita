<template>
<div class="loli-checkbox-items">
  <label class="loli-checkbox-label" :class="{isdisabled:isdisabled}">
      <span>
        <input 
          v-if="group"
          type="checkbox" 
          class="loli-checkbox-input" 
          :disabled="isdisabled" 
          :value="label"
          :data-id="id"
          v-model="model"
          @change="emitChange"
        >
        <input 
          v-else 
          type="checkbox"   
          :disabled="isdisabled"
          :value="label"
          class="loli-checkbox-input" 
          :data-id="id"
          :checked="currentValue"
          @change="emitChange"
        >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-checkbox"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-checkboxactive"></use>
        </svg>
      </span>
      <slot><span class="text">{{ label }}</span></slot>
    </label>
  </div>
</template>
  
<script>
import '../../assets/icon/iconfont.js';
export default {
  name:'loli-checkbox-item',
  props:{
    isdisabled:{
      type:Boolean,
      default:false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    },
    id:[String,Number]
  },
  data() {
    return {
      model: [],
      currentValue: this.value,
      group:false
    };
  },
  methods: {
    emitChange(event){
      if(this.isdisabled){
        return false;
      }
      if(this.group){
        this.$parent.change(this.model);
      }else{
        this.currentValue = event.target.checked;
        this.$emit('on-change',this.currentValue);
      }
    }
  }
};
</script>

<style scoped lang="stylus">
  .loli-checkbox-items
    height 40px
    line-height 40px
    position relative
    .loli-checkbox-label
      span
        position relative
        .loli-checkbox-input
          position absolute
          width 100%
          height 25px
          top 0
          left 0
          opacity 0
          &:checked
            &~svg
              display none
              &~svg
                display inline-block
        svg
          position absolute
          top 5px
          left 0
          display inline-block
          &~svg
            display none
        .icon 
          width 30px 
          height 30px
          vertical-align center
          fill currentColor
          overflow hidden  
      .text
        font-size 16px
        display inline-block
        position absolute
        top 0
        left 30px

  .loli-checkbox-items
    .isdisabled 
      color #ccc
      
      
</style>