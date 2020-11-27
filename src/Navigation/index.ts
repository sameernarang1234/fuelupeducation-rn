import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export interface AuthNavigationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: StackNavigationProp<AuthenticationRoutes, RouteName>
  route: RouteProp<AuthenticationRoutes, RouteName>
}

export type AuthenticationRoutes = {
  GetStarted: undefined
  Login: undefined
  Signup: undefined
}
