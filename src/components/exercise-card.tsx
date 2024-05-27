import { Entypo } from '@expo/vector-icons'
import {
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/themed'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

export interface ExerciseCardProps extends TouchableOpacityProps {
  exercise: string
}

export function ExerciseCard({ exercise, ...props }: ExerciseCardProps) {
  return (
    <TouchableOpacity {...props}>
      <HStack
        gap="$3"
        alignItems="center"
        bgColor="$gray500"
        p="$2"
        pr="$4"
        rounded="$md"
      >
        <Image
          source={{
            uri: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_300x200.jpg',
          }}
          alt="Remada unilateral"
          rounded="$md"
          w="$16"
          h="$16"
        />

        <VStack mb="$1" flex={1}>
          <Heading fontSize="$lg" color="$white" numberOfLines={2}>
            {exercise}
          </Heading>
          <Text fontSize="$sm" color="$gray200" numberOfLines={1}>
            3 séries x 10 repetições
          </Text>
        </VStack>

        <Icon
          as={Entypo}
          // @ts-expect-error - Icon not inheriting Entypo props
          name="chevron-thin-right"
          size="lg"
          color="$gray300"
        />
      </HStack>
    </TouchableOpacity>
  )
}
