import React, { useEffect } from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { ThemeProvider } from '@shopify/restyle'
import theme from './src/Theme'

const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide()
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Text>Start editing App.js</Text>
      </View>
    </ThemeProvider>
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
