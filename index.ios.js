/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import configStore from './js/Redux/store'
import Navigation from './js/App'

const store = configStore()

export default class MyApp extends Component {
  render () {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp)
