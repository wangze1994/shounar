import { combineReducers } from 'redux'
import dataReducer from './data'
import {MainStackNavigationReducer} from './navigation.js'

export default combineReducers({
  data: dataReducer,
  naviMainStack: MainStackNavigationReducer
})
