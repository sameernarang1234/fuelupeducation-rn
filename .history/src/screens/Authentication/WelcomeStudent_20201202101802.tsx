import * as React from 'react'
import { Alert } from 'react-native'
import { TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { Button, HeaderWithIcon, TextInput } from '../../components'
import { Box, Text, makeStyles } from '../../Theme'

const WelcomeStudent: React.FC = () => {
  const styles = useStyles()
  const [value, setValue] = React.useState('Country name')
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
            <TextInput placeholder='First name' />
            <TextInput placeholder='Last name' />
            <TextInput placeholder='Mobile number' />
            <Box>
              {/* <DropDownPicker
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginHorizontal: 7,
                  padding: 20,
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
              /> */}
              <DropDownPicker
                items={[
                  {
                    label: 'UK',
                    value: 'uk',
                  },
                  {
                    label: 'France',
                    value: 'france',
                  },
                ]}
                multiple={true}
                multipleText='%d items have been selected.'
                min={0}
                max={10}
                defaultValue={value}
                containerStyle={{ height: 40 }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                onChangeItem={(item) => setValue(item.value)}
              />
            </Box>
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
