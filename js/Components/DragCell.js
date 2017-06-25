import React, { PureComponent, PropTypes } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, ViewPropTypes, Text } from 'react-native'
import { Heading2 } from './Text'
import { Separator } from './Separator'
import theme from '../Constants/theme'
import px2dp from '../Utils/px2dp'

export default class Cell extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    titleStyle: Text.propTypes.style,
    icon: Image.propTypes.source,
    style: ViewPropTypes.style,
    borderStyle: ViewPropTypes.style,
    onPress: PropTypes.func
  }

  renderIcon () {
    let icon = this.props.icon &&
    <Image style={styles.icon} source={this.props.icon} resizeMode='contain' />
    return (
      <TouchableOpacity style={styles.iconContainer} onPress={this.props.onPress}>
        {icon}
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.content}>
          <Image style={styles.icon} source={require('../Assets/order_minus_icon.png')} resizeMode='contain' />
          {this.renderIcon()}
          <Heading2 style={[{fontWeight: theme.lightFont, fontSize: 15, color: '#303030'}, this.props.titleStyle]}>{this.props.title}</Heading2>
          <Image style={styles.icon} source={require('../Assets/order_icon.png')} />
        </View>
        <View style={this.props.borderStyle}>
          <Separator />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  iconContainer: {},
  content: {
    height: px2dp(49),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  arrow: {
    width: 14,
    height: 14,
    marginLeft: 5
  }
})

