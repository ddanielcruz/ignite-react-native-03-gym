import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Routes } from '@/routes'
import { LoadingScreen } from '@/screens/loading-screen'
import { theme } from '@/theme'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <GluestackUIProvider config={theme}>
      <StatusBar style="light" />
      <SafeAreaProvider>
        {hasLoadedFonts ? <Routes /> : <LoadingScreen />}
      </SafeAreaProvider>
    </GluestackUIProvider>
  )
}
