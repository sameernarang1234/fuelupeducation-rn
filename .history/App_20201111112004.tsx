import * as React from 'react'
import { StyleSheet, View, StatusBar, Alert } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { ThemeProvider } from '@shopify/restyle'
import theme from './src/Theme'
//import { Text } from './src/Theme'
import { NavigationContainer } from '@react-navigation/native'
import { Button, Header } from './src/components/index'

const App: React.FC = () => {
  React.useEffect(() => {
    RNBootSplash.hide()
  }, [])
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <StatusBar barStyle='light-content' />
          <Header text='Welcome Fuelupeducation Interns' />
          <Button
            onPress={() => Alert.alert('Message', 'You clicked me')}
            title='Click Me'
          />
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
