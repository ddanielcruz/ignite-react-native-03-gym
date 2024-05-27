import {
  Box,
  Center,
  Heading,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed'
import { TouchableOpacity } from 'react-native'

import { ScreenHeader } from '@/components/screen-header'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ProfileScreen() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView px="$4" py="$8">
        <Center>
          <Avatar
            source={{ uri: 'https://github.com/ddanielcruz.png' }}
            alt="Imagem do Daniel"
            size="$32"
          />

          <Box mt="$2" mb="$8">
            <TouchableOpacity>
              <Text color="$green500" fontWeight="$bold" fontSize="$md">
                Alterar foto
              </Text>
            </TouchableOpacity>
          </Box>
        </Center>

        <Input placeholder="Nome" bgColor="$gray600" />

        <Input
          placeholder="E-mail"
          bgColor="$gray600"
          mt="$4"
          value="daniel@example.com"
          isDisabled
        />

        <VStack width="$full" mt="$12" pb="$16" gap="$4">
          <Heading color="$gray200" fontSize="$md">
            Alterar senha
          </Heading>

          <Input placeholder="Senha atual" bgColor="$gray600" secureTextEntry />
          <Input placeholder="Nova senha" bgColor="$gray600" secureTextEntry />
          <Input
            placeholder="Confirme a nova senha"
            bgColor="$gray600"
            secureTextEntry
          />

          <Button>Atualizar</Button>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
