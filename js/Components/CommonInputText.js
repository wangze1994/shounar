import React, { Component, PropTypes } from 'react'
import { View, TextInput, StyleSheet, Image, Text, TouchableOpacity, ViewPropTypes } from 'react-native'
import { Label } from './Text'
import px2dp from '../Utils/px2dp'
export default class CommonInputText extends Component {

  static propTypes = {
    style: ViewPropTypes.style,
    containerStyle: ViewPropTypes.style,
    textInputStyle: TextInput.propTypes.style,
    password: PropTypes.bool,
    placeholder: PropTypes.string,
    placeholderColor: PropTypes.string,
    onChangeText: PropTypes.func,
    labelStyle: Text.propTypes.style,
    labelText: PropTypes.string,
    icon: Image.propTypes.source,
    title: PropTypes.string,
    onPress: PropTypes.func,
    iconStyle: Image.propTypes.style,
    titleStyle: Text.propTypes.style
  }

  static defaultProps = {
    style: null,
    textInputStyle: null,
    containerStyle: null,
    password: false,
    placeholder: '',
    labelStyle: null,
    labelText: '',
    placeholderColor: '#999999',
    onChangeText: () => null
  }

  constructor (props) {
    super(props)
    this.state = {
      showPassword: false
    }
    this.showPasswordHandle = this.showPasswordHandle.bind(this)
  }

  renderOther () {
    let icon = this.props.icon &&
      <Image style={[styles.icon, this.props.iconStyle]} source={this.props.icon} resizeMode='contain' />

    if (this.props.password) icon = <Image style={[styles.icon, this.props.iconStyle]} source={this.state.showPassword ? require('../Assets/eyeopen.png') : require('../Assets/eyeclose.png')} resizeMode='contain' />

    let title = this.props.title &&
    <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text>
    return (
      <TouchableOpacity style={styles.otherContainer} onPress={this.props.password ? this.showPasswordHandle : this.props.onPress}>
        {icon}
        {title}
      </TouchableOpacity>
    )
  }

  renderLabel (labelText, labelStyle) {
    return labelText ? (<Label style={[styles.labelTextStyle, labelStyle]}>{labelText}</Label>) : null
  }

  render () {
    const {
      style,
      textInputStyle,
      labelStyle,
      labelText,
      password,
      placeholder,
      placeholderColor,
      onChangeText,
      containerStyle
    } = this.props
    return (
      <View style={[styles.outter, containerStyle]}>
        {this.renderLabel(labelText, labelStyle)}
        <View style={[styles.container, style]}>
          <TextInput
            style={[styles.textInputStyle, textInputStyle]}
            placeholder={placeholder}
            placeholderColor={placeholderColor}
            underlineColorAndroid='transparent'
            multiline
            password={password && !this.state.showPassword}
            secureTextEntry={password && !this.state.showPassword}
            onChangeText={onChangeText}
            />
          {this.renderOther()}
        </View>
      </View>
    )
  }

  showPasswordHandle () {
    const { showPassword } = this.state
    this.setState({ showPassword: !showPassword })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    borderRadius: 3,
    alignItems: 'center',
    marginTop: px2dp(10)
  },
  textInputStyle: {
    textAlignVertical: 'top',
    flex: 1,
    fontSize: px2dp(13),
    paddingLeft: px2dp(15),
    paddingRight: px2dp(10)
  },
  labelTextStyle: {
    fontSize: px2dp(13)
  },
  otherContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: px2dp(20),
    height: px2dp(20),
    margin: px2dp(20)
  },
  title: {
    fontSize: px2dp(13),
    color: '#333333',
    margin: px2dp(15)
  }
})
