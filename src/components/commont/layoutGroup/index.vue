<template>
  <div>
    <div class="loli-seletor-group">
      <div class="seletor-group-title">{{title}}</div>
      <div
        :class="['seletor-group-content',viewTxt?'':'placeholder']"
        @click='openSeletor'
        :data-val="title"
      >
        {{viewTxt?viewTxt:"请选择您的"+title}}
      </div>
    </div>
    <slot name="tabSeletor"></slot>
    <slot name="treeSelect"></slot>
    <LoliMask @tapMask='tapMaskClose' :isShow="isShow"/>
    <slot></slot>
  </div>
</template>
<script>
import LoliMask from '../mask';
export default {
  methods:{
    openSeletor(e){
      this.$emit('showSeletor',e);
    },
    tapMaskClose(){
      this.$emit('maskTap');
    }
  },
  props:{
    isShow:{
      type:Boolean
    },
    title:{
      type:String
    },
    activeItem:{
      type:Object
    }
  },
  components:{
    LoliMask
  },
  computed:{
    viewTxt(){
      let txt='';
      if(this.activeItem.type==0){
        txt = this.activeItem.name;
      }else {
        if(JSON.stringify(this.activeItem)!=''&&this.activeItem.resData){
          for(let i=0,txtArray=[];i<this.activeItem.resData.length;i++){
            txtArray.push(this.activeItem.resData[i].value);
            txtArray = Array.from(new Set(txtArray));//去重，“北京市北京市”
            txt=txtArray.join('');
          }
        }
      }
      return txt;
    }
  }
};
</script>

<style lang="stylus">
  .loli-seletor-group
    padding 0 15px
    margin 20px 0
  .seletor-group-title
    font-size 15px
    opacity .3
  .seletor-group-content
    height: 50px
    line-height: 50px
    font-size: 18px
    opacity: .9
    border-bottom: 1px solid #d1dfe9;/*no*/
  .placeholder
    font-size: 14px
    color #999

  .seletor-main
    display nene
    position: fixed
    width: 100%
    bottom: 0
    z-index: 200
    min-height: 2.7rem
    max-height: 60%
    background-color: #fcfcfc
  .showUp-enter,
  .showUp-leave-to
    transform: translate3d(0, 100%, 0);
  .showUp-enter-active, .showUp-leave-active
    transition: 0.2s ease-out

</style>
