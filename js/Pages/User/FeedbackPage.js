import React, { Component, PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationItem, CommonInputText, FeedbackModal } from '../../Components'
import { Heading2 } from '../../Components/Text'
import theme from '../../Constants/theme'
import px2dp from '../../Utils/px2dp'

class StartPage extends Component {

  static propTypes = {
    navigation: PropTypes.object
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: (<Heading2 style={styles.headerTitle}>意见反馈</Heading2>),
    headerLeft: (<View />),
    headerRight: (<NavigationItem title={'提交'} onPress={() => { }} titleStyle={{color: 'white'}} />),
    headerStyle: {backgroundColor: theme.userHeader}
  })

  componentDidMount () {
    this.modal._setModalVisible()
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.formContent}>
          <CommonInputText
            containerStyle={{ height: px2dp(50) }}
            style={{ backgroundColor: 'white' }}
            textInputStyle={{height: px2dp(50), paddingLeft: 0, fontSize: px2dp(15)}}
            placeholder='标题'
            onChangeText={(picCaptcha) => this.setState({ picCaptcha })} />
          <CommonInputText
            containerStyle={{ height: px2dp(300) }}
            style={{ backgroundColor: 'white' }}
            textInputStyle={{height: px2dp(300), paddingLeft: 0}}
            labelText='反馈详情'
            placeholder='请留下详细描述'
            onChangeText={(picCaptcha) => this.setState({ picCaptcha })} />
          <CommonInputText
            containerStyle={{ height: px2dp(200) }}
            style={{ backgroundColor: 'white' }}
            textInputStyle={{height: px2dp(200), paddingLeft: 0}}
            labelText='联系方式'
            placeholder='请留下常用联系方式'
            onChangeText={(picCaptcha) => this.setState({ picCaptcha })} />
        </View>
        <FeedbackModal ref={(ref) => (this.modal = ref)} titleText={'如果喜欢，请给我们5星评价，我们会再接再厉，不放弃治疗~~~'} image={require('../../Assets/v3icon.png')} />
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
  formContent: {
    padding: px2dp(20)
  }
})

export default StartPage
