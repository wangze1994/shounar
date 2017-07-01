import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { NavigationItem, Cell, Scan } from '../../Components'
import { Heading2, Paragraph } from '../../Components/Text'
import theme from '../../Constants/theme'
import px2dp from '../../Utils/px2dp'
var ImagePicker = require('react-native-image-picker')

var photoOptions = {
    // 底部弹出框选项
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选取图片',
  quality: 0.75,
  customButtons: [
    {name: 'scan', title: '图书扫码'}
  ],
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

class AddGoodPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      showMore: true,
      star: 3,
      avatarSource: ''
    }
    this.showMore = this.showMore.bind(this)
  }

  static propTypes = {
    navigation: PropTypes.object
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: (<Heading2 style={styles.headerTitle}>添加</Heading2>),
    headerLeft: (<View />),
    headerRight: (<NavigationItem title={'确认'} onPress={() => { }} titleStyle={{color: 'white'}} />),
    headerStyle: {backgroundColor: theme.userHeader}
  })

  showMore () {
    this.setState((preState) => ({
      showMore: !preState.showMore
    }))
  }

  openImagePicker () {
    ImagePicker.showImagePicker(photoOptions, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        this.props.navigation.navigate('ScanBarCode')
        console.log('User tapped custom button: ', response.customButton)
      } else {
        let source = { uri: response.uri }
        console.log('User choose a photo: ', response.uri)
        this.setState({
          avatarSource: source
        })
      }
    })
  }

  renderStar () {
    let starArr = []
    let { star } = this.state
    for (let i = 0; i < 5; i++) {
      let item = (<TouchableWithoutFeedback onPress={() => this.setState({star: (i + 1)})} key={i}>
        <Image style={styles.star} source={star > i ? require('../../Assets/star.png') : require('../../Assets/star_empty.png')} resizeMode='contain' />
      </TouchableWithoutFeedback>)
      starArr.push(item)
    }
    return starArr
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.photoContent}>
          <TouchableOpacity style={styles.addContainer} onPress={() => this.openImagePicker()}>
            {
              this.state.avatarSource
              ? <Image style={styles.photo} source={this.state.avatarSource} resizeMode='contain' />
              : <Image style={styles.icon} source={require('../../Assets/add_icon.png')} resizeMode='contain' />
            }
          </TouchableOpacity>
        </View>
        <Cell icon={require('../../Assets/name_icon.png')} style={{paddingLeft: 5}} title={'名称'} onPress={() => {}} subtitle={'物品名称'} next titleStyle={{ fontSize: 15, color: '#BFBFBF' }} borderStyle={{ paddingLeft: 30, paddingRight: 0 }} />
        <TouchableOpacity style={styles.buttonContainer} onPress={this.showMore}>
          <View style={styles.buttonContent}>
            <Paragraph style={{ color: '#999999', fontSize: px2dp(12) }}>{this.state.showMore ? '收起' : '展开' }</Paragraph>
          </View>
        </TouchableOpacity>
        {this.state.showMore ? <View>
          <Cell icon={require('../../Assets/title_star.png')} style={{ paddingLeft: 5 }} title={'星级'} onPress={() => { }} other={this.renderStar()} titleStyle={{ fontSize: 15, color: '#BFBFBF' }} borderStyle={{ paddingLeft: 30, paddingRight: 0 }} />
          <Cell icon={require('../../Assets/tag_icon.png')} style={{ paddingLeft: 5 }} title={'物品分类'} onPress={() => { }} next titleStyle={{ fontSize: 15, color: '#BFBFBF' }} borderStyle={{ paddingLeft: 30, paddingRight: 0 }} />
          <Cell icon={require('../../Assets/cart_icon.png')} style={{ paddingLeft: 5 }} title={'购买(获得)渠道'} onPress={() => { }} next titleStyle={{ fontSize: 15, color: '#BFBFBF' }} borderStyle={{ paddingLeft: 30, paddingRight: 0 }} />
          <Cell icon={require('../../Assets/color_icon.png')} style={{ paddingLeft: 5 }} title={'颜色'} onPress={() => { }} next titleStyle={{ fontSize: 15, color: '#BFBFBF' }} borderStyle={{ paddingLeft: 30, paddingRight: 0 }} />
          <Cell icon={require('../../Assets/price_icon.png')} style={{ paddingLeft: 5 }} title={'价格'} onPress={() => { }} next titleStyle={{ fontSize: 15, color: '#BFBFBF' }} borderStyle={{ paddingLeft: 30, paddingRight: 0 }} />
          <Cell icon={require('../../Assets/season_icon.png')} style={{ paddingLeft: 5 }} title={'季节'} onPress={() => { }} next titleStyle={{ fontSize: 15, color: '#BFBFBF' }} borderStyle={{ paddingLeft: 30, paddingRight: 0 }} />
          <Cell icon={require('../../Assets/tab_icon.png')} style={{ paddingLeft: 5 }} title={'其他'} onPress={() => { }} next titleStyle={{ fontSize: 15, color: '#BFBFBF' }} borderStyle={{ paddingLeft: 30, paddingRight: 0 }} />
        </View> : null}
        <View />
      </ScrollView>
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
  photoContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: px2dp(28),
    paddingBottom: px2dp(21)
  },
  addContainer: {
    height: px2dp(180),
    width: px2dp(180),
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  icon: {
    width: px2dp(30),
    height: px2dp(30)
  },
  photo: {
    width: px2dp(170),
    height: px2dp(170)
  },
  star: {
    width: px2dp(30),
    height: px2dp(30)
  },
  buttonContainer: {
    paddingTop: px2dp(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContent: {
    paddingLeft: px2dp(40),
    paddingRight: px2dp(40),
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50
  }
})

export default AddGoodPage
