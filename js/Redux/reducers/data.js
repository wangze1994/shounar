import * as types from '../../Constants/actionType.js'
import {get} from '../../Services/request.service.js'

const initialState = {
  loading: true,
  error: null,
  data: {}
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_DATA:
      return {
        ...state,
        loading: true,
        error: null
      }
    case types.LOAD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data
      }
    case types.LOAD_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export function loadData (api) {
  return {
    types: [types.LOAD_DATA, types.LOAD_DATA_SUCCESS, types.LOAD_DATA_FAILED],
    promise: get(api)
  }
}
