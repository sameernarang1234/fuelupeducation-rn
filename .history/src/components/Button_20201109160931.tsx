// import * as React from 'react'
// import { TouchableOpacity, Text } from 'react-native'

// interface BProps {
//   onPress: () => void
//   title: string
//   children: React.ReactNode
// }

// const Button = ({ title, onPress, children, ...rest }: BProps) => (
//   <TouchableOpacity onPress={onPress} {...rest}>
//     <Text>{title}</Text>
//     {children}
//   </TouchableOpacity>
// )

// export default Button

import { TouchableOpacity, View } from 'react-native'
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
} from '@shopify/restyle'
import { Theme } from '../Theme'
import { Text } from '../Theme'

const restyleFunctions = [spacing, border, backgroundColor]
type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {
    children: React.ReactNode
    onPress: () => void
  }

const Button = ({ onPress, children, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest)

  return (
    <TouchableOpacity onPress={onPress}>
      <View {...props}>
        <Text variant='buttonText'></Text>
        {children}
      </View>
    </TouchableOpacity>
  )
}
export default Button
