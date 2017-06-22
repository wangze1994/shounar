import React, { Component, PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import { Cell } from '../../Components'
import { Heading2 } from '../../Components/Text'
import theme from '../../Constants/theme'
import px2dp from '../../Utils/px2dp'

class AccountInfoPage extends Component {

  static propTypes = {
    navigation: PropTypes.object
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: (<Heading2 style={styles.headerTitle}>账号信息</Heading2>),
    headerStyle: {backgroundColor: theme.userHeader}
  })
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.baseInfo} >
          <Cell title={'微信号'} onPress={() => { }} subtitle={'mkdsadas'} titleStyle={{ fontSize: 15, color: '#BFBFBF' }} borderStyle={{ paddingRight: 0 }} />
          <Cell subtitle={'544393418@qq.com'} title={'你的名字'} onPress={() => { }} titleStyle={{ fontSize: 15, color: '#BFBFBF' }} borderStyle={{ paddingRight: 0 }} />
        </View>
        <View style={styles.actionInfo} >
          <Cell title={'绑定手机'} subtitle={'135****4904'} next onPress={() => { }} titleStyle={{ fontSize: 15, color: '#BFBFBF' }} borderStyle={{ paddingRight: 0 }} />
          <Cell title={'修改密码'} next onPress={() => { }} titleStyle={{ fontSize: 15, color: '#BFBFBF' }} borderStyle={{ paddingRight: 0 }} />
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
    flex: 1
  },
  baseInfo: {
    marginTop: px2dp(15)
  },
  actionInfo: {
    marginTop: px2dp(15)
  }
})

export default AccountInfoPage
