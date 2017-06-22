import { Platform, Dimensions, PixelRatio } from 'react-native'
import px2dp from '../Utils/px2dp'

export default {
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
  onePixel: 1 / PixelRatio.get(),
  btnActiveOpacity: 0.7,
  statusBarHeight: (Platform.OS === 'ios' ? 20 : 0),
  userHeader: '#7ABA36',
  loanHeader: '#323C46',
  fontFamily: 'PingFang SC',
  textColor: '#333333',
  lightFont: '300',
  mediumFont: '400',
  borderColor: '#DCDCDC'
}
