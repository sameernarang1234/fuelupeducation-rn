import * as React from 'react'
import { TouchableOpacity } from 'react-native'

interface BProps {
  onPress: () => void
  children: React.ReactNode
}

const Button = ({ onPress, children, ...rest }: BProps) => (
  <TouchableOpacity onPress={onPress} {...rest}>
    {children}
  </TouchableOpacity>
)

export default Button
