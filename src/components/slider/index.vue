<template>
   <div class='loli-slider-group'>
    <div 
      class="loli-slider-bar" 
      ref="sliderBar"
      :value="currentValue"
    ></div>
    <button 
      class="loli-slider-btn"
      ref="sliderBtn"
      draggable="true"
      @touchstart="onButtonDown"
    ></button>
    <div class="loli-slider-mask" ref="sliderMask"></div>
    <span 
      :show="messageIsShow"
      ref="sliderMessage"
      class="loli-slider-message"
    ></span>
   </div>
</template>
  
<script>
  
export default {
  props:{
    messageIsShow:{
      type:Boolean,
      default:true
    },
    value:{
      type:[Number,String],
      default:0
    }
  },
  data() {
    return {
      requiredData:{},
      currentValue:this.value
    };
  },
  mounted(){
    let sliderBarWidth = this.$refs.sliderBar.offsetWidth;//滑块长度
    let moveDistance = sliderBarWidth-this.$refs.sliderBar.offsetWidth;//移动的最大距离
    let l;
    if(this.currentValue){
      l = this.currentValue/100*sliderBarWidth;
      this.$refs.sliderBtn.style.left = l + 'px';//设置滑块的左边距
      this.$refs.sliderMask.style.width = this.$refs.sliderBtn.style.left;//设置遮罩的样式
      this.showPersentage(this.$refs.sliderBtn,l);
    }
    
  },
  created() {
      
  },
  methods: {
    onButtonDown(event){
      event.preventDefault();
      this.onDragStart(event);
      event.target.addEventListener('touchmove', this.onDragging);
      event.target.addEventListener('touchend', this.onDragEnd);
      this.$emit('input');
    },
    onDragStart(event){
      let disX = event.touches[0].clientX - event.target.offsetLeft;//鼠标按下 计算当前元素到可视区的距离
      let sliderBarWidth =this.$refs.sliderBar.offsetWidth;//滑块长度
      let moveDistance = sliderBarWidth-event.target.offsetWidth;//移动的最大距离
      this.requiredData.disX = disX;
      this.requiredData.sliderBarWidth=sliderBarWidth;//滑块总长度
      this.requiredData.moveDistance=moveDistance;//移动的最大距离
    },
    onDragging(event){
      let l = event.touches[0].clientX - this.requiredData.disX;//移动的距离
      if(l<0){l=0;}
      if(l>this.requiredData.moveDistance){l=this.requiredData.moveDistance;}
      event.target.style.left = l + 'px';//设置滑块的左边距
      this.$refs.sliderMask.style.width = event.target.style.left;//设置遮罩的样式
      this.showPersentage(this.$refs.sliderBtn,l);
    },
    onDragEnd(){
      document.ontouchmove = null;
      document.ontouchend = null;
    },
    showPersentage(target,l){
      var sliderMessage =this.$refs.sliderMessage;
      let sliderBarWidth =this.$refs.sliderBar.offsetWidth;//滑块长度
      let moveDistance = sliderBarWidth-target.offsetWidth;//移动的最大距离
      if(this.messageIsShow){//判断在滑动的过程中是否显示进度提示
        sliderMessage.style.display='block';
      }else{
        sliderMessage.style.display='none';
      }
      sliderMessage.style.left = target.style.left;//设置进度提示的左边距

      var percentage = parseInt(l/sliderBarWidth*100);//设置百分比
      if(l==moveDistance){
        percentage=100;
      }
      sliderMessage.innerHTML = percentage;
      if(percentage==0){
        sliderMessage.style.display='none';
      }
      this.$emit('input',percentage);
    }
  },
};
</script>

<style lang="stylus" scoped>
  .loli-slider-group
    position relative
    .loli-slider-bar
      width 100%
      height 8px
      background-color #ccc
    .loli-slider-btn
      position absolute
      top -6px
      // left 0
      width 20px
      height 20px
      border 2px solid #409eff
      border-radius 20px
      background-color #fff
    .loli-slider-mask
      position absolute
      top 0
      left 0
      height 8px
      width 1px
      background-color #409eff
    .loli-slider-message
      display inline-block
      position absolute
      top -26px
      left 0
      width 20px
      height 20px
      text-align center
      line-height 20px
      color #fff
      background-color rgba(0,0,0,.7)
      border-radius 30px
      border 1px solid #999
      display none 
      
</style>