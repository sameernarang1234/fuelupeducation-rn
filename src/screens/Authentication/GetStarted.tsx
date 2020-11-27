import * as React from 'react'
import { ScrollView } from 'react-native'
import { Box, Text, makeStyles } from '../../Theme'
import SvgLogo from '../../assets/svg/book_lover.svg'
import { Button } from '../../components/Button'
import { AuthNavigationProps } from '../../Navigation'
const width = 300
const height = 220

const GetStarted = ({ navigation }: AuthNavigationProps<'GetStarted'>) => {
  const styles = useStyles()
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            title='Create account'
            variant='secondary'
            onPress={() => navigation.navigate('Signup')}
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
    margin: theme.spacing.l,
    fontWeight: '400',
    alignSelf: 'center',
    padding: theme.spacing.s,
  },
  svgContainer: {
    marginVertical: theme.spacing.m,
    alignSelf: 'center',
  },
  textContainer: {
    marginVertical: theme.spacing.xl,
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
