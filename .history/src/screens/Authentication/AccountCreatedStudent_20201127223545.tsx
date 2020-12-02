import * as React from 'react'
import { ScrollView } from 'react-native'
import { Text, Box, makeStyles } from '../../Theme'
import { Button } from '../../components'
import SvgLogo from '../../assets/svg/mathematics.svg'

const AccountCreatedStudent: React.FC = () => {
  const styles = useStyles()
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box style={styles.container}>
        <Box>
          <Text>Account successfully {'\n'} created</Text>
        </Box>
        <Box></Box>
      </Box>
    </ScrollView>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
}))
export default AccountCreatedStudent
