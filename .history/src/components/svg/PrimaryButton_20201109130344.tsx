import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Box, Text, Theme } from '../../Theme'

export interface Props {
  label: string
  onPress: () => void
}

const PrimaryButton: React.FC<Props> = (Props) => {
  return <TouchableOpacity onPress={onPress}></TouchableOpacity>
}

export default PrimaryButton
