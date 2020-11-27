import React from 'react'
import { Box, Text } from './../Theme'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Theme } from './../Theme'

export interface SquareIconProps {
  name: string
  color: keyof Theme['colors']
  backgroundColor: keyof Theme['colors']
  size: number
  iconRatio?: number
}

const SquareIcon: React.FC<SquareIconProps> = ({
  iconRatio = 0.6,
  ...props
}: SquareIconProps) => {
  const iconSize = props.size * iconRatio
  return (
    <Box
      backgroundColor={props.backgroundColor}
      justifyContent='center'
      alignItems='center'
      height={props.size * 1.1}
      width={props.size * 1.7}
      borderRadius='m'
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 3,
      }}>
      <Text color={props.color} style={{ height: iconSize, width: iconSize }}>
        <Icon name={props.name} size={iconSize} />
      </Text>
    </Box>
  )
}

export default SquareIcon
