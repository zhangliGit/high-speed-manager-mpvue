<template>
  <div class="service">
    <div class = "co-pd-a06 co-bd-b" style = "padding: 18rpx 25rpx; border-bottom: 1rpx #f5f5f5 solid">出行服务</div>
    <div class = "co-flex co-pd-tb06 bg-fff" style="padding: 30rpx 0">
      <div :key = "index" v-for = "(item, index) in serList" class = "co-f1 co-flex co-ver co-ac co-jc">
        <div>
          <img :src = "item.icon" style = "width: 68rpx; height: 68rpx; display: block"  alt = "" />
        </div>
        <div class = "col-2 co-fs-01 co-mg-t04" style="margin-top: 10rpx; font-size: 26rpx">{{ item.title }}</div>
        <div class = "co-fs-02 col-1 co-mg-t02" style="margin-top: 6rpx; font-size: 24rpx">{{ item.tip }}</div>
      </div>
    </div>
    <div class = "co-bg-0 co-mg-t06"  style = "">
      <div class = "co-pd-a06 co-bd-b" style = "padding: 18rpx 25rpx; border-bottom: 1rpx #f5f5f5 solid">管家自营</div>
      <div class = "bg-fff" style="padding: 10rpx 0; overflow: auto">
        <div :key = "index" v-for = "(item, index) in manList" class = "co-flex co-ver co-ac co-jc tab-list">
          <div>
          <img :src = "item.icon" style = "width: 68rpx; height: 68rpx; display: block"  alt = "" />
          </div>
          <div class="col-2" style="margin-top: 10rpx; font-size: 26rpx">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jdydIcon from '../assets/images/jdydIcon.png'
import hbdtIcon from '../assets/images/hbdtIcon.png'
import qyfwIcon from '../assets/images/qyfwIcon.png'
import cxzbIcon from '../assets/images/cxzbIcon.png'
import jfdhIcon from '../assets/images/jfdhIcon.png'
import hcdcIcon from '../assets/images/hcdcIcon.png'
import cjyIcon from '../assets/images/cjyIcon.png'
import flzxIcon from '../assets/images/flzxIcon.png'
import xykIcon from '../assets/images/xykIcon.png'
export default {
  name: 'Service',
  components: {
  },
  data () {
    return {
      title: '旅行服务',
      serList: [
        {
          title: '酒店预订',
          tip: '收单送50',
          icon: jdydIcon
        },
        {
          title: '航班动态',
          tip: '延误提醒',
          icon: hbdtIcon
        },
        {
          title: '企业服务',
          tip: '高效便捷',
          icon: qyfwIcon
        }
      ],
      manList: [
        {
          title: '出行装备',
          icon: cxzbIcon
        },
        {
          title: '积分兑换',
          icon: jfdhIcon
        },
        {
          title: '火车订餐',
          icon: hcdcIcon
        },
        {
          title: '出境游',
          icon: cjyIcon
        },
        {
          title: '福利中心',
          icon: flzxIcon
        },
        {
          title: '信用卡',
          icon: xykIcon
        }
      ]
    }
  },
  computed: {
  },
  methods: {
  },
  
}
</script>

<style scoped lang = "less">
  .service {
    .tab-list {
      float: left;
      width: 33.33%;
      padding: .5rem 0
    }
  }
</style>
