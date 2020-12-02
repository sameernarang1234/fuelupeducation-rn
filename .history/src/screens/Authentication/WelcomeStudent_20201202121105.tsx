import * as React from 'react'
import { Alert } from 'react-native'
import { TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { Button, HeaderWithIcon, TextInput } from '../../components'
import { Box, Text, makeStyles } from '../../Theme'
import DropDownPicker from 'react-native-dropdown-picker'

const WelcomeStudent: React.FC = () => {
  const [value, setValue] = React.useState(null)
  const [items, setItems] = React.useState([])
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
            <TextInput placeholder='First name' />
            <TextInput placeholder='Last name' />
            <TextInput placeholder='Mobile number' />
            <TextInput placeholder='State name' />
            <Box>
              <DropDownPicker
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginHorizontal: 7,
                }}
                items={items}
                controller={(instance) => instance}
                onChangeList={(items, callback) => {
                  new Promise((resolve) => resolve(setItems(items)))
                    .then(() => callback())
                    .catch((error) => {
                      console.log(error)
                    })
                }}
                containerStyle={{ height: 55, marginVertical: 5 }}
                defaultValue={value}
                placeholder='Country name'
                onChangeItem={(item) => setValue(item.value)}
              />
              <DropDownPicker
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginHorizontal: 7,
                }}
                items={items}
                controller={(instance) => instance}
                onChangeList={(items, callback) => {
                  new Promise((resolve) => resolve(setItems(items)))
                    .then(() => callback())
                    .catch((error) => {
                      console.log(error)
                    })
                }}
                containerStyle={{ height: 55, marginVertical: 5 }}
                defaultValue={value}
                placeholder='State name'
                onChangeItem={(item) => setValue(item.value)}
              />
              <DropDownPicker
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginHorizontal: 7,
                }}
                items={items}
                controller={(instance) => instance}
                onChangeList={(items, callback) => {
                  new Promise((resolve) => resolve(setItems(items)))
                    .then(() => callback())
                    .catch((error) => {
                      console.log(error)
                    })
                }}
                containerStyle={{ height: 55, marginVertical: 5 }}
                defaultValue={value}
                placeholder='City name'
                onChangeItem={(item) => setValue(item.value)}
              />
              <DropDownPicker
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginHorizontal: 7,
                }}
                items={items}
                controller={(instance) => instance}
                onChangeList={(items, callback) => {
                  new Promise((resolve) => resolve(setItems(items)))
                    .then(() => callback())
                    .catch((error) => {
                      console.log(error)
                    })
                }}
                containerStyle={{ height: 55, marginVertical: 5 }}
                defaultValue={value}
                placeholder='School name'
                onChangeItem={(item) => setValue(item.value)}
              />
            </Box>
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
