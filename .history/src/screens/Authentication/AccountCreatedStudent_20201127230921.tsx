import * as React from 'react'
import { ScrollView, Alert } from 'react-native'
import { Text, Box, makeStyles } from '../../Theme'
import { Button } from '../../components'
import SvgLogo from '../../assets/svg/mathematics.svg'

const width = 300
const height = 220

const AccountCreatedStudent: React.FC = () => {
  const styles = useStyles()
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box style={styles.container}>
        <Text variant='getStarted' style={styles.textStyle}>
          Account successfully {'\n'} created
        </Text>
        <Box style={styles.svgContainer}>
          <SvgLogo width={width} height={height} />
        </Box>
        <Box>
          <Text variant='getStartedText' style={styles.mainText}>
            Happy learning, study from anywhere {'\n'} And everywhere.
          </Text>
        </Box>
        <Box>
          <Button
            title='Continue'
            variant='secondary'
            onPress={() => Alert.alert('Message', 'Go to home screen')}
          />
        </Box>
      </Box>
    </ScrollView>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  textStyle: {
    marginTop: theme.spacing.l,
    fontWeight: '400',
    alignSelf: 'center',
    padding: theme.spacing.s,
    textAlign: 'center',
    color: theme.colors.primary,
  },
  svgContainer: {
    marginVertical: theme.spacing.l,
    alignSelf: 'center',
  },
  mainText: {
    padding: theme.spacing.s,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
}))
export default AccountCreatedStudent
