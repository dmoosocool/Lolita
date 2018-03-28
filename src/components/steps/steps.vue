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
      this.$children[this.$children.length-1].stepLine = false;
      if(this.current<0 || this.current>this.$children.length){
        return;
      }
      this.$children.forEach((child, index)=>{
        if(index<this.current){
          child.currentStatus = true;
          child.stepCircle = 'normal';
          child.successOrfail = true;
          index>0 ?this.$children[index-1].lineColors = 'normal':'';
          child.num = '';
        } else {
          if(this.status == 'error' && this.current == index){
            this.$children[index-1].lineColors = 'error';
            child.successOrfail = false;
            child.num = '';
            child.stepCircle = 'error';
          } else {
            child.lineColors = 'default';
            child.num = index+1;
            child.stepCircle = 'default';
          }
          child.currentStatus = false;
        }
      });
    }
  },
  props:{
    current:[ Number, String ],
    status: String,
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


