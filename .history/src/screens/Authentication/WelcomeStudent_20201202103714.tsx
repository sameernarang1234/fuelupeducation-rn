import * as React from 'react'
import { Alert } from 'react-native'
import { TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { Button, HeaderWithIcon, TextInput } from '../../components'
import { Box, Text, makeStyles } from '../../Theme'
import RNPickerSelect from 'react-native-picker-select'

const WelcomeStudent: React.FC = () => {
  const styles = useStyles()
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box style={styles.container}>
          <Box style={styles.header}>
            <HeaderWithIcon />
          </Box>
          <Box>
            <Text variant='getStarted' style={styles.welcome}>
              Welcome!
            </Text>
          </Box>
          <Box>
            <Box>
              <TextInput placeholder='First name' />
              <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                const items = {
  [
{ label: 'Football', value: 'football' }
{ label: 'Baseball', value: 'baseball' }
{ label: 'Hockey', value: 'hockey' }
  ]}
              />
            </Box>
            <TextInput placeholder='Last name' />
            <TextInput placeholder='Mobile number' />
            <TextInput placeholder='State name' />
            <TextInput placeholder='City name' />
            <TextInput placeholder='School name' />
            <TextInput placeholder='Grade name' />
          </Box>
          <Box style={styles.buttonStyle}>
            <Button
              title='Continue'
              variant='secondary'
              onPress={() => Alert.alert('Message', 'button pressed')}
            />
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginBottom: theme.spacing.l,
  },
  welcome: {
    color: theme.colors.primary,
    marginLeft: theme.spacing.l,
    marginBottom: theme.spacing.s,
  },
  buttonStyle: {
    marginVertical: theme.spacing.m,
  },
}))
export default WelcomeStudent
