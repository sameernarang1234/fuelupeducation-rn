import * as React from 'react'
import { View } from 'react-native'
import { Text, makeStyles } from '../../Theme'

const GetStarted: React.FC = () => {
  const styles = useStyles()
  return (
    <View style={styles.Container}>
      <Text variant='slogan' style={styles.Header}>
        Get started now
      </Text>
    </View>
  )
}

const useStyles = makeStyles((theme) => ({
  Container: {
    flex: 1,
    marginTop: theme.spacing.m,
    alignItems: 'center',
  },
  Header: {
    fontWeight: 'bold',
    color: theme.colors.text,
    fontSize: theme.spacing.xl,
  },
}))

export default GetStarted
