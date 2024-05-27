import { Pressable, Text } from '@gluestack-ui/themed'
import { ComponentProps } from 'react'

export interface GroupProps extends ComponentProps<typeof Pressable> {
  children: string
  active?: boolean
}

export function Group({ children, active = false, ...props }: GroupProps) {
  return (
    <Pressable
      w="$24"
      h="$10"
      bgColor="$gray600"
      rounded="$md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      borderWidth={1}
      borderColor={active ? '$green500' : '$gray600'}
      $active-borderColor="$green500"
      {...props}
    >
      <Text
        color={active ? '$green500' : '$gray200'}
        textTransform="uppercase"
        fontSize="$xs"
        fontWeight="$bold"
      >
        {children}
      </Text>
    </Pressable>
  )
}
