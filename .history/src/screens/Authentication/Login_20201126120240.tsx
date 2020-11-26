import * as React from 'react'
import { Box, Text, makeStyles } from '../../Theme'

const Login: React.FC = () => {
  const styles = useStyles()
  return <Box style={styles.container}></Box>
}
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
  },
}))

export default Login
