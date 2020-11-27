import * as React from 'react'
import { Alert } from 'react-native'
import { Box, Text, makeStyles } from '../../Theme'
import SvgLogo from '../../assets/svg/book_lover.svg'
import { Button } from '../../components/Button'
const width = 280
const height = 220

const GetStarted: React.FC = () => {
  const styles = useStyles()
  return (
    <Box style={styles.container}>
      <Text variant='getStarted' style={styles.textStyle}>
        Get started now
      </Text>
      <Box style={styles.svgContainer}>
        <SvgLogo width={width} height={height} />
      </Box>
      <Box style={styles.textContainer}>
        <Text variant='getStartedText' style={styles.mainText}>
          Get free education from anywhere when {'\n'} Your phone is your
          school.
        </Text>
      </Box>
      <Box style={styles.buttonContainer}>
        <Button
          title='Sign in'
          variant='primary'
          onPress={() => Alert.alert('Message', 'Go to Sign in screen')}
        />
        <Button
          title='Create account'
          variant='secondary'
          onPress={() => Alert.alert('Message', 'Go to Sign up screen')}
        />
      </Box>
    </Box>
  )
}
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    margin: theme.spacing.m,
    fontWeight: '400',
    alignSelf: 'center',
    padding: theme.spacing.s,
  },
  svgContainer: {
    //margin: theme.spacing.m,
    alignSelf: 'center',
  },
  textContainer: {
    marginTop: theme.spacing.s,
    alignSelf: 'center',
  },
  mainText: {
    padding: theme.spacing.s,
    fontWeight: '900',
    textAlign: 'center',
  },
  buttonContainer: {
    margin: theme.spacing.s,
  },
}))
export default GetStarted
