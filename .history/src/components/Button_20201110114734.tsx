import * as React from 'react'
import { TouchableOpacity } from 'react-native'

interface BProps {
  onPress: () => void
  title: string
  children: React.ReactNode
}

const Button = ({ title, onPress, children, ...rest }: BProps) => (
  <TouchableOpacity onPress={onPress} {...rest}>
    <Text>{title}</Text>
    {children}
  </TouchableOpacity>
)

export default Button
