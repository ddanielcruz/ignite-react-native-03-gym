import { useToken } from '@gluestack-style/react'
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { Platform } from 'react-native'

import HistoryImg from '@/assets/history.svg'
import HomeImg from '@/assets/home.svg'
import ProfileImg from '@/assets/profile.svg'
import { ExerciseScreen } from '@/screens/exercise-screen'
import { HistoryScreen } from '@/screens/history-screen'
import { HomeScreen } from '@/screens/home-screen'
import { ProfileScreen } from '@/screens/profile-screen'

type Routes = {
  home: undefined
  history: undefined
  profile: undefined
  exercise: undefined
}

export type AuthNavigatorRouterProps = BottomTabNavigationProp<Routes>

const { Navigator, Screen } = createBottomTabNavigator<Routes>()

export function AppRoutes() {
  const iconSize = useToken('space', '6')
  const activeColor = useToken('colors', 'green500')

  // @ts-expect-error - Color defined in the theme
  const inactiveColor = useToken('colors', 'gray200')

  // @ts-expect-error - Color defined in the theme
  const backgroundColor = useToken('colors', 'gray600')

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarStyle: {
          backgroundColor,
          borderTopWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 64,
        },
      }}
    >
      <Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeImg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="history"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <HistoryImg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileImg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="exercise"
        component={ExerciseScreen}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  )
}
