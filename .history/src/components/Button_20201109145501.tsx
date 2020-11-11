import * as React from 'react'
import { TouchableOpacity, Text } from 'react-native'

interface BProps {
  label: string
  onPress: () => void
  children: React.ReactNode
}

const Button = ({ children, label, onPress, ...rest }: BProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button
