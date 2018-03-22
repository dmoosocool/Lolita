<template>
  <transition name="fade">
     <div class="loli-dialog-box" v-if="isShow">
     <div class="mask"></div>
     <div class="loli-dialog-content">
       <div class="loli-dialog-title" v-if="title">{{title}}</div>
        <div class="loli-dialog-context">
         <slot>{{text}}</slot>
       </div>
       <div class="loli-dialog-footer" :class="{'isTwoBtn':isTwo}">
         <button class="loli-dialog-button cancel" @click="hide(false)">取消</button>
          <button class="loli-dialog-button confirm" @click="hide(true)">确定</button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'loli-dialog',
  props: {
    show: Boolean,
    text: String,
    isTwo: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
  watch: {
    show(val) {
      this.isShow = val;
    }
  },
  data() {
    return {
      isShow: this.show,
    };
  },
  methods: {
    hide(isConfirm) {
      this.isShow = false;
      this.$nextTick(() => {
        //通过传出的status值判断点击哪个按钮 false 取消/ true 确定
        this.$emit('status', isConfirm);
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active {
  transition: 0.2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

$Zindex = 999;
$confirmColor = #00C000;
$contextColor = #999;

.loli-dialog-box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: $Zindex;

  .mask {
    background-color: #000;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    z-index: $Zindex + 1;
  }

  .loli-dialog-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 85%;
    text-align: center;
    overflow: hidden;
    border-radius: 4px;
    z-index: $Zindex + 2;
    background-color: #fff;
    font-size: 16px;

    .loli-dialog-title {
      font-weight: 400;
      text-align: center;
      padding: 15px 0 0;
    }

    .loli-dialog-context {
      line-height: 1.5;
      padding: 15px 20px;
      font-size: 14px;
      color: $contextColor;
    }

    .loli-dialog-footer {
      overflow: hidden;
      border-top: 1px solid #e5e5e5;

      button {
        background-color: #fff;
        height: 50px;
        line-height: 48px;
        display: inline-block;
        border-radius: 4px;
        box-sizing: border-box;
        font-size: 16px;
        text-align: center;
        box-sizing: border-box;
        outline: none;
      }

      .loli-dialog-button {
        border: 0;

        &.cancel {
          display: none;
        }

        &.confirm {
          width: 100%;
          color: $confirmColor;
        }
      }

      &.isTwoBtn {
        display: flex;

        .loli-dialog-button {
          flex: 1;

          &.cancel {
            display: inline-block;
            border-right: 1px solid #e5e5e5;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
        }
      }
    }
  }
}
</style>

