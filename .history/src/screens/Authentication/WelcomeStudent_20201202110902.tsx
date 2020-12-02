import * as React from 'react'
import { Alert } from 'react-native'
import { TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { Button, HeaderWithIcon, TextInput } from '../../components'
import { Box, Text, makeStyles } from '../../Theme'
import DropDownPicker from 'react-native-dropdown-picker'

const WelcomeStudent: React.FC = () => {
  const [country, setCountry] = React.useState()
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
                defaultValue={'items'}
                placeholder='Country'
                containerStyle={{ height: 40 }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                onChangeItem={(item) => setCountry(item.label)}
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
