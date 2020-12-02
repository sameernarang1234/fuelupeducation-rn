import * as React from 'react'
import { Alert } from 'react-native'
import { TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { Button, HeaderWithIcon, TextInput } from '../../components'
import { Box, Text, makeStyles } from '../../Theme'

const WelcomeStudent: React.FC = () => {
  const styles = useStyles()
  const [value, setValue] = React.useState(null)
  const [items, setItems] = React.useState([])
  let controller
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
              <DropDownPicker
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginHorizontal: 10,
                  padding: 10,
                }}
                items={items}
                controller={(instance) => (controller = instance)}
                onChangeList={(items, callback) => {
                  new Promise((resolve) => resolve(setItems(items)))
                    .then(() => callback())
                    .catch(() => {})
                }}
                defaultValue={value}
                onChangeItem={(item) => setValue(item.value)}
              />
            </Box>
            <TextInput placeholder='Last name' />
            <TextInput placeholder='Mobile number' />
            <TextInput placeholder='Country name' />
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
