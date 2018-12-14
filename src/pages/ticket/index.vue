<template>
  <div class="co-Page co-flex co-ver" style="overflow: hidden">
    <van-tabs :active="active" @change="onChange">
      <van-tab title="火车票">
      </van-tab>
      <van-tab title="飞机票">
      </van-tab>
    </van-tabs>
    <scroll-view
    scroll-y
    bindscrolltoupper="topR"
    class="co-f1 co-flex"
    style="height: 100rpx"
    >
     <ticket-list :ticket-list="ticketList"></ticket-list>
    </scroll-view>
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
      active: 0
    }
  },
  computed: {
    ...mapState([
      'ticketList'
    ])
  },
  methods: {
    onChange (event) {
      console.log(event.mp.detail.index)
    },
    ...mapMutations({
      getTicketList: 'getTicketList'
    }),
  },
  created () {
  },
  mounted () {
    this.getTicketList();
  },
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
