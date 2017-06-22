import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Cell } from '../Components'
import { Paragraph } from '../Components/Text'
import theme from '../Constants/theme'
import px2dp from '../Utils/px2dp'

class FindPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (<Paragraph style={styles.headerTitle}>我</Paragraph>),
    headerStyle: { backgroundColor: theme.userHeader, shadowOpacity: 0, elevation: 0 },
    tabBarLabel: '我',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../Assets/meicon.png')}
        style={[{ width: 25, height: 25, tintColor: tintColor }]}
      />
    )
  })
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.baseInfo} >
          <Cell image={require('../Assets/chakan_icon@2x.png')} icon={require('../Assets/index_box_icon.png')} title={'头像'} onPress={() => { }} />
          <Cell icon={require('../Assets/nicheng_icon.png')} subtitle={'昵称'} title={'你的名字'} onPress={() => { }} />
          <Cell icon={require('../Assets/xingbie_icon.png')} title={'性别'} next onPress={() => { }} />
          <Cell icon={require('../Assets/shengri_icon.png')} title={'生日'} next onPress={() => { }} />
        </View>
        <View style={styles.accountInfo}>
          <Cell title={'账号信息'} next onPress={() => { }} />
        </View>
        <View style={styles.helpInfo}>
          <Cell title={'意见反馈'} next onPress={() => { }} />
          <Cell title={'帮助与好评'} next onPress={() => { }} />
          <Cell title={'给我们好评'} next onPress={() => { }} />
        </View>
        <View style={styles.quit}>
          <Cell title={'退出登录'} onPress={() => { }} style={{justifyContent: 'center'}} center />
        </View>
      </View>
    )
  }
}

FindPage.propTypes = {

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
    marginTop: 10,
    marginBottom: 10
  },
  accountInfo: {
    marginBottom: 10
  },
  helpInfo: {
    marginBottom: 10
  }
})

export default FindPage
