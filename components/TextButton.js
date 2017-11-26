import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { lightBlue } from '../utils/colors'

function TextButton ({ text, onPress, style = {} }) {
  return (
    <TouchableOpacity style={[style, styles.btn]} onPress={onPress}>
      <Text style={{color: 'white'}}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    height: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    margin: 10
  }
})

export default TextButton
