import React, { Component, PropTypes } from 'react'
import { View, StatusBar } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import codePush from 'react-native-code-push'
import {MainStackNavigation} from './Navigation'

const mapStateToProps = (state) => {
  return {
    navigationState: state.naviMainStack
  }
}

class RootScene extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigationState: PropTypes.object.isRequired
  }
  render () {
    const { dispatch, navigationState } = this.props
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor='#6BA430'
          barStyle='light-content'
           />
        <MainStackNavigation navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        } />
      </View>
    )
  }
}
/**
 * Configured with a MANUAL check frequency for easy testing. For production apps, it is recommended to configure a
 * different check frequency, such as ON_APP_START, for a 'hands-off' approach where CodePush.sync() does not
 * need to be explicitly called. All options of CodePush.sync() are also available in this decorator.
 */
let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
}

const AppContainer = codePush(codePushOptions)(RootScene)

export default connect(mapStateToProps, null)(AppContainer)
