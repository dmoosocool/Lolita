<template>
  <transition name="message" v-if='isShow'>
    <div class="loli-messag-box">
      <slot>{{text}}</slot>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'loli-message',
  props: {
    type: {
      type: String,
      default: 'info',
    },
    text: '',
    time: {
      type: Number,
      default: 500,
    },
    show: Boolean,
  },
  watch: {
    show(val) {
      this.isShow = val;
      if (this.isShow) {
        this.close();
      }
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    close() {
      setTimeout(() => {
        this.isShow = false;
        this.$emit('messageCb',true);
      }, this.time);
    },
  },
};
</script>
<style lang="stylus" scoped>
$zIndex = 999;
$maskColor = rgba(0, 0, 0, 0.8);
$fontColor = #fff;

.message-enter-active, .message-leave-active {
  transition: 0.8s;
}

.message-enter, .message-leave-to {
  opacity: 0;
}

.loli-messag-box {
  padding: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: $zIndex;
  width: 80%;
  color: $fontColor;
  font-size: 14px;
  text-align: center;
  background-color: $maskColor;
  border-radius: 4px;
  line-height: 1.5;
}
</style>
