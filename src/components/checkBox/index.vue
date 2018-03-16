<template>
   <div class='loli-checkbox-group'>
    <h2 class="loli-checkbox-group-title">{{customizeTitle}}</h2>
    <div class="loli-checkbox-items" >
      <slot name="checkBoxItems"></slot>
    </div>
   </div>
</template>
  
<script>
  
export default {
  name:'loli-checkBox-group',
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
      
  }
};
</script>

<style scoped lang="stylus">
  .loli-checkbox-group
    background-color #fff
    .loli-checkbox-group-title
      margin 0
      font-weight 400
      font-size 18px
      color #000
      padding 20px 15px 0px 20px
    .loli-checkbox-items
      padding: 10px 20px
</style>