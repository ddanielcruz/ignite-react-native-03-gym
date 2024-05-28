import {
  Box,
  Center,
  Heading,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { Alert, TouchableOpacity } from 'react-native'

import { ScreenHeader } from '@/components/screen-header'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const MAX_ASSET_SIZE_IN_MB = 2

export function ProfileScreen() {
  const [userImage, setUserImage] = useState(
    'https://github.com/ddanielcruz.png',
  )

  async function handleSelectUserImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      })

      const assets = result.assets ?? []
      const hasAsset = assets.length > 0 && assets[0].uri

      if (!hasAsset) {
        return
      }

      const [asset] = assets
      const fileSizeInMb = (asset.fileSize ?? 0) / 1024 / 1024

      if (fileSizeInMb > MAX_ASSET_SIZE_IN_MB) {
        return Alert.alert(
          'Imagem muito grande',
          `Essa imagem é muito grande. Escolha uma de até ${MAX_ASSET_SIZE_IN_MB}MB.`,
        )
      }

      setUserImage(asset.uri)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView px="$4" py="$8">
        <Center>
          <Avatar
            source={{ uri: userImage }}
            alt="Imagem do Daniel"
            size="$32"
          />

          <Box mt="$2" mb="$8">
            <TouchableOpacity onPress={handleSelectUserImage}>
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
