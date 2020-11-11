import * as React from 'react'
import { TouchableOpacity, Text } from 'react-native'

interface BProps {
  label: string
  onPress: () => void
  children: React.ReactNode
}

const Button = ({ label, onPress, children, ...rest }: BProps) => {
  return (
    <TouchableOpacity onPress={onPress} label={label}>
      {children}
    </TouchableOpacity>
  )
}

export default Button
