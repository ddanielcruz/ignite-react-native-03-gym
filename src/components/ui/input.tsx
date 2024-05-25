import {
  Input as GluestackInput,
  InputField as GluestackInputField,
} from '@gluestack-ui/themed'
import { ComponentProps } from 'react'

export interface InputProps
  extends ComponentProps<typeof GluestackInputField> {}

export function Input(props: InputProps) {
  return (
    <GluestackInput
      bg="$gray700"
      // @ts-expect-error - `$14` is defined in the theme
      h="$14"
      px="$2"
      borderColor="$gray700"
      $focus-borderColor="$green500"
    >
      <GluestackInputField
        color="$white"
        fontSize="$md"
        fontFamily="$body"
        placeholderTextColor="$gray300"
        selectionColor="$green500"
        cursorColor="$green500"
        {...props}
      />
    </GluestackInput>
  )
}
