import * as React from 'react'
import { Box, Text, makeStyles } from '../../Theme'

const GetStarted: React.FC = () => {
  const styles = useStyles()
  return (
    <Box style={styles.container}>
      <Text variant='header'>Get started now</Text>
    </Box>
  )
}
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
}))
export default GetStarted
