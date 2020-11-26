import * as React from 'react'
import { Alert } from 'react-native'
import { Box, Text, makeStyles } from '../../Theme'
import {
  Button,
  HeaderWithIcon,
  TextInput,
  SquareIconButton,
} from '../../components'

const Login: React.FC = () => {
  const styles = useStyles()
  return (
    <Box style={styles.container}>
      <Box style={styles.header}>
        <HeaderWithIcon />
      </Box>
      <Box>
        <TextInput icon='mail' placeholder='Email or Phone number' />
        <TextInput icon='lock' placeholder='Password' />
        <TextInput icon='lock' placeholder='Remember password' />
      </Box>
      <Box>
        <Button
          title='Create account'
          variant='secondary'
          onPress={() => Alert.alert('Message', 'button pressed')}
        />
      </Box>
      <Box style={styles.signupText}>
        <Text variant='getStartedText'>or sign up with</Text>
      </Box>
      <Box style={styles.socialButton}>
        <SquareIconButton
          name='google'
          size={40}
          color={'danger'}
          backgroundColor={'white'}
          onPress={() => Alert.alert('Message', 'sign up with google ')}
        />
        <SquareIconButton
          name='facebook-f'
          size={40}
          color={'primary'}
          backgroundColor={'white'}
          onPress={() => Alert.alert('Message', 'sign up with facebook ')}
        />
        <SquareIconButton
          name='twitter'
          size={40}
          color={'primary'}
          backgroundColor={'white'}
          onPress={() => Alert.alert('Message', 'sign up with twitter ')}
        />
      </Box>
    </Box>
  )
}
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 25,
  },
  signupText: {
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  socialButton: {
    flexDirection: 'row',
    margin: 15,
    paddingHorizontal: 15,
  },
}))

export default Login
