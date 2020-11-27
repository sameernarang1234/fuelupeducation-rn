import * as React from 'react'
import { View, Text } from 'react-native'
import { makeStyles } from '../../Theme'

const GetStarted: React.FC = () => {
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.Header}>Get started now</Text>
      </View>
    </View>
  )
}
export default GetStarted

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.primary,
  },
  Header: {
    fontSize: theme.spacing.l,
    margin: theme.spacing.m,
  },
}))
