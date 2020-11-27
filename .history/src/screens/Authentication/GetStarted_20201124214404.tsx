import * as React from 'react'
import { Text, Box, makeStyles } from '../../Theme'

const GetStarted = () => {
  const styles = useStyles()
  return (
    <Box style={styles.container}>
      <Text style={styles.Header}>Get started now</Text>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  Header: {
    fontSize: theme.spacing.l,
    margin: theme.spacing.m,
  },
}))

export default GetStarted
