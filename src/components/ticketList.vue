<template>
    <div>
      <div class = "bg-fff" style="padding: 16rpx; margin-bottom: 8rpx" v-for = "(item, index) in ticketList"  :key = "index" @click="goDetail(item.id)">
        <div class = "co-flex co-ac" style="padding: 16rpx;">
          <div class = "co-f1 co-fs-2 co-cl-7">{{ item.sTime }}</div>
          <div class = "co-f1 co-tx-c co-cl-1 co-fs-01">-- {{ item.needHour }}时{{ item.needMin }}分 --</div>
          <div class = "co-f1 co-fs-2 co-tx-r co-cl-7">{{ item.eTime }}</div>
          <div class="slideRit">￥{{ item.money }}</div>
        </div>
        <div class = "co-flex col-1" style="padding: 16rpx; font-size: 24rpx">
          <div class = "co-f1">{{ item.sCity }}</div>
          <div class = "co-f1 co-tx-r">{{ item.eCity }}</div>
          <div class="slideRit">{{ item.level }}</div>
        </div>
        <div class = "co-flex co-pd-tb04 co-jsb" style="padding: 16rpx">
          <div>{{ item.gCode }}</div>
          <div class="slideRit">可抢票</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ticketList',
  components: {
  },
  props: {
    ticketList: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    goDetail (id) {
      const url = `../detail/main?id=${id}`
      wx.navigateTo({ url })
    }
  },
  mounted() {
  },
}
</script>

<style scoped lang = "less">
  .slideRit {
      width: 150rpx;
      text-align: right
  }
</style>
