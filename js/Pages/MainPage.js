import React, { Component } from 'react'
import { Image, View } from 'react-native'
import theme from '../Constants/theme'

class MainPage extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: theme.userHeader },
    tabBarLabel: '查看',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../Assets/chakan_icon@2x.png')}
        style={[{width: 25, height: 25, tintColor: tintColor}]}
      />
    )
  };
  render () {
    return (
      <View />
    )
  }
}

MainPage.propTypes = {

}

export default MainPage
