import React, {Component, PropTypes} from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Paragraph } from './Text'
import theme from '../Constants/theme'
import px2dp from '../Utils/px2dp'

export default class TextButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    color: PropTypes.string,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.number
  };

  static defaultProps = {
    color: '#333333',
    fontSize: px2dp(12),
    fontWeight: theme.lightFont
  };

  render () {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}>
        <View style={{height: px2dp(16)}}>
          <Paragraph style={[styles.text, {fontSize: this.props.fontSize, color: this.props.color, fontWeight: this.props.fontWeight}]}>{this.props.text}</Paragraph>
        </View>
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  text: {
    fontSize: px2dp(12),
    fontWeight: theme.lightFont
  }
})
