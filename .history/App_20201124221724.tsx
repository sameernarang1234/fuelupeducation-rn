import * as React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { ThemeProvider } from '@shopify/restyle'
import theme from './src/Theme'
import { NavigationContainer } from '@react-navigation/native'
//import { Button, HeaderWithIcon } from './src/components'
import { GetStarted } from './src/screens'

const App: React.FC = () => {
  //const [loading, setLoading] = React.useState(false)
  React.useEffect(() => {
    RNBootSplash.hide({ duration: 250 })
  }, [])
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <StatusBar barStyle='light-content' />
          {/* <HeaderWithIcon />
          <Button
            variant='primary'
            block
            icon='mail'
            loading={loading}
            onPress={() => setLoading((prev) => !prev)}
            title='Click Me'
          /> */}
          <GetStarted />
        </View>
      </ThemeProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})

export default App
