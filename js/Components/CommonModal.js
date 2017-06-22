
import React, { PureComponent, PropTypes } from 'react'
import { View, Text, Modal, StyleSheet, TouchableHighlight } from 'react-native'
import { Heading1, Paragraph } from '../Components/Text'
import theme from '../Constants/theme'
import px2dp from '../Utils/px2dp'

export default class CommonModal extends PureComponent {

  static propTypes = {
    upgrade: PropTypes.array,
    cancelBtnText: PropTypes.string,
    okBtnText: PropTypes.string,
    titleText: PropTypes.string,
    onOk: PropTypes.func
  }

  static defaultProps = {
    upgrade: [],
    cancelBtnText: '',
    okBtnText: '更新',
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

  renderCancel (cancelBtnText) {
    let cancel = cancelBtnText
      ? <TouchableHighlight underlayColor='transparent'
        style={styles.buttonStyle}
        onPress={this._setModalVisible}>
        <Text style={[styles.buttonText, {color: '#333'}]}>{cancelBtnText}</Text>
      </TouchableHighlight>
      : null
    return cancel
  }

  renderVerticalLine (cancelBtnText) {
    let verticalLine = cancelBtnText ? <View style={styles.verticalLine} /> : null
    return verticalLine
  }

  render () {
    let { cancelBtnText, okBtnText, onOk, upgrade, titleText } = this.props
    return (
      <Modal
        animationType='fade'
        transparent
        visible={this.state.show}
        onShow={() => {}}
        onRequestClose={() => {}} >
        <View style={styles.modalStyle}>
          <View style={styles.subView}>
            <Heading1 style={styles.titleText}>{titleText}</Heading1>
            {upgrade.map((item, index) => (<Paragraph key={index} style={styles.contentText}>{item}</Paragraph>))}
            <View style={styles.horizontalLine} />
            <View style={styles.buttonView}>
              {this.renderCancel(cancelBtnText)}
              {this.renderVerticalLine(cancelBtnText)}
              <TouchableHighlight underlayColor='transparent'
                style={styles.buttonStyle}
                onPress={onOk}>
                <Text style={styles.buttonText}>{okBtnText}</Text>
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
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: theme.onePixel,
    borderColor: '#ccc'
  },
  // 标题
  titleText: {
    marginTop: px2dp(10),
    marginBottom: px2dp(5),
    fontSize: px2dp(16),
    fontWeight: 'bold',
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
  // 竖直的分割线
  verticalLine: {
    width: theme.onePixel,
    height: px2dp(44),
    backgroundColor: '#ccc'
  },
  buttonText: {
    fontSize: px2dp(16),
    color: '#FF8E56',
    textAlign: 'center'
  }
})
