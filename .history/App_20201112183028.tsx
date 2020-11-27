import * as React from 'react'
import { StyleSheet, View, StatusBar, Alert } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { ThemeProvider } from '@shopify/restyle'
import theme from './src/Theme'
import { NavigationContainer } from '@react-navigation/native'
import { Button } from './src/components'
import { TextInput } from './src/components/Form/index'

const App: React.FC = () => {
  React.useEffect(() => {
    RNBootSplash.hide({ duration: 250 })
  }, [])
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <StatusBar barStyle='light-content' />
          <Button
            icon='check'
            onPress={() => Alert.alert('Message', 'You clicked the button')}
            title='Click Me'
          />
          <TextInput icon='google' placeholder='Email' />
          <TextInput placeholder='Password' />
        </View>
      </ThemeProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
