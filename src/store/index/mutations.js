import * as types from './mutations-type.js'
import $ajax from '../../assets/js/ajax.js'
import API_LIST from '../../assets/js/config.js'

const matations = {
  async [types.getTicketList] (state, data) {
    const REQ_PARAMS = {
      url: API_LIST.ticket_list
    }
    const DATA = await $ajax.get(REQ_PARAMS)
    state.ticketList = DATA.data.map(item => {
      return {
        ...item,
        sTime: item.sTime.substring(0, 5),
        eTime: item.eTime.substring(0, 5)
      }
    })
  }
}
export default matations
