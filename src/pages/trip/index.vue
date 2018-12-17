<template>
  <div class="co-Page co-flex co-ver" style="overflow: hidden">
    <my-trip :trip-list = "tripNewList"  @getTripList = "getTripList"></my-trip>
  </div>
</template>

<script>
import MyTrip from '../../components/myTrip.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    MyTrip
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'tripNewList'
    ])
  },
  methods: {
    ...mapMutations([
      'getTripList'
    ]),
  },
  created () {
  },
  mounted() {
    this.getTripList(0)
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
