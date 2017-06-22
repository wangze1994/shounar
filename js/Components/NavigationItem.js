import React, { Component, PropTypes} from 'react'
import { Text, StyleSheet, TouchableOpacity, Image, ViewPropTypes } from 'react-native'
import theme from '../Constants/theme'

export default class NavigationItem extends Component {

  static propTypes = {
    icon: Image.propTypes.source,
    title: PropTypes.string,
    onPress: PropTypes.func,
    iconStyle: Image.propTypes.style,
    titleStyle: Text.propTypes.style,
    containerStyle: ViewPropTypes.style
  }

  render () {
    let icon = this.props.icon &&
    <Image style={[styles.icon, this.props.iconStyle]} source={this.props.icon} resizeMode='contain' />

    let title = this.props.title &&
    <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text>
    return (
      <TouchableOpacity style={[styles.container, this.props.containerStyle]} onPress={this.props.onPress}>
        {icon}
        {title}
      </TouchableOpacity>
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 15
  },
  title: {
    fontSize: 17,
    fontWeight: theme.lightFont,
    color: '#333333',
    fontFamily: theme.fontFamily,
    marginRight: 20
  }
})

