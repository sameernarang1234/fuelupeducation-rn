import * as React from 'react'
import { Text, Box, makeStyles } from '../../Theme'

const GetStarted: React.FC = () => {
  const styles = useStyles()
  return (
    <Box style={styles.container}>
      <Text variant='slogan' style={styles.Header}>
        Get started now
      </Text>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
  },
  Header: {
    marginTop: theme.spacing.m,
    fontWeight: 'bold',
    alignItems: 'center',
    color: theme.colors.text,
    fontSize: theme.spacing.xl,
  },
}))

export default GetStarted
