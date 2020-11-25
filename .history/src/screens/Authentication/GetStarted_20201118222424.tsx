import * as React from 'react'
import { Text, Box, makeStyles } from '../../Theme'

const GetStarted: React.FC = () => {
  const styles = useStyles()
  return (
    <Box style={styles.Container}>
      <Text style={styles.Header}>Get started now</Text>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  Container: {
    flex: 1,
    marginTop: theme.spacing.m,
    alignItems: 'center',
  },
  Header: {
    fontWeight: 'bold',
    color: theme.colors.text,
    fontSize: theme.spacing.xl,
  },
}))

export default GetStarted
