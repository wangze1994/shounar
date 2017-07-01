import React, { Component, PropTypes } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Vibration,
    TouchableOpacity,
    Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window')
import { NavigationActions } from 'react-navigation'

import { NavigationItem } from '../../Components'
import { Heading2 } from '../../Components/Text'
import theme from '../../Constants/theme'
import px2dp from '../../Utils/px2dp'

import Camera from 'react-native-camera'
import ViewFinder from '../../Components/ViewFinder'

export default class Scan extends Component {
  constructor (props) {
    super(props)
    this.camera = null
    this.state = {
      transCode: '', // 条码
      openFlash: false,
      active: true,
      flag: true
    }
    this.barcodeReceived = this.barcodeReceived.bind(this)
    this._changeFlash = this._changeFlash.bind(this)
    this.changeState = this.changeState.bind(this)
  }

  static propTypes = {
    navigation: PropTypes.object
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: (<Heading2 style={styles.headerTitle}>扫描条形码</Heading2>),
    headerRight: (<NavigationItem title={'关闭'} onPress={() => { }} />),
    headerStyle: {backgroundColor: theme.userHeader}
  })
  barcodeReceived (e) {
    if (e.data !== this.transCode) {
      Vibration.vibrate([0, 500, 200, 500])
      this.transCode = e.data // 放在this上，防止触发多次，setstate有延时
      if (this.state.flag) {
        this.changeState(false)
        const backAction = NavigationActions.back()
        this.props.navigation.dispatch(backAction)
      }
      console.log('transCode=' + this.transCode)
    }
  }
    // 开灯关灯
  _changeFlash () {
    this.setState({
      openFlash: !this.state.openFlash
    })
  }
     // 改变请求状态
  changeState (status) {
    this.setState({
      flag: status
    })
    console.log('status=' + status)
  }

  render () {
    const { openFlash, active } = this.state
    return (
      <View style={styles.allContainer}>
        {(() => {
          if (active) {
            return (
              <Camera
                ref={cam => (this.camera = cam)}
                style={styles.cameraStyle}
                barcodeScannerEnabled
                onBarCodeRead={
                                    this.barcodeReceived
                                }
                torchMode={openFlash ? 'on' : 'off'}>
                <View style={styles.centerContainer} />
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.fillView} />
                  <View style={styles.scan}>
                    <ViewFinder />
                  </View>
                  <View style={styles.fillView} />
                </View>
                <View style={styles.bottomContainer}>
                  <Text
                    style={[
                      styles.text,
                      {
                        textAlign: 'center',
                        width: 260,
                        marginTop: active ? 25 : 285
                      }
                    ]}
                    numberOfLines={2}
                                >
                                    将图书上的条码放入框内即可自动扫描。
                                </Text>
                  <TouchableOpacity onPress={this._changeFlash}>
                    <View style={styles.flash}>
                      <Text style={styles.icon}>&#xe61a;</Text>
                      <Text style={styles.text}>
                                            开灯/关灯
                                        </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </Camera>
            )
          }
        })()}
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
  allContainer: {
    flex: 1
  },
  titleContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 15
      },
      android: {
        paddingTop: 0
      }
    }),
    flexDirection: 'row'
  },
  leftContainer: {
    flex: 0,
    justifyContent: 'center'
  },
  cameraStyle: {
    alignSelf: 'center',
    width: width,
    height: height
  },
  flash: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 60
  },
  flashIcon: {
    fontSize: 1,
    color: 'white'
  },
  text: {
    fontSize: 14,
    color: 'white',
    marginTop: 5
  },
  icon: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'iconfont'
  },
  scanLine: {
    alignSelf: 'center'
  },
  centerContainer: {
    ...Platform.select({
      ios: {
        height: 80
      },
      android: {
        height: 60
      }
    }),
    width: width,
    backgroundColor: 'black',
    opacity: 0.5
  },
  bottomContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
    alignSelf: 'center',
    opacity: 0.5,
    flex: 1,
    width: width
  },
  fillView: {
    width: (width - 220) / 2,
    height: 220,
    backgroundColor: 'black',
    opacity: 0.5
  },
  scan: {
    width: 220,
    height: 220,
    alignSelf: 'center'
  }

})
