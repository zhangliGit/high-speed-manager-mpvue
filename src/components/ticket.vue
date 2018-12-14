<template>
    <div class="ticket">
      <div class="co-flex col-1 bg-fff" style="padding: 20rpx 0">
        <div class="co-f1 co-flex co-ver co-jc co-ac" v-for = "(item, index) in tabList" :key = "index">
          <img :src="item.img" class="imgIcon" alt="" />
          <div class="col333" style="font-size: 24rpx; margin-top: 8rpx">{{ item.name }}</div>
        </div>
      </div>
      <div class = "bg-fff" style = "border-radius:3rpx; -webkit-border-radius: 3px; margin: 20rpx; padding: 30rpx">
        <div class = "co-flex co-jsb co-bd-b co-ac co-pd-b08">
          <div class = "col-2" style="font-size: 38rpx;">
            广州
          </div>
          <div class = "">
            <img :src = "change" alt = ""  style= "width: 36rpx; height: 36rpx;display: block" />
          </div>
          <div class = "col-2" style="font-size: 38rpx">
            武汉
          </div>
        </div>
        <div class = "co-flex co-jsb co-pd-tb1" style="padding: 40rpx 0">
          <div class = "co-flex co-ac">
            <span class = "col-1" style="font-size: 32rpx">11月13日</span>
            <span class = "col-1" style="padding-left: 10rpx">星期五</span>
          </div>
          <div>学生</div>
        </div>
        <div @click = "searchList" class = "co-f1 col-0" style = "background: #4889db; border-radius:3rpx; -webkit-border-radius: 3px; padding: 16rpx; text-align: center">搜索</div>
      </div>
      <div class = "bg-fff co-flex col-1" style="padding: 20rpx 10rpx 20rpx 0">
        <div v-for = "(item, index) in menuList" :key = "index" class = "co-f1 co-flex co-ver co-ac co-jc co-mg-l04 co-pd-tb04" style = "background: #f8fbff; padding: 10rpx; margin-left: 10rpx">
          <div class = "co-flex co-jc">
            <img :src = "item.icon" alt = "" class="imgIcon" />
          </div>
          <div class="col333" style="font-size: 24rpx; margin-top: 8rpx">{{ item.title }}</div>
        </div>
      </div>
    </div>
</template>

<script>
import hljx from '../assets/images/hljx.png'
import hlzc from '../assets/images/hlzc.png'
import jp from '../assets/images/jp.png'
import jd from '../assets/images/jd.png'
import qcp from '../assets/images/qcp.png'
import change from '../assets/images/change.png'
import zwd from '../assets/images/zwd.png'
import hlpc from '../assets/images/hlpc.png'
import xycx from '../assets/images/xycx.png'
import dc from '../assets/images/dc.png'
export default {
  name: 'Ticket',
  components: {
  },
  data () {
    return {
      change,
      title: '首页',
      current: 0,
      tabList: [
        {
          img: hljx,
          name: '伙力精选'
        },
        {
          img: hlzc,
          name: '伙力专车'
        },
        {
          img: jp,
          name: '机票'
        },
        {
          img: jd,
          name: '酒店'
        },
        {
          img: qcp,
          name: '汽车票'
        },
      ],
      menuList: [
        {
          title: '正晚点',
          icon: zwd
        },
        {
          title: '火力拼车',
          icon: hlpc
        },
        {
          title: '信用出行',
          icon: xycx
        },
        {
          title: '订餐',
          icon: dc
        }
      ],
      footer: [
        {
          icon: "icon-huoche",
          title: '车票预定'
        },
        {
          icon: "icon-lishihangcheng",
          title: '我的行程'
        },
        {
          icon: "icon-lvxingxiang",
          title: '旅行服务'
        },
        {
          icon: "icon-geren",
          title: '个人中心'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    searchList () {
      const url = "../ticket/main?id=2";
      wx.navigateTo({url});
    }
  },
  
}
</script>

<style scoped lang = "less">
  .ticket {
    .imgIcon {
      width: 60rpx;
      height: 60rpx;
      display: block;
    }
    .hImg {
      width: 100%;
      height: 200rpx;
      display: block
    }
    .mg-t20 {
      margin-top: 20rpx
    }
  }
</style>
