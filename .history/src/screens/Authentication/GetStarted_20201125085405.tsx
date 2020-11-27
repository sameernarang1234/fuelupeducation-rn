import * as React from 'react'
import { Box, Text, makeStyles } from '../../Theme'
import SvgLogo from '../../assets/svg/book_lover.svg'

const GetStarted: React.FC = () => {
  const styles = useStyles()
  return (
    <Box style={styles.container}>
      <Text variant='getStarted' style={styles.textStyle}>
        Get started now
      </Text>
      <Box style={styles.svgContainer}>
        <SvgLogo width={300} height={220} />
      </Box>
      <Box style={styles.textContainer}>
        <Text variant='getStartedText' style={styles.mainText}>
          Get free education from anywhere when {'\n'} Your phone is your
          school.
        </Text>
      </Box>
    </Box>
  )
}
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
  },
  textStyle: {
    margin: theme.spacing.xl,
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
    fontWeight: '800',
  },
}))
export default GetStarted
