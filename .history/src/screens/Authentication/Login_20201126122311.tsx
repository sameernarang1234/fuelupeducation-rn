import * as React from 'react'
import { Box, Text, makeStyles } from '../../Theme'
import { Button, HeaderWithIcon, TextInput } from '../../components'

const Login: React.FC = () => {
  const styles = useStyles()
  return (
    <Box style={styles.container}>
      <HeaderWithIcon />
      <Box>
        <TextInput icon='email' placeholder='Email or Phone number' />
        <TextInput icon='security' placeholder='Password' />
        <TextInput icon='security' placeholder='Remember password' />
      </Box>
      <Box>
        <Button
          title='Create account'
          variant='secondary'
          onPress={() => alert('button pressed')}
        />
      </Box>
      <Box>
        <Text>or sign up with</Text>
      </Box>
    </Box>
  )
}
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
  },
}))

export default Login
