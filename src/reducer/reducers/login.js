import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const { Types, Creators } = createActions({
  loginRequest: ['username', 'password']
})

const INITIAL_STATE = Immutable({
  isLogin: false,
})

export default createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: (state = INITIAL_STATE, data) => {
    return state.merge({...data})
  }
})