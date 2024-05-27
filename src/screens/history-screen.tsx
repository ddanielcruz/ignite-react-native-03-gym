import { Heading, SectionList, Text, View, VStack } from '@gluestack-ui/themed'
import { useState } from 'react'

import { HistoryCard } from '@/components/history-card'
import { ScreenHeader } from '@/components/screen-header'

export function HistoryScreen() {
  const [exercises] = useState([
    {
      title: '26.05.24',
      data: ['Puxada frontal', 'Rosca direta'],
    },
    {
      title: '25.05.24',
      data: ['Supino reto', 'Voador'],
    },
  ])
  const isEmpty = exercises.length === 0

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        p="$8"
        pt={0}
        gap="$3"
        sections={exercises}
        keyExtractor={(item) => item as string}
        renderItem={() => <HistoryCard />}
        renderSectionHeader={({ section }) => {
          const { title } = section as unknown as { title: string }

          return (
            <Heading
              color="$gray100"
              fontSize="$md"
              lineHeight="$md"
              mb="$3"
              mt="$8"
            >
              {title}
            </Heading>
          )
        }}
        ItemSeparatorComponent={() => <View h="$3" />}
        ListEmptyComponent={() => (
          <Text textAlign="center" color="$gray100">
            Você ainda não realizou nenhum exercício.{'\n'}Vamos treinar hoje?
          </Text>
        )}
        contentContainerStyle={
          isEmpty && { flexGrow: 1, justifyContent: 'center' }
        }
      />
    </VStack>
  )
}
