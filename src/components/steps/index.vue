<template>
   <div class="loli-steps">
      <slot></slot>
   </div>
</template>
<script>
export default {
  name:'loli-steps',
  data(){
    return{
      msg:'我是父组件'
    };
  },
  methods:{
    updateCurrent:function(){
      if(this.current<0 || this.current>this.$children.length){
        return;
      }
      this.$children.forEach((child, index)=>{
        if(index<this.current){
          child.currentStatus = true;
          index>0?this.$children[index-1].colors = true:'';
          child.num = '';
        } else {
          child.currentStatus = false;
          child.colors = false;
          child.num = index+1;
        }
        if(this.$children.length == index+1){
          child.stepLine = false;
        }
      });
    }
  },
  props:{
    current:[Number,String]
  },
  mounted:function(){
    this.updateCurrent();
  },
  watch:{
    current:function(){
      this.updateCurrent();
    }
  }
};
</script>
<style lang="stylus" scoped>
.loli-steps{
}
</style>


