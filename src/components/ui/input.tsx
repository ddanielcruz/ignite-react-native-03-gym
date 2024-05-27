import {
  Input as GluestackInput,
  InputField as GluestackInputField,
} from '@gluestack-ui/themed'
import { ComponentProps } from 'react'

export interface InputProps extends ComponentProps<typeof GluestackInputField> {
  isDisabled?: boolean
}

export function Input({ mt, mb, ml, mr, m, isDisabled, ...props }: InputProps) {
  return (
    <GluestackInput
      bg="$gray700"
      // @ts-expect-error - `$14` is defined in the theme
      h="$14"
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      m={m}
      borderColor="$gray700"
      $focus-borderColor="$green500"
      isDisabled={isDisabled}
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
