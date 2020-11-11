import React, { useEffect } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { ThemeProvider } from '@shopify/restyle'
import theme from './src/Theme'
import { Text } from './src/Theme'
import { NavigationContainer } from '@react-navigation/native'
import Button from './src/components/Button'

const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide()
  }, [])
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <StatusBar barStyle='light-content' />
          <Text>Start editing App.js</Text>
          <Button onPress={() => console.log('Button pressed')}>
            <Text
              variant='buttonText'
              style={{
                backgroundColor: theme.colors.primary,
                padding: 8,
                margin: 4,
                borderRadius: theme.borderRadii.s,
              }}>
              Primary
            </Text>
          </Button>
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
