import * as React from 'react'
import { Box, Text, makeStyles } from '../../Theme'
import Logo from '../../assets/svg/book_lover.svg'

const GetStarted: React.FC = () => {
  const styles = useStyles()
  return (
    <Box style={styles.container}>
      <Text variant='getStarted' style={styles.textStyle}>
        Get started now
      </Text>
      <Box>
        <Logo />
      </Box>
    </Box>
  )
}
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
  },
  textStyle: {
    margin: theme.spacing.xl,
    fontWeight: '300',
  },
}))
export default GetStarted
