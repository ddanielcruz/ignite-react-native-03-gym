import {
  Input as GluestackInput,
  InputField as GluestackInputField,
} from '@gluestack-ui/themed'
import * as React from 'react'

export interface InputProps
  extends React.ComponentProps<typeof GluestackInputField> {
  isDisabled?: boolean
}

export const Input = React.forwardRef(
  ({ mt, mb, ml, mr, m, isDisabled, ...props }: InputProps, ref) => {
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
          ref={ref as never}
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
  },
)

Input.displayName = 'Input'
