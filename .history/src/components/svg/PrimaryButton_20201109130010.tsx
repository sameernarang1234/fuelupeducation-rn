import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Box, Text, Theme } from '../../Theme'

interface ButtonProps {
  label : string
  onPress: () => void
}

const PrimaryButton: React.FC<ButtonProps> = (ButtonProps){
  return(
    <TouchableOpacity onPress={onPress}>
    
    </TouchableOpacity>
  )
}

export default PrimaryButton