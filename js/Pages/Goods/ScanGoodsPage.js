import React, { Component, PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationItem, CommonButton } from '../../Components'
import { Heading2 } from '../../Components/Text'
import theme from '../../Constants/theme'
import px2dp from '../../Utils/px2dp'

class StartPage extends Component {

  static propTypes = {
    navigation: PropTypes.object
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: (<Heading2 style={styles.headerTitle}>登录</Heading2>),
    headerRight: (<NavigationItem title={'关闭'} onPress={() => { }} />),
    headerStyle: {backgroundColor: theme.userHeader}
  })
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContent}>
          <CommonButton containerStyle={styles.loginButton} onPress={() => { }} text='微信登录' icon={require('../../Assets/meicon.png')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: px2dp(20)
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  loginButton: {
    backgroundColor: theme.userHeader,
    width: px2dp(260),
    height: px2dp(50),
    borderRadius: 5
  }
})

export default StartPage
