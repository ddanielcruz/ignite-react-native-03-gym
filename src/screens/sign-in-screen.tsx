import {
  Box,
  Center,
  Heading,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed'

import backgroundImg from '@/assets/background.png'
import LogoImg from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function SignInScreen() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bgColor="$gray700">
        <ImageBackground
          flex={1}
          source={backgroundImg}
          alt="Pessoas treinando"
          py="$24"
        >
          <SafeAreaView flex={1}>
            <Center mb="$24">
              <LogoImg />
              <Text color="$gray100" fontSize="$sm">
                Treine sua mente e o seu corpo
              </Text>
            </Center>

            <Heading color="$gray100" mx="auto" mb="$6">
              Acesse sua conta
            </Heading>

            <Box gap="$4" px="$4">
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />

              <Input placeholder="Senha" secureTextEntry />

              <Button>Acessar</Button>
            </Box>

            <Box px="$4" mt="auto" gap="$3" alignItems="center">
              <Text color="$gray100" fontSize="$sm" fontFamily="$body">
                Ainda não tem acesso?
              </Text>
              <Button variant="outline">Criar conta</Button>
            </Box>
          </SafeAreaView>
        </ImageBackground>
      </VStack>
    </ScrollView>
  )
}
