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
import { Controller, useForm } from 'react-hook-form'
import { SafeAreaView } from 'react-native-safe-area-context'

import backgroundImg from '@/assets/background.png'
import LogoImg from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type FormData = {
  name: string
  email: string
  password: string
}

export function SignUpScreen() {
  const navigation = useNavigation()
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  function handleReturnToLogin() {
    navigation.goBack()
  }

  function onSubmit(data: FormData) {
    console.log(data)
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
              <Controller
                control={control}
                name="name"
                rules={{ required: 'Informe o nome.' }}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="Nome"
                    autoComplete="name"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="email"
                rules={{
                  required: 'Informe o e-mail.',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Informe um e-mail válido.',
                  },
                }}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                rules={{
                  required: 'Informe a senha.',
                  minLength: {
                    value: 6,
                    message: 'A senha deve ter no mínimo 6 caracteres.',
                  },
                }}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="Senha"
                    secureTextEntry
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />

              <Button onPress={handleSubmit(onSubmit)}>Criar e acessar</Button>
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
