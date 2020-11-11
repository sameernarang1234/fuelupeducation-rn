import * as React from 'react'
import { TouchableOpacity } from 'react-native'

interface BProps {
  title: string
  onPress: () => void
  children: React.ReactNode
}

const Button = ({ title, onPress, children, ...rest }: BProps) => (
  <TouchableOpacity onPress={onPress} {...rest}>
    title={title}
    {children}
  </TouchableOpacity>
)

export default Button
