import * as React from 'react'
import { Box, Text, makeStyles } from '../Theme'

interface TextProps {
  text: string
}

const Header: React.FC<TextProps> = ({ text }: TextProps) => {
  const styles = useStyles()
  return (
    <Box>
      <Text variant='headerText' style={styles.container}>
        {text}
      </Text>
    </Box>
  )
}
const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.colors.primary,
    backgroundColor: 'transparent',
  },
}))
export default Header
