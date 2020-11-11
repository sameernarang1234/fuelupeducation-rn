import * as React from 'react'
import { TouchableOpacity } from 'react-native'

interface BProps {
  label: string
  onPress: () => void
}

const Button = ({ label, onPress }: BProps) => (
  <TouchableOpacity>
    label={label} onPress={onPress}
  </TouchableOpacity>
)

export default Button
