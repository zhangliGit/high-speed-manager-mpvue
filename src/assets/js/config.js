const HOST_URL = 'https://xiaoyueyue.com.cn:8888/'

/**
 * 车牌预定
 */
const TICKET_API = {
  ticket_list: `${HOST_URL}ticketList`,
  ticket_detail: `${HOST_URL}ticketDetail`
}

/**
 * 我的行程
 */
const TRIP_API = {
  trip_new_list: `${HOST_URL}tripNews`
}

/**
 * 个人中心
 */
const PERSON_API = {
  rider_list: `${HOST_URL}riderList`
}
const API_LIST = {
  ...TICKET_API,
  ...TRIP_API,
  ...PERSON_API
}
export default API_LIST
