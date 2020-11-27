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
  },
  svgContainer: {
    marginVertical: theme.spacing.m,
    alignSelf: 'center',
  },
}))
export default GetStarted
