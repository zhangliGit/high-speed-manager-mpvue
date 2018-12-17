<template>
  <div class="trip co-f1 co-flex co-ver">
    <div class = "co-flex mainBg col-1" style="padding: 20rpx">
      <div :key ="index" v-for = "(item, index) in list" class = "co-f1 co-flex co-ver co-ac co-jc">
        <div>
          <img :src = "item.icon" alt = "" style = "width: 64rpx; height: 64rpx; display: block" />
        </div>
        <div class="col333" style="font-size: 24rpx; margin-top: 10rpx; color: #fff">{{ item.title }}</div>
      </div>
    </div>
    <scroll-view
     scroll-y
     style="height: 1rpx;"
     class="co-f1"
     @scrolltoupper="scrolltoupper"
     @scrolltolower="scrolltolower"
     @scroll="scroll"
    >
      <div v-for = "(item, index) in tripList"  :key = "index" class = "co-flex co-pd-a06 co-bg-0 co-bd-b co-of" style="padding: 30rpx; background:#fff; border-bottom: 1rpx #eee solid; overflow: hidden">
        <div style="width: 200rpx; height: 150rpx;">
          <img :src="item.picUrl" style = "width: 5rem; height: 4rem; display:block"  alt = "" >
        </div>
        <div class = "co-f1 co-mg-l06 co-flex co-ver co-jsb" style="margin-left: 20rpx">
          <div class = "co-te2" style = "color: #333; -webkit-box-origin: vertical; box-origin: vertical; font-size: 26rpx">{{ item.title }}</div>
          <div class = "co-f1 co-te1"  style = "overflow: hidden; -webkit-box-origin: vertical; box-origin: vertical; font-size: 24rpx; color: #666">{{ item.levelTitle }}</div>
          <div class = "co-flex co-jsb co-ac co-fs-01" style="font-siz: 24rpx">
            <div class="tip">{{ item.type }}</div>
            <div class = "co-flex co-ac" style = "color: #c3c3c3">
              <div><i class = "icon iconfont icon-yanjing co-fs-1" style="margin-top:6rpx"></i></div>
              <div style = "margin: 3px 3px 0; font-size: 24rpx">{{ item.watch }}</div>
            </div>
          </div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
import skb from '../assets/images/skb.png'
import cxdc from '../assets/images/cxdc.png'
import gtywb from '../assets/images/gtywb.png'
import czdp from '../assets/images/czdp.png'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Trip',
  components: {
  },
  props: {
    tripList: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data () {
    return {
      title: '首页',
      current: 0,
      list: [
        {
          title: '时刻表/正晚点',
          icon: skb
        },
        {
          title: '车厢点餐',
          icon: cxdc
        },
        {
          title: '高铁延误宝',
          icon: gtywb
        },
        {
          title: '车站大屏',
          icon: czdp
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    scrolltoupper () {
    },
    scrolltolower () {
      this.$emit('getTripList', 1)
    },
    scroll () {
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang = "less">
  .trip {
    .mainBg {
      background: #4889db
    }
    .tip {
      padding: 0px 8rpx;
      height: 40rpx;
      line-height: 36rpx;
      border-radius: 3px;
      border: 1rpx #7ed321 solid;
      color: #7ed321;
      font-size: 24rpx;
      transform: scale(.9);
    }
  }
</style>
