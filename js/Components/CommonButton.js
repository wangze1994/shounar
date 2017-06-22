import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, Platform, TouchableNativeFeedback, TouchableOpacity, ViewPropTypes, Image } from 'react-native'
import px2dp from '../Utils/px2dp.js'
import theme from '../Constants/theme.js'

export default class CommonButton extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    icon: Image.propTypes.source,
    onPress: PropTypes.func,
    textStyle: Text.propTypes.style,
    containerStyle: ViewPropTypes.style
  }

  render () {
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          onPress={this.props.onPress}>
          {this._renderContent()}
        </TouchableNativeFeedback>
      )
    } else if (Platform.OS === 'ios') {
      return (
        <TouchableOpacity
          onPress={this.props.onPress}
          activeOpacity={theme.btnActiveOpacity}>
          {this._renderContent()}
        </TouchableOpacity>
      )
    }
  }

  _renderContent () {
    let { containerStyle, textStyle, text, icon } = this.props
    let rebderIcon = icon && <Image style={styles.icon} source={icon} />
    return (
      <View style={[styles.container, containerStyle]}>
        {rebderIcon}
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: px2dp(45),
    flexDirection: 'row',
    backgroundColor: '#046ada',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3
  },
  text: {
    color: 'white',
    fontSize: px2dp(13),
    fontFamily: theme.fontFamily,
    fontWeight: theme.lightFont
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10
  }
})
