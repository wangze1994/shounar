import React from 'react'
import { StyleSheet, Text } from 'react-native'
import theme from '../Constants/theme'
import px2dp from '../Utils/px2dp'

export const HeadingBig = ({style, ...props}) => {
  return <Text style={[styles.h0, style]} {...props} />
}

export const Heading1 = ({style, ...props}) => {
  return <Text style={[styles.h1, style]} {...props} />
}

export const Heading2 = ({style, ...props}) => {
  return <Text style={[styles.h2, style]} {...props} />
}

export const Paragraph = ({style, ...props}) => {
  return <Text style={[styles.p, style]} {...props} />
}

export const Label = ({style, ...props}) => {
  return <Text style={[styles.label, style]} {...props} />
}

HeadingBig.propTypes = {
  style: Text.propTypes.style
}

Heading1.propTypes = {
  style: Text.propTypes.style
}

Heading2.propTypes = {
  style: Text.propTypes.style
}

Paragraph.propTypes = {
  style: Text.propTypes.style
}

Label.propTypes = {
  style: Text.propTypes.style
}

const styles = StyleSheet.create({
  h0: {
    fontSize: 30,
    color: theme.textColor,
    fontWeight: 'bold',
    fontFamily: theme.fontFamily,
    backgroundColor: 'transparent'
  },
  h1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.textColor,
    fontFamily: theme.fontFamily,
    backgroundColor: 'transparent'
  },
  h2: {
    fontSize: 14,
    color: theme.textColor,
    fontFamily: theme.fontFamily,
    backgroundColor: 'transparent'
  },
  p: {
    fontSize: 12,
    color: theme.textColor,
    fontFamily: theme.fontFamily,
    backgroundColor: 'transparent'
  },
  label: {
    fontSize: 13,
    color: theme.textColor,
    fontFamily: theme.fontFamily,
    backgroundColor: 'transparent'
  }
})
