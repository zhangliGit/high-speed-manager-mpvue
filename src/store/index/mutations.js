import $ajax from '../../assets/js/ajax.js'
import API_LIST from '../../assets/js/config.js'

const matations = {
  /**
   * @description 获取火车票列表
   * @param state 数据
   * @param val 参数
   */
  async getTicketList (state, val) {
    const REQ_PARAMS = {
      url: API_LIST.ticket_list
    }
    const DATA = await $ajax.get(REQ_PARAMS)
    const listData = DATA.data.map(item => {
      return {
        ...item,
        sTime: item.sTime.substring(0, 5),
        eTime: item.eTime.substring(0, 5)
      }
    })
    if (val === 0) {
      state.ticketList = listData
    } else {
      state.ticketList = state.ticketList.concat(listData)
    }
  },
  /**
   * @description 获取火车票详情
   * @param state 数据
   * @param val 参数
   */
  async getTicketDetail (state, val) {
    const REQ_PARAMS = {
      url: API_LIST.ticket_detail
    }
    const DATA = await $ajax.get(REQ_PARAMS)
    state.ticketDetail = DATA.data
  },
  /**
   * @description 获取旅行新闻
   * @param state 数据
   */
  async getTripList (state, val) {
    const REQ_PARAMS = {
      url: API_LIST.trip_new_list
    }
    const DATA = await $ajax.get(REQ_PARAMS)
    if (val === 0) {
      state.tripNewList = DATA.data
    } else {
      state.tripNewList = state.tripNewList.concat(DATA.data)
    }
  }
}
export default matations
