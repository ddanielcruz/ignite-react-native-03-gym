import { config as defaultConfig } from '@gluestack-ui/config'
import { createConfig } from '@gluestack-ui/themed'

export const theme = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      green700: '#00875F',
      green500: '#00B37E',

      gray700: '#121214',
      gray600: '#202024',
      gray500: '#29292E',
      gray400: '#323238',
      gray300: '#7C7C8A',
      gray200: '#C4C4CC',
      gray100: '#E1E1E6',

      red500: '#F75A68',
    },
    fonts: {
      ...defaultConfig.tokens.fonts,
      heading: 'Roboto_700Bold',
      body: 'Roboto_400Regular',
    },
    space: {
      ...defaultConfig.tokens.space,
      14: 56,
      33: 148,
    },
  },
})
