import React from 'react'
import { TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
//import DropDownPicker from 'react-native-dropdown-picker'
import { HeaderWithIcon } from '../../components'
import { Box, Text, makeStyles } from '../../Theme'

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
    marginBottom: 30,
  },
  welcome: {
    color: theme.colors.primary,
    margin: 30,
  },
}))
export default WelcomeStudent
