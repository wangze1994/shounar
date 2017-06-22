import React from 'react'
import { View, StyleSheet, ViewPropTypes } from 'react-native'

import theme from '../Constants/theme'

export const Separator = ({ style }) => {
  return <View style={[styles.line, style]} />
}

Separator.propTypes = {
  style: ViewPropTypes.style
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: theme.borderColor
  }
})
