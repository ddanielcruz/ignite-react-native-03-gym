import { Heading } from '@gluestack-ui/themed'

import { Header, HeaderProps } from './layout/header'

export interface ScreenHeaderProps extends Omit<HeaderProps, 'children'> {
  title: string
}

export function ScreenHeader({ title, ...props }: ScreenHeaderProps) {
  return (
    <Header justifyContent="center" {...props}>
      <Heading color="$gray100" fontSize="$xl">
        {title}
      </Heading>
    </Header>
  )
}
