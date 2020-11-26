import * as React from 'react'
import { Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <Box style={styles.social}>
            <SquareIconButton
              iconRatio={0.7}
              name='google'
              size={40}
              color={'danger'}
              backgroundColor={'white'}
              onPress={() => Alert.alert('Message', 'sign up with google ')}
            />
          </Box>
          <Box style={styles.social}>
            <SquareIconButton
              iconRatio={0.7}
              name='facebook-f'
              size={40}
              color={'primary'}
              backgroundColor={'white'}
              onPress={() => Alert.alert('Message', 'sign up with facebook ')}
            />
          </Box>
          <SquareIconButton
            iconRatio={0.7}
            name='twitter'
            size={40}
            color={'primary'}
            backgroundColor={'white'}
            onPress={() => Alert.alert('Message', 'sign up with twitter ')}
          />
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  )
}
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 30,
  },
  signupText: {
    alignSelf: 'center',
    marginTop: 35,
    marginBottom: 35,
  },
  socialButton: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  social: {
    marginRight: 30,
  },
}))

export default Login
