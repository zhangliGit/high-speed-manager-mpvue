<template>
  <div class="co-Page co-flex co-ver">
    <div style="position: fixed; height: 88rpx; z-index:99; top: 0; left:0; width: 100%">
      <van-tabs :active="active" @change="onChange">
        <van-tab title="火车票">
        </van-tab>
        <van-tab title="飞机票">
        </van-tab>
      </van-tabs>
    </div>
    <div class="co-f1" style="padding-top: 88rpx">
      <ticket-list :ticket-list="ticketList"></ticket-list>
    </div>
  </div>
</template>

<script>
import TicketList from '../../components/ticketList.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    TicketList
  },
  data () {
    return {
      scrollTop: 60,
      active: 0,
      scrollh: 600
    }
  },
  computed: {
    ...mapState([
      'ticketList'
    ])
  },
  onPullDownRefresh ()  {
    this.getTicketList(0)
  },
  onReachBottom () {
    this.getTicketList(1)
  },
  methods: {
    onChange (event) {
    },
    ...mapMutations([
      'getTicketList'
    ]),
  },
  created () {
  },
  mounted () {
    this.getTicketList(0)
  }
}
</script>

<style scoped>
.co-Page {
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 100%;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
