import React, { Component, PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationItem, CommonButton, CommonInputText, Separator, TextButton} from '../../Components'
import { Heading2 } from '../../Components/Text'
import theme from '../../Constants/theme'
import px2dp from '../../Utils/px2dp'

class OtherLoginPage extends Component {

  static propTypes = {
    navigation: PropTypes.object
  }

  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <View style={{marginLeft: px2dp(10)}}>
        <NavigationItem title={'一键登录'} onPress={() => { }} titleStyle={{ color: 'white' }} />
      </View>),
    headerRight: (
      <View>
        <NavigationItem title={'注册'} onPress={() => { }} titleStyle={{ color: 'white' }} />
      </View>),
    headerStyle: {backgroundColor: theme.userHeader}
  })
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.inputContent}>
          <CommonInputText
            containerStyle={{height: px2dp(50)}}
            style={{backgroundColor: 'white', width: theme.screenWidth, marginTop: 0}}
            placeholder='邮箱'
            textInputStyle={{textAlign: 'center'}}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })} />
          <Separator />
          <CommonInputText
            containerStyle={{height: px2dp(50)}}
            style={{backgroundColor: 'white', width: theme.screenWidth, marginTop: 0}}
            placeholder='密码'
            textInputStyle={{textAlign: 'center'}}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })} />
          <Separator />
        </View>
        <View style={styles.buttonContent}>
          <CommonButton containerStyle={styles.registerButton} onPress={() => { }} text='注册' textStyle={{fontSize: px2dp(20)}} />
        </View>
        <View style={styles.textContent}>
          <TextButton text={'忘记？'} fontSize={16} color={'#CCCCCC'} />
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
    backgroundColor: 'white',
    alignItems: 'center'
  },
  registerButton: {
    backgroundColor: theme.userHeader,
    width: px2dp(300),
    height: px2dp(50),
    borderRadius: 5
  },
  buttonContent: {
    marginTop: px2dp(25)
  },
  textContent: {
    marginTop: px2dp(25)
  }
})

export default OtherLoginPage
