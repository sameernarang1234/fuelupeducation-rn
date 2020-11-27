import * as React from 'react'
import { View, Text } from 'react-native'
import { makeStyles } from '../../Theme'

const GetStarted = () => {
  const styles = useStyles()
  return (
    <View style={styles.container}>
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
