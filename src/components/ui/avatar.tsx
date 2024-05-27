/* eslint-disable jsx-a11y/alt-text */
import { Image } from '@gluestack-ui/themed'
import { ComponentProps } from 'react'

type ImageProps = ComponentProps<typeof Image>

export interface AvatarProps extends Omit<ImageProps, 'size'> {
  size: NonNullable<ImageProps['w']>
}

export function Avatar({ size, ...props }: AvatarProps) {
  return (
    <Image
      w={size}
      h={size}
      rounded="$full"
      borderWidth="$2"
      borderColor="$gray400"
      bgColor="$gray500"
      {...props}
    />
  )
}
