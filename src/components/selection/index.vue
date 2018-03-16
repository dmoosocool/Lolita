<template>
  <div
   class="loli-selection-group"
   :class="'loli-selection-group-'+(selectionStatus ?'checked':'unChecked')"
  >
    <input type="checkbox" id="realContent" @click="onClick">
    <label for="realContent">{{text}}</label>
  </div>
</template>
    
<style lang="stylus" scoped>
$activeColor = #0469c8
.loli-selection-group
  width: 147px
  label 
      width 147px
      height 60px
      line-height 60px
      text-align center
      border 1px solid #D1DFE9
      background-color #fff
      color rgba(0, 0, 0, .9)
      border-radius 6px
      display inline-block
      font-size 18px
      letter-spacing 0
  input
      display none
      &:checked
        ~ label
            border-color $activeColor
            color $activeColor
            background:url('../../assets/selectTrue.png') no-repeat
            background-position: 101% bottom
            background-size: 34px 34px
            box-sizing:border-box
</style>
    
<script>
export default {
  name: 'loli-selection',
  props:{
    text: String,
    checkStatus:false
  },
  data() {
    return {
      selectionStatus:this.checkStatus
    };
  },
  created() {
            
  },
  methods: {
    onClick(event){
      return this.selectionStatus = !this.selectionStatus;
    }
  }
};
</script>
