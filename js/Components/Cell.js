import React, { PureComponent, PropTypes } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, ViewPropTypes, Text } from 'react-native'
import { Heading2, Paragraph } from './Text'
import { Separator } from './Separator'
import theme from '../Constants/theme'

export default class Cell extends PureComponent {
  static propTypes = {
    center: PropTypes.bool,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    titleStyle: Text.propTypes.style,
    subTitleStyle: Text.propTypes.style,
    image: Image.propTypes.source,
    icon: Image.propTypes.source,
    style: ViewPropTypes.style,
    borderStyle: ViewPropTypes.style,
    next: PropTypes.bool,
    onPress: PropTypes.func,
    other: PropTypes.array
  }

  render () {
    let icon = this.props.icon && <Image style={styles.icon} source={this.props.icon} />
    let image = this.props.image && <Image style={styles.icon} source={this.props.image} />
    let next = this.props.next && <Image style={styles.arrow} source={require('../Assets/rightarrow.png')} />
    let other = this.props.other || null

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={[styles.content, this.props.style]}>
            {icon}
            <Heading2 style={[{fontWeight: theme.lightFont, fontSize: 15, color: '#303030'}, this.props.titleStyle]}>{this.props.title}</Heading2>
            {!this.props.center && <View style={{ flex: 1 }} />}
            <Paragraph style={[{ color: '#999999' }, this.props.subTitleStyle]}>{this.props.subtitle}</Paragraph>
            {image}
            {other}
            {next}
          </View>
          <View style={[{paddingLeft: 20, paddingRight: 20}, this.props.borderStyle]}>
            <Separator />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  content: {
    height: 50,
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
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  arrow: {
    width: 14,
    height: 14,
    marginLeft: 5
  }
})

