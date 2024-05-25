import { Center } from '@gluestack-ui/themed'

import { Loading } from '@/components/ui/loading'

export function LoadingScreen() {
  return (
    <Center flex={1} bgColor="$gray700">
      <Loading />
    </Center>
  )
}
