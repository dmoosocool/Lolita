<template>
  <div id="example">
    <loli-header fixed>
      <router-link :to="{path: '/'}" slot="left">返回</router-link>
      <span slot="title">Loading - 加载框</span>
    </loli-header>

    <div class="demo-block-title">
      <span>默认loading</span>
    </div>
    <loli-button type="default" tag="button" @click="loading1">默认loading</loli-button>

    <div class="demo-block-title">
      <span>带文字的loading</span>
    </div>
    <loli-button type="default" tag="button" @click="loading2">带文字的loading</loli-button>

    <loli-loading :loadingStatus="loadingStatus" :size="loadingSize">{{loadingText}}</loli-loading>
  </div>
</template>
<script>
export default {
  name:'example-loading',
  data() {
    return{
      loadingStatus: false,

      loadingSize: 'normal',

      loadingText: ''
    };
  },
  methods:{
    loading1: function(){
      this.loadingText = '';
      this.loadingSize = 'normal';
      this.loadingStatus = true;

      setTimeout(()=>{
        this.loadingStatus = false;
      },1000);

    },

    loading2:function(){
      this.loadingText = '带文字的loading';
      this.loadingSize = 'larger';
      this.loadingStatus = true;
      setTimeout(()=>{
        this.loadingStatus = false;
      },1000);
    }
  }
};
</script>
<style lang="stylus" scoped>

</style>

