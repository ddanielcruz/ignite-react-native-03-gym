import {
  Button as GluestackButton,
  ButtonText,
  useToken,
} from '@gluestack-ui/themed'
import { ComponentProps } from 'react'

export interface ButtonsProps extends ComponentProps<typeof GluestackButton> {
  variant?: 'outline' | 'solid'
  children: string
}

export function Button({
  children,
  variant = 'solid',
  ...props
}: ButtonsProps) {
  const isOutline = variant === 'outline'
  const black = useToken('colors', 'black')

  return (
    <GluestackButton
      w="$full"
      // @ts-expect-error - `$14` is defined in the theme
      h="$14"
      bgColor={isOutline ? `transparent` : '$green700'}
      borderWidth={isOutline ? 1 : 0}
      borderColor="$green500"
      $active-bgColor={isOutline ? `${black}50` : '$green500'}
      {...props}
    >
      <ButtonText
        color={isOutline ? '$green500' : '$white'}
        fontFamily="$heading"
      >
        {children}
      </ButtonText>
    </GluestackButton>
  )
}
