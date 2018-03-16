<template>
  <div class="step">
    <div class="title">这是step页面</div>
    <loli-steps :current="active">
        <loli-step title="步骤一"></loli-step>
        <loli-step title="步骤一"></loli-step>
        <loli-step title="步骤一"></loli-step>
        <loli-step title="步骤一"></loli-step>
    </loli-steps>
    <loli-button type="default" tag="button" size="large" @click="nextStep">下一步</loli-button>
  </div>
</template>
<script>
export default {
  name:'example-step',
  data(){
    return{
      active:1
    };
  },
  methods:{
    nextStep:function(){
      console.log(22);
      if (this.active == 4) {
        this.active = 0;
      } else {
        this.active += 1;
      }
    }
  }
};
</script>
<style lang="stylus" scoped> 
.step
  padding 20px
  .title
    margin 10px 0
    font-size 16px
</style>


