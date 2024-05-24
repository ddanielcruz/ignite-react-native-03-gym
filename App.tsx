import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { config as gluestackConfig } from '@gluestack-ui/config'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

import { SplashScreen } from '@/screens/splash-screen'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <GluestackUIProvider config={gluestackConfig}>
      <StatusBar style="light" />
      {hasLoadedFonts ? <View /> : <SplashScreen />}
    </GluestackUIProvider>
  )
}
