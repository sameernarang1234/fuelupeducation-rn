import React from 'react'
import { TouchableOpacity } from 'react-native'

import SquareIcon, { SquareIconProps } from '../SquareIcon'

export interface SquareIconButtonProps extends SquareIconProps {
  onPress: () => void
}

const SquareIconButton = ({ onPress, ...props }: SquareIconButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <SquareIcon {...props} />
    </TouchableOpacity>
  )
}

export default SquareIconButton
