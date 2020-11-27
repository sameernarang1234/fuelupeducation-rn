import * as React from 'react'
import { Box, Text, makeStyles } from '../../Theme'

const GetStarted: React.FC = () => {
  const styles = useStyles()
  return (
    <Box style={styles.container}>
      <Text variant='header' style={styles.textStyle}>
        Get started now
      </Text>
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
