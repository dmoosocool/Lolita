<template>
  <div id="example">
    <loli-header fixed>
      <router-link :to="{path: '/'}" slot="left">返回</router-link>
      <span slot="title">Icon - 图标</span>
    </loli-header>

    <loli-message :text="copyTipsText" :time="2500" :show="copyTips" @messageCb='copyTipsCallback'/>

    <div class="demo-block-title">
      <span>图标 - 方向性图标</span>
    </div>
    <div class="icon-wapper">
      <loli-row v-for="(item, index) in directionality" v-if="index % 4 == 0" v-bind:key="index">
        <loli-col :span=6 v-for="n in 4" v-bind:key="n">
          <div class="icon-content copy-icon-class" :data-clipboard-text="directionality[index - 1 + n]" @click="iconClick(directionality[index - 1 + n])">
            <loli-icon v-bind:icon="directionality[index - 1 + n]"/>
            <p>{{directionality[index - 1 + n]}}</p>
          </div>
        </loli-col>
      </loli-row>
    </div>

    <div class="demo-block-title" >
      <span>图标 - 提示建议性图标</span>
    </div>
    <div class="icon-wapper">
      <loli-row v-for="(item, index) in suggestion" v-if="index % 4 == 0" v-bind:key="index">
        <loli-col :span=6 v-for="n in 4" v-bind:key="n">
          <div class="icon-content copy-icon-class" :data-clipboard-text="suggestion[index - 1 + n]" @click="iconClick(suggestion[index - 1 + n])">
            <loli-icon v-bind:icon="suggestion[index - 1 + n]"/>
            <p>{{suggestion[index - 1 + n]}}</p>
          </div>
        </loli-col>
      </loli-row>
    </div>

    <div class="demo-block-title" >
      <span>图标 - 网站通用性图标</span>
    </div>
    <div class="icon-wapper">
      <loli-row v-for="(item, index) in generality" v-if="index % 4 == 0" v-bind:key="index">
        <loli-col :span=6 v-for="n in 4" v-bind:key="n">
          <div class="icon-content copy-icon-class" :data-clipboard-text="generality[index - 1 + n]" @click="iconClick(generality[index - 1 + n])">
            <loli-icon v-bind:icon="generality[index - 1 + n]"/>
            <p>{{generality[index - 1 + n]}}</p>
          </div>
        </loli-col>
      </loli-row>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard';

export default {
  data(){
    return {
      // 默认不显示提示.
      copyTips: false,
      copyTipsText: '',
      // 方向性图标
      directionality:[
        'step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrows-alt',
        'down', 'up', 'left', 'right', 'caret-up', 'caret-down', 'caret-left', 'caret-right',
        'up-circle', 'down-circle', 'left-circle', 'right-circle', 'up-circle-o', 'down-circle-o',
        'left-circle-o', 'right-circle-o', 'double-right', 'double-left', 'verticle-left', 'verticle-right', 'forward', 'backward',
        'rollback', 'enter', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right',
        'play-circle', 'play-circle-o', 'up-square', 'down-square', 'left-square', 'right-square', 'up-square-o', 'down-square-o',
        'left-square-o', 'right-square-o', 'login', 'logout', 'menu-fold', 'menu-unfold'
      ],

      // 提示建议性图标
      suggestion: [
        'question', 'question-circle-o', 'question-circle', 'plus', 'plus-circle-o', 'plus-circle', 'pause',
        'pause-circle-o', 'pause-circle', 'minus', 'minus-circle-o', 'minus-circle', 'plus-square', 'plus-square-o',
        'minus-square', 'minus-square-o', 'info', 'info-circle-o', 'info-circle', 'exclamation', 'exclamation-circle-o',
        'exclamation-circle', 'close', 'close-circle', 'close-circle-o', 'close-square', 'close-square-o', 'check', 'check-circle',
        'check-circle-o', 'check-square', 'check-square-o', 'clock-circle-o', 'clock-circle', 'warning'
      ],

      // 网站通用性图标
      generality: [
        'lock', 'unlock', 'area-chart', 'pie-chart', 'bar-chart', 'dot-chart', 'bars', 'book', 'calendar', 'cloud', 'cloud-download',
        'code', 'code-o', 'copy', 'credit-card', 'delete', 'desktop', 'download', 'edit', 'ellipsis', 'file', 'file-text', 'file-unknow',
        'file-pdf', 'file-word', 'file-excel', 'file-jpg', 'file-ppt', 'file-markdown', 'file-add', 'folder', 'folder-open', 'folder-add',
        'hdd', 'frown', 'frown-o', 'meh', 'meh-o', 'smile', 'smile-o', 'inbox', 'laptop', 'appstore-o', 'appstore', 'line-chart', 'link',
        'mail', 'mobile', 'notification', 'paper-clip', 'picture', 'poweroff', 'reload', 'search', 'setting', 'share-alt', 'shopping-cart',
        'tablet', 'tag', 'tag-o', 'tags', 'tags-o', 'to-top', 'upload', 'user', 'video-camera', 'home', 'loading', 'loading-3-quarters',
        'cloud-upload-o', 'cloud-download-o', 'cloud-upload', 'cloud-o', 'star-o', 'star', 'heart-o', 'heart', 'enviroment', 'enviroment-o',
        'eye', 'eye-o', 'camera', 'camera-o', 'save', 'team', 'solution', 'phone', 'filter', 'exception', 'export', 'customer-service',
        'qrcode', 'scan', 'like', 'like-o', 'dislike', 'dislike-o', 'message', 'pay-circle', 'pay-circle-o', 'calculator', 'pushpin',
        'pushpin-o', 'bulb', 'select', 'switcher', 'rocket', 'bell', 'disconnect', 'database', 'compass', 'barcode', 'hourglass', 'key',
        'flag', 'layout', 'printer', 'sound', 'usb', 'skin', 'tool', 'sync', 'wifi', 'car', 'schedule', 'user-add', 'user-delete', 'usergroup-add',
        'usergroup-delete', 'man', 'woman', 'shop', 'gift', 'idcard', 'medicine-box', 'red-envelope', 'coffee', 'copyright', 'trademark',
        'safety', 'wallet', 'bank', 'trophy', 'contacts', 'global', 'shake', 'api', 'fork', 'dashboard', 'form', 'table', 'profile'
      ]
    };
  },
  methods:{
    iconClick: function(text) {
      let clipboard = new Clipboard('.copy-icon-class');

      clipboard.on('success', () => {
        this.copyTipsText = text + ' 已经复制';
        this.copyTips = true;
        clipboard.destroy();
      });

      clipboard.on('error', () => {
        this.copyTipsText = '该浏览器不支持自动复制';
        this.copyTips = true;
        clipboard.destroy();
      });
    },

    copyTipsCallback: function(){
      this.copyTips = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
#example
  .demo-block-title
    margin-top 25px

#example i.anticon
  font-size 20px
  margin-top 5px
  &:hover
    font-size 28px
    margin-top 0

.icon-wapper
  text-align center
  .loli-row
    padding 15px 0
    p
      margin-top 15px
    i
      width 30px
      height 30px
      display block
      margin 0 auto
</style>
