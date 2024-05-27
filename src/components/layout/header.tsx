import { HStack } from '@gluestack-ui/themed'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export interface HeaderProps extends React.ComponentProps<typeof HStack> {}

export function Header(props: HeaderProps) {
  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 16 // Safe area top + 16px ($4)

  return (
    <HStack
      bgColor="$gray600"
      pt={paddingTop}
      pb="$4"
      px="$8"
      alignItems="center"
      {...props}
    />
  )
}
