import { Feather } from '@expo/vector-icons'
import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, TouchableOpacity } from 'react-native'

import BodyImg from '@/assets/body.svg'
import RepetitionsImg from '@/assets/repetitions.svg'
import SeriesImg from '@/assets/series.svg'
import { Header } from '@/components/layout/header'
import { Button } from '@/components/ui/button'

export function ExerciseScreen() {
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      <Header>
        <VStack flex={1}>
          <TouchableOpacity onPress={handleGoBack}>
            <Icon
              as={Feather}
              // @ts-expect-error - Icon does not inherit Feather props
              name="arrow-left"
              size="xl"
              color="$green500"
            />
          </TouchableOpacity>

          <HStack alignItems="center" justifyContent="space-between" mt="$2">
            <Heading color="$gray100" fontSize="$lg" flexShrink={1}>
              Puxada frontal
            </Heading>

            <HStack alignItems="center">
              <BodyImg />

              <Text color="$gray200" ml="$1" textTransform="capitalize">
                Costas
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </Header>

      <ScrollView>
        <VStack px="$4" py="$8">
          <Image
            w="$full"
            h="$80"
            source={{
              uri: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_300x200.jpg',
            }}
            alt="Puxada frontal"
            mb="$3"
            resizeMode="cover"
            rounded="$lg"
          />

          <Box p="$4" bgColor="$gray600" rounded="$md">
            <HStack justifyContent="space-around" pb="$4">
              <HStack alignItems="center">
                <SeriesImg />

                <Text color="$gray200" ml="$2">
                  3 séries
                </Text>
              </HStack>

              <HStack alignItems="center">
                <RepetitionsImg />

                <Text color="$gray200" ml="$2">
                  10 repetições
                </Text>
              </HStack>
            </HStack>

            <Button>Marcar como realizado</Button>
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
