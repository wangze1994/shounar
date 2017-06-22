
import React, { PureComponent, PropTypes } from 'react'
import { View, Text, Modal, StyleSheet, TouchableHighlight, Image } from 'react-native'
import { Paragraph } from '../Components/Text'
import theme from '../Constants/theme'
import px2dp from '../Utils/px2dp'

export default class CommonModal extends PureComponent {

  static propTypes = {
    cancelBtnText: PropTypes.string,
    okBtnText: PropTypes.string,
    titleText: PropTypes.string,
    onOk: PropTypes.func,
    imageStyle: Image.propTypes.style,
    image: Image.propTypes.source
  }

  static defaultProps = {
    cancelBtnText: '无视，默默地关掉',
    okBtnText: '去喂药，请坚强的活下去',
    titleText: '新版本',
    onOk: () => { }
  }

  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
    this._setModalVisible = this._setModalVisible.bind(this)
  }

  // 显示/隐藏 modal
  _setModalVisible () {
    let isShow = this.state.show
    this.setState({
      show: !isShow
    })
  }

  render () {
    let { cancelBtnText, okBtnText, onOk, titleText, image } = this.props
    return (
      <Modal
        animationType='fade'
        transparent
        visible={this.state.show}
        onShow={() => {}}
        onRequestClose={() => {}} >
        <View style={styles.modalStyle}>
          <View style={styles.subView}>
            <Paragraph style={styles.titleText}>{titleText}</Paragraph>
            <Image style={[styles.image, this.props.imageStyle]} source={image} resizeMode='stretch' />
            <View style={styles.horizontalLine} />
            <View style={styles.buttonView}>
              <TouchableHighlight underlayColor='transparent'
                style={styles.buttonStyle}
                onPress={onOk}>
                <Text style={styles.buttonText}>{okBtnText}</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.buttonView}>
              <TouchableHighlight underlayColor='transparent'
                style={styles.buttonStyle}
                onPress={this._setModalVisible}>
                <Text style={[styles.buttonText, {color: '#BFBFBF'}]}>{cancelBtnText}</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

// css样式
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECF0'
  },
  // modal的样式
  modalStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  // modal上子View的样式
  subView: {
    marginLeft: px2dp(50),
    marginRight: px2dp(50),
    paddingTop: px2dp(20),
    paddingLeft: px2dp(20),
    paddingRight: px2dp(20),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: theme.onePixel,
    borderColor: '#ccc'
  },
  image: {
    height: px2dp(100),
    width: px2dp(100),
    marginTop: px2dp(20),
    marginBottom: px2dp(40)
  },
  // 标题
  titleText: {
    marginTop: px2dp(10),
    marginBottom: px2dp(5),
    fontSize: px2dp(16),
    textAlign: 'center'
  },
  // 内容
  contentText: {
    marginTop: px2dp(8),
    marginBottom: px2dp(8),
    marginLeft: px2dp(16),
    marginRight: px2dp(16)
  },
  // 水平的分割线
  horizontalLine: {
    marginTop: px2dp(5),
    height: theme.onePixel,
    backgroundColor: '#ccc'
  },
  // 按钮
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonStyle: {
    flex: 1,
    height: px2dp(44),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: px2dp(16),
    color: theme.userHeader,
    textAlign: 'center'
  }
})
