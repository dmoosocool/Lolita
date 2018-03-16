<template>
   <div class="loli-radio-group">
      <h2 class="loli-radio-group-title">{{customizeTitle}}</h2>
      <div class="loli-radio-items">
        <slot></slot>
      </div>
   </div>
</template>
    
<script>
export default {
  name:'loli-radio-group',
  props:{
    customizeTitle:String
  },
  data() {
    return {
    };
  },
  created() {
    
  },
  methods: {
    
  },
};
</script>

<style scoped lang="stylus">
.loli-radio-group
  background-color #fff
  .loli-radio-group-title
    margin 0
    font-weight 400
    font-size 18px
    color #000
    padding 20px 15px 0px 20px
  .loli-radio-items
    padding: 10px 20px
    background-color #fff
</style>