import {
  FlatList,
  Heading,
  HStack,
  Text,
  View,
  VStack,
} from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

import { ExerciseCard } from '@/components/exercise-card'
import { HomeHeader } from '@/components/home-header'
import { Group } from '@/components/ui/group'
import { AppNavigatorRouterProps } from '@/routes/app.routes'

interface Exercise {
  name: string
}

export function HomeScreen() {
  const navigation = useNavigation<AppNavigatorRouterProps>()

  const [exerciseGroups] = useState([
    'Costas',
    'Bíceps',
    'Tríceps',
    'Ombros',
    'Pernas',
    'Peito',
  ])
  const [selectedGroup, setSelectedGroup] = useState(exerciseGroups[0])
  const [exercises] = useState<Exercise[]>([
    { name: 'Remada unilateral' },
    { name: 'Puxada frontal' },
    { name: 'Rosca direta' },
    { name: 'Rosca alternada' },
    { name: 'Tríceps testa' },
    { name: 'Tríceps francês' },
    { name: 'Desenvolvimento' },
    { name: 'Elevação lateral' },
    { name: 'Agachamento' },
    { name: 'Leg press' },
    { name: 'Cadeira extensora' },
    { name: 'Supino reto' },
    { name: 'Supino inclinado' },
    { name: 'Crucifixo' },
  ])

  function handleOpenExercise() {
    navigation.navigate('exercise')
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        px="$4"
        my="$8"
        data={exerciseGroups}
        maxHeight="$10"
        minHeight="$10"
        keyExtractor={(item) => item as string}
        renderItem={({ item }) => {
          const group = item as string
          return (
            <Group
              active={selectedGroup === group}
              onPress={() => setSelectedGroup(group)}
            >
              {group}
            </Group>
          )
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View w="$3" />}
      />

      <VStack flex={1} px="$4" pb="$8">
        <HStack justifyContent="space-between" mb="$5">
          <Heading color="$gray200" fontSize="$md">
            Exercícios
          </Heading>
          <Text color="$gray200" fontSize="$sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => (item as Exercise).name}
          renderItem={({ item }) => {
            const exercise = item as Exercise
            return (
              <ExerciseCard
                exercise={exercise.name}
                onPress={() => handleOpenExercise()}
              />
            )
          }}
          ItemSeparatorComponent={() => <View h="$3" />}
          showsVerticalScrollIndicator={false}
        />
      </VStack>
    </VStack>
  )
}
