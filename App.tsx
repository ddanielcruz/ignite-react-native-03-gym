import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

export default function App() {
  // TODO Show splash screen while fonts are loading
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <View>
      {hasLoadedFonts ? <View /> : <View />}
      <StatusBar style="light" />
    </View>
  )
}
