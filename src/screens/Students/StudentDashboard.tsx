import React from 'react'
import { View, Text } from 'react-native'
import { AuthNavigationProps } from '../../Navigation'

const Dashboard = ({ navigation }: AuthNavigationProps<'StudentDashboard'>) => {
  return (
    <View>
      <Text> Student Dashboard </Text>
    </View>
  )
}

export default Dashboard
