import { VStack } from '@gluestack-ui/themed'

import { HomeHeader } from '@/components/home-header'

export function HomeScreen() {
  return (
    <VStack flex={1}>
      <HomeHeader />
    </VStack>
  )
}
