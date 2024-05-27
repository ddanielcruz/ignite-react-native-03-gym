import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed'

export function HistoryCard() {
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      bgColor="$gray600"
      px="$5"
      py="$4"
      rounded="$md"
      gap="$2"
    >
      <VStack gap="$1" flex={1}>
        <Heading
          color="$white"
          fontSize="$md"
          textTransform="capitalize"
          lineHeight="$md"
          numberOfLines={1}
        >
          Costas
        </Heading>
        <Text color="$gray100" fontSize="$lg" numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>

      <Text color="$gray300" fontSize="$md">
        08:56
      </Text>
    </HStack>
  )
}
