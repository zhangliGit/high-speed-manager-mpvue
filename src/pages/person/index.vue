<template>
  <div class="co-Page co-flex co-ver" style="overflow: hidden">
    <scroll-view
    scroll-y
    class="co-f1 co-flex"
    style="height: 100rpx"
    >
      <Person></Person>
    </scroll-view>
    <!-- <div id="footer" style="height: 100rpx; color: rgb(131, 131, 131); border-top: 1rpx solid #f5f5f5" class="co-flex co-ac bg-fff">
      <div @click="changePage(index)" class="co-flex co-f1 co-ver co-ac co-jc" v-for="(item, index) in footer" :key="index">
        <div style="width: 44rpx; height: 44rpx;">
          <i :class="'icon iconfont ' + item.icon " style="font-size: 40rpx"></i>
        </div>
        <div style="margin-top: 4rpx; font-size: 24rpx">{{item.title}}</div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Person from '@/components/person.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    Person
  },
  data () {
    return {
      // footer: [
      //   {
      //     icon: 'icon-huoche',
      //     title: '车票预定'
      //   },
      //   {
      //     icon: 'icon-lishihangcheng',
      //     title: '我的行程'
      //   },
      //   {
      //     icon: 'icon-lvxingxiang',
      //     title: '旅行服务'
      //   },
      //   {
      //     icon: 'icon-geren',
      //     title: '个人中心'
      //   }
      // ],
    }
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  methods: {
    changePage (index) {
      this.currentIndex = index
    },
    ...mapMutations({
      SET_NAME: 'SET_NAME'
    }),
  },
  created () {
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
