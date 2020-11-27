import * as React from 'react'
import { Text, Box, makeStyles } from '../../Theme'

const GetStarted: React.FC = () => {
  const styles = useStyles()
  return (
    <Box style={{ flex: 1 }}>
      <Box style={styles.container}>
        <Text style={styles.Header}>Get started now</Text>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing.m,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  Header: {
    color: theme.colors.text,
    fontSize: theme.spacing.xl,
  },
}))

export default GetStarted
