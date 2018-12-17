<template>
  <div class="co-f1 co-flex co-ver col-1 ticket-detail">
    <ScrollList>
      <div>
        <div class = "co-flex co-ac co-pd-a08 col-fff" style = "background: rgb(72, 137, 219); padding: 40rpx; color: #fff">
          <div class = "co-f1">
            <div class = "co-fs-2">{{ ticketDetail.sCity }}</div>
            <div class = "co-pd-tb08" style="padding: 30rpx 0">{{ ticketDetail.sTime }}</div>
            <div>高铁 {{ ticketDetail.speed }}km/h</div>
          </div>
          <div class = "co-f1 co-tx-c co-fs-01">
            <div>G410</div>
            <div class = "co-pd-t04" style="padding-top: 16rpx">{{ ticketDetail.number }}站</div>
            <div class = "co-pd-t04" style="padding-top: 16rpx">{{ ticketDetail.needHour }}小时{{ ticketDetail.needMin }}分</div>
            <div class = "co-pd-t04" style="padding-top: 16rpx">准点率 {{ ticketDetail.percent }}</div>
          </div>
          <div class = "co-f1 co-tx-r">
            <div class = "co-fs-2">{{ ticketDetail.eCity }}</div>
            <div class = "co-pd-tb08"  style="padding: 30rpx  0">{{ ticketDetail.eTime }}</div>
            <div>{{ ticketDetail.type }}</div>
          </div>
        </div>
        <div v-for = "(item, index) in ticketDetail.ticket" :key = "index">
          <div  class = "co-flex co-ac co-pd-a06 co-bg-0 co-bd-b" style="padding: 20rpx 30rpx">
            <div style = "width: 200rpx">{{ item.name }}</div>
            <div class = "co-f1">￥{{ item.money }}</div>
            <div class = "co-f1">{{ item.number }}</div>
            <div @click = "currentIndex = currentIndex === index ? -1: index" :class="['col-0 co-fs-01 co-br-a0 co-bg-6', {'active-bg co-cl-7': index === currentIndex}]"  style = "padding: 10rpx 20rpx">
                预定
            </div>
          </div>
          <div class = "slide-in col-2" v-show=" currentIndex === index">
            <div class = "co-flex co-pd-lr06 co-jsb co-ac co-bd-b" style = " padding: 20rpx 30rpx; border-bottom: 1rpx #ccc solid">
              <div class = "co-fs-01">
                <div class = "co-cl-7">12306预定</div>
                <div class = "co-mg-t04">实时出票，在线退票，改签</div>
              </div>
              <div class = "co-bg-6 col-0 co-fs-01 co-br-a0" style = "padding: 10rpx 20rpx; background: #4889db">
                  预定
              </div>
            </div>
            <div class = "co-flex co-pd-lr06 co-jsb co-ac co-bd-b" style =  "padding: 20rpx 30rpx">
              <div class = "co-fs-01">
                <div class = "co-cl-7">管家代购</div>
                <div class = "co-mg-t04">若多次服务异常或无账号，可尝试代购</div>
              </div>
              <div class = "col-0 co-fs-01 co-br-a0" style = "padding: 10rpx 20rpx; background: #4889db">
                  预定
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollList>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex' 
export default {
  name: 'ticketDetail',
  components: {
  },
  data () {
    return {
      currentIndex: ''
    }
  },
  computed: {
    ...mapState([
      'ticketDetail'
    ])
  },
  methods: {
    ...mapMutations([
      'getTicketDetail'
    ]),
  },
  onLoad () {
  },
  mounted() {
    this.getTicketDetail(this.$root.$mp.query.id);
  },
}
</script>

<style scoped lang = "less">
  .ticket-detail {
    .co-mg-t04 {
      margin-top: 20rpx
    }
    .co-bd-b {
      border-bottom: 1rpx #ccc solid
    }
    .co-fs-01 {
      font-size: 24rpx
    }
    .active-bg {
      background: #ccc
    }
    .co-br-a0 {
      border-radius: 10rpx
    }
    .co-bg-6 {
      background:#4889db
    }
  }
</style>
