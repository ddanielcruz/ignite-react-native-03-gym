import { MaterialIcons } from '@expo/vector-icons'
import { Heading, Icon, Text, VStack } from '@gluestack-ui/themed'
import { TouchableOpacity } from 'react-native'

import { Header } from './layout/header'
import { Avatar } from './ui/avatar'

export function HomeHeader() {
  return (
    <Header>
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
    </Header>
  )
}
