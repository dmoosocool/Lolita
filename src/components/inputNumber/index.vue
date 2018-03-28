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
        @input="emitInput"
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
    },
  },
  data() {
    return {
      currentValue:this.value,
      toMin:false,
      toMax:false
    };
  },
  watch:{
    value:{
      handler(value){
        let newVal = value === undefined ? value : Number(value);
        if (newVal !== undefined && isNaN(newVal)) return;
        if (newVal >= this.max) {newVal = this.max;}
        if (newVal <= this.min){newVal = this.min;}
        this.currentValue = newVal;
        this.$emit('input', newVal);
      }
    }
  },
  methods: {
    emitInput(e){
      this.currentValue = parseInt(e.target.value)||'';
      this.setCurrentValue(this.currentValue);
      this.$emit('input', this.currentValue);
    },
    numberDecrease(){
      this.disabled && (this.currentValue=this.value);
      this.currentValue=this.currentValue-this.steps;
      this.setCurrentValue(this.currentValue);
      this.$emit('input', this.currentValue);
    },
    numberIncrease(){
      this.disabled && (this.currentValue=this.value);
      this.currentValue=this.currentValue+this.steps;
      this.setCurrentValue(this.currentValue);
      this.$emit('input', this.currentValue);
    },
    setCurrentValue(currentValue){
      if(currentValue>=this.max){
        currentValue = this.max;
        this.toMax=true;
        this.toMin=false;
        return;
      }else if(currentValue>this.min && currentValue<this.max){
        currentValue=currentValue;
        this.toMax = false;
        this.toMin = false;
        return;
      }else{
        currentValue = this.min;
        this.toMin=true;
        this.toMax=false;
        return;
      }
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