import * as React from 'react'
import { View } from 'react-native'
import { Text, Box, makeStyles } from '../../Theme'

const GetStarted: React.FC = () => {
  const styles = useStyles()
  return (
    <View>
      <Text variant='slogan' style={styles.Header}>
        Get started now
      </Text>
    </View>
  )
}

const useStyles = makeStyles((theme) => ({
  Header: {
    marginTop: theme.spacing.m,
    fontWeight: 'bold',
    alignItems: 'center',
    color: theme.colors.text,
    fontSize: theme.spacing.xl,
  },
}))

export default GetStarted
