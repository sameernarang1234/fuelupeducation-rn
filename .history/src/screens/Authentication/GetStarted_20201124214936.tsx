import * as React from 'react'
import { View, Text } from 'react-native'
import { makeStyles } from '../../Theme'
import { backgroundColor } from '@shopify/restyle'

const GetStarted = () => {
  const styles = useStyles()
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.Header}>Get started now</Text>
      </View>
    </View>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  },
  Header: {
    fontSize: theme.spacing.l,
    margin: theme.spacing.m,
  },
}))

export default GetStarted