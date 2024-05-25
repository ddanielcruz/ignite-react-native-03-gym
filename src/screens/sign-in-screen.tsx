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
import { AuthNavigatorRouterProps } from '@/routes/auth.routes'

export function SignInScreen() {
  const navigation = useNavigation<AuthNavigatorRouterProps>()

  function handleCreateAccount() {
    navigation.navigate('sign-up')
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
              <Button variant="outline" onPress={handleCreateAccount}>
                Criar conta
              </Button>
            </Box>
          </SafeAreaView>
        </ImageBackground>
      </VStack>
    </ScrollView>
  )
}
