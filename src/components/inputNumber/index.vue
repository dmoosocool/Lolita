<template>
   <div class='loli-inputNumber-group'>
      <span 
        class='loli-inputNumber-side loli-inputNumber-decrease'
        :class="{isdisabled:toMin||disabled}"
        @click="numberDecrease"
      >-</span>
      <span 
        class='loli-inputNumber-side loli-inputNumber-increase'
        :class="{isdisabled:toMax||disabled}"
        @click="numberIncrease"
      >+</span>
      <input 
        type="text"
        ref="input"
        :value="currentValue"
        :min="min"
        :max="max"
        :disabled="disabled"
        :steps="steps"
        class="loli-inputNumber-content"
        :class="{isdisabled:disabled}"
      >
   </div>
</template>
  
<script>
  
export default {
  props:{
    value:{
      type:Number,
      default:1
    },
    min:{
      type:Number,
      default:1
    },
    max:Number,
    disabled:{
      type:Boolean,
      default:false
    },
    steps:{
      type:Number,
      default:1
    }
  },
  data() {
    return {
      currentValue:this.value,
      toMin:false,
      toMax:false
    };
  },
  methods: {
    numberDecrease(){
      if(this.steps){
        this.currentValue=this.currentValue-this.steps;
      }else{
        this.currentValue--;
      }
      if(this.currentValue<this.min){
        this.currentValue=1;
        this.toMin = true;
      }
      this.disabled && (this.currentValue=this.value);
      this.toMax = false;
      this.$emit('input', this.currentValue);
    },
    numberIncrease(){
      if(this.steps){
        this.currentValue=this.currentValue+this.steps;
      }else{
        this.currentValue++;
      }
      if(this.currentValue>this.max){
        this.currentValue = this.max;
        this.toMax = true;
      }
      this.disabled && (this.currentValue=this.value);
      this.toMin = false;
      this.$emit('input', this.currentValue);
    }
  }
};
</script>

<style lang="stylus" scoped>
  .loli-inputNumber-group
    position relative
    height 35px
    .loli-inputNumber-side
      position absolute
      display inline-block
      width 38px
      height 33px
      line-height 33px
      text-align center
      font-size 14px
      border 1px solid #dadde4
      top 0
      &.isdisabled
        background-color #f5f7fa
        color #caced5
    .loli-inputNumber-decrease
      left 0
    .loli-inputNumber-increase
      left 131px
    .loli-inputNumber-content
      position absolute
      top 0px
      left 38px
      outline none
      border 1px solid #dadde4
      border-left none
      border-right none
      width 93px
      height 33px
      text-align center
      &.isdisabled
        background-color #f5f7fa
        color #caced5

</style>