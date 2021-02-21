import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import GetStarted from './GetStarted'
import Login from './Login'
import Signup from './Signup'
import StudentDashboard from '../Students/StudentDashboard'
import { AuthenticationRoutes } from '../../Navigation'

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>()

const AuthenticationNavigator: React.FC = () => (
  <AuthenticationStack.Navigator
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
    headerMode='none'>
    <AuthenticationStack.Screen name='GetStarted' component={GetStarted} />
    <AuthenticationStack.Screen name='Login' component={Login} />
    <AuthenticationStack.Screen name='Signup' component={Signup} />
    <AuthenticationStack.Screen
      name='StudentDashboard'
      component={StudentDashboard}
    />
  </AuthenticationStack.Navigator>
)

export default AuthenticationNavigator
