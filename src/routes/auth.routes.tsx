import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { SignInScreen } from '@/screens/sign-in-screen'
import { SignUpScreen } from '@/screens/sign-up-screen'

type AuthRoutes = {
  'sign-in': undefined
  'sign-up': undefined
}

export type AuthNavigatorRouterProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="sign-in" component={SignInScreen} />
      <Screen name="sign-up" component={SignUpScreen} />
    </Navigator>
  )
}
