import { MaterialIcons } from '@expo/vector-icons'
import { Heading, HStack, Icon, Text, VStack } from '@gluestack-ui/themed'
import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Avatar } from './ui/avatar'

export function HomeHeader() {
  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 16 // Safe area top + 16px ($4)

  return (
    <HStack
      bgColor="$gray600"
      pt={paddingTop}
      pb="$4"
      px="$8"
      alignItems="center"
    >
      <Avatar
        source={{ uri: 'https://github.com/ddanielcruz.png' }}
        alt="Imagem do Daniel"
        size="$16"
        mr="$4"
      />

      <VStack flex={1}>
        <Text color="$gray100" fontSize="$md">
          Olá
        </Text>
        <Heading color="$gray100" fontSize="$md">
          Daniel
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          // @ts-expect-error - Icon not inheriting MaterialIcons props
          name="logout"
          size="xl"
          color="$gray200"
        />
      </TouchableOpacity>
    </HStack>
  )
}
