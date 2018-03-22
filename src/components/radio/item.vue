<template>
   <div class="loli-radio-eachitem">
      <input 
        v-if="isdisabled" 
        type="radio"
        :disabled="isdisabled" 
        :value="customizeValue" 
        :name="customizeName"
        ref="input1" 
        @click="onClick" 
        v-model="picked" 
        class="loli-radio-input isdisabled" 
      >
      <input 
        v-else 
        type="radio"
        :value="customizeValue" 
        :name="customizeName" 
        ref="input1" 
        @click="onClick" 
        v-model="picked" 
        class="loli-radio-input" 
       >
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-radio"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-radioactive"></use>
      </svg>
      <label :for="customizeValue" class="loli-radio-label">{{customizeText}}</label>
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
    isdisabled:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      counterArray:[],
      picked:''
    };
  },
  methods:{
    onClick(){
      this.picked = this.$refs.input1.value;
      this.$emit('getValue',this.picked);
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
  .loli-radio-input
    position absolute
    top 0
    left 0
    opacity 0
    z-index 3
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
  .loli-radio-label
    position absolute
    left 5px
    top 3px
    padding 5px 0 5px 25px
    font-size 16px

.loli-radio-eachitem
    .isdisabled 
      color #ccc
      &~.loli-radio-label
        color #ccc
      &~svg
        color #ccc
</style>