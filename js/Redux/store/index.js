import reducers from '../reducers'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'
import { AsyncStorage } from 'react-native'
import requestMiddleware from '../middleware/requestMiddleware.js'

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true
})

let middlewares = [thunk, requestMiddleware]

if (isDebuggingInChrome) {
  middlewares.push(logger)
}

export default function configStore () {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  const store = autoRehydrate()(createStoreWithMiddleware)(reducers)
  persistStore(store, {storage: AsyncStorage, blacklist: ['naviMainStack']})

  return store
}
