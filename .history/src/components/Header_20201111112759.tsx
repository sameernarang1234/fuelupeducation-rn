import * as React from 'react'
import { Box, Text } from '../Theme'

interface TextProps {
  text: string
}

const Header: React.FC<TextProps> = ({ text }: TextProps) => {
  return (
    <Box>
      <Text variant='headerText'>{text}</Text>
    </Box>
  )
}

export default Header
