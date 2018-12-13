import * as types from './mutations-type.js'
const matations = {
  [types.SET_NAME] (state, v) {
    state.name = v
  }
}
export default matations
