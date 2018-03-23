<template>
   <div class='loli-input-group'>
      <span v-if="isClearable">
        <input
          :type="type"
          :placeholder="placeholder"
          :value="currentValue"
          :maxlength="maxlength"
          :disabled="isDisabled"
          class="loli-input"
          :class="{disabled:isDisabled}"
          ref="target"
          @input="emitInput"
        >
         <svg class="icon" aria-hidden="true" @click="emitDelete">
          <use xlink:href="#icon-delete"></use>
        </svg>
      </span>
      <span v-else>
        <input 
          :type="type"
          :placeholder="placeholder"
          :value="currentValue"
          :maxlength="maxlength"
          :disabled="isDisabled"
          class="loli-input"
          :class="{disabled:isDisabled}"
          @input="emitInput"
        >
      </span>
   </div>
</template>

<script>
  
export default {
  name:'loli-input',
  props:{
    isClearable:{
      type:[Boolean,String],
      default:false
    },
    isDisabled:{
      type:[Boolean,String],
      default:false
    },
    type:{
      type:String,
      default:'text'
    },
    placeholder:{
      type:String,
      default:'请输入文字'
    },
    value:{
      type:[String,Number],
      default:''
    },
    maxlength: {
      type: Number
    },
  },
  data() {
    return {
      currentValue:this.value
    };
  },
  created() {
      
  },
  methods: {
    emitInput(event){
      var value = event.target.value;
      this.$emit('input',value);
    },
    emitDelete(event){
      this.$refs.target.value='';
      this.$emit('input', '');
    }
  }
};
</script>

<style lang="stylus" scoped>
  .icon {
    width: 25px; 
    height: 25px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .loli-input-group
    span
      display block
      position relative
      .loli-input
        outline none
        -webkit-appearance none
        border 1px solid #ccc
        font-size 14px
        text-indent 5px
        width 250px 
        height 40px 
        padding 10px 5px
        background-color #fff
        &.disabled
          background-color #f3f3f3
          border 1px solid #ccc
      svg
        position absolute
        top 9px
        left 220px
</style>