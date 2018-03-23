<template>
  <div>
    <loli-button type="default" tag="button" size="large" @click="loading1">默认loading</loli-button>
    <loli-button style="margin-top:20px;" type="default" tag="button" size="large" @click="loading2">带文字的loading</loli-button>
    <loli-loading :loaderShow="loaderShow1" size="normal"></loli-loading>
    <loli-loading :loaderShow="loaderShow2" size="lager">带文字的loading</loli-loading>
  </div>
</template>
<script>
export default {
  name:'example-loading', 
  data(){
    return{
      loaderShow1:true,
      loaderShow2:true
    };
  },
  methods:{
    loading1:function(){
      this.loaderShow1 = false;
      setTimeout(()=>{
        this.loaderShow1 = true;
      },1000);
    },
    loading2:function(){
      this.loaderShow2 = false;
      setTimeout(()=>{
        this.loaderShow2 = true;
      },1000);
    }
  }
};
</script>
<style lang="stylus" scoped>

</style>

