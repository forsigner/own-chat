import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { styled } from '@fower/styled'
import { FowerHTMLProps, store } from '@fower/core'
import { Box } from '@fower/react'
import { useId } from '@bone-ui/hooks'

const Image = styled('img')
export interface AvatarProps extends FowerHTMLProps<'div'> {
  name?: string
  src?: string
  size?: 'sm' | 'md' | 'lg' | number
}

const sizes: any = {
  sm: 24,
  md: 32,
  lg: 48,
}

export const Avatar: FC<AvatarProps> = forwardRef((props: AvatarProps, ref) => {
  const { src, size = 'md', name, ...rest } = props
  const s = sizes[size] || size

  const id = useId(undefined, '')
  const isName = !!name && !src
  let restProps: any = rest

  // fake random bg color
  if (isName) {
    const { colors } = store.theme
    const keys = Object.keys(colors)
      .filter((i) => i.endsWith('600'))
      .sort()
    const colorName = keys[Number(id || 0) % keys.length]
    restProps = { bg: colorName, ...rest }
  }

  return (
    <Box
      ref={ref as any}
      className="bone-avatar"
      toCenter
      square={s}
      rounded={s}
      white
      overflowHidden
      text={s * 0.5}
      {...restProps}
    >
      {src && <Image className="bone-avatar-img" square-100p src={src} />}
      {!src && !!name && (
        <Box as="span" inlineFlex>
          {name.charAt(0)}
        </Box>
      )}
    </Box>
  )
})
