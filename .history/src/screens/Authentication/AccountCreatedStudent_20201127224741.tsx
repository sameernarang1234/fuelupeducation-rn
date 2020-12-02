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
        <Box>
          <Text>Account successfully {'\n'} created</Text>
        </Box>
        <Box>
          <SvgLogo width={width} height={height} />
        </Box>
        <Box>
          <Text>
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

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
}))
export default AccountCreatedStudent
