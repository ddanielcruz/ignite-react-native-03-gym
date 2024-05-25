import { useToken } from '@gluestack-style/react'
import { Box } from '@gluestack-ui/themed'
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native'

import { AppRoutes } from './app.routes'

export function Routes() {
  // @ts-expect-error - Color is defined in the theme
  const bgColor = useToken('colors', 'gray700')
  const theme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: bgColor,
    },
  }

  return (
    <Box flex={1} bg={bgColor}>
      <NavigationContainer theme={theme}>
        <AppRoutes />
      </NavigationContainer>
    </Box>
  )
}
