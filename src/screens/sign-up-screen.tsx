import {
  Box,
  Center,
  Heading,
  ImageBackground,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import backgroundImg from '@/assets/background.png'
import LogoImg from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function SignUpScreen() {
  const navigation = useNavigation()

  function handleReturnToLogin() {
    navigation.goBack()
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <ImageBackground
          flex={1}
          source={backgroundImg}
          defaultSource={backgroundImg}
          alt="Pessoas treinando"
          py="$24"
        >
          <SafeAreaView style={{ flex: 1 }}>
            <Center mb="$24">
              <LogoImg />
              <Text color="$gray100" fontSize="$sm">
                Treine sua mente e o seu corpo
              </Text>
            </Center>

            <Heading color="$gray100" mx="auto" mb="$6">
              Crie sua conta
            </Heading>

            <Box gap="$4" px="$4">
              <Input placeholder="Nome" autoComplete="name" />
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />
              <Input placeholder="Senha" secureTextEntry />

              <Button>Criar e acessar</Button>
            </Box>

            <Box px="$4" mt="auto" alignItems="center">
              <Button variant="outline" onPress={handleReturnToLogin}>
                Voltar para o login
              </Button>
            </Box>
          </SafeAreaView>
        </ImageBackground>
      </VStack>
    </ScrollView>
  )
}
