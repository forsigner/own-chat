import React, { FC, memo } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { FowerColor, FowerHTMLProps } from '@fower/core'
import { Checkbox } from '@bone-ui/checkbox'

type Size = 'sm' | 'md' | 'lg' | number

function formatSize(size: any): number {
  const maps: any = { sm: 16, md: 20, lg: 24 }
  if (typeof size === 'string') return maps[size]
  return size
}

export interface SwitchProps extends Omit<FowerHTMLProps<'input'>, 'size'> {
  colorScheme?: FowerColor

  offColorScheme?: FowerColor

  /**
   * Switch size, you can set any size
   */
  size?: Size

  /**
   * Aspect ratio for siwtch
   */
  aspectRatio?: number
}

export const Switch: FC<SwitchProps> = memo(
  forwardRef((props: SwitchProps, ref) => {
    const {
      colorScheme = 'brand500',
      offColorScheme = 'gray400',
      size = 'md',
      aspectRatio = 1.8,
      ...rest
    } = props
    const formattedSize = formatSize(size)
    const width = formattedSize * aspectRatio
    const borderWidth = Math.ceil(formattedSize / 10)

    return (
      <Checkbox
        {...rest}
        ref={ref}
        render={({ checked }) => {
          const x = checked ? `${width - formattedSize}px` : '0px'
          const currentColor = checked ? colorScheme : offColorScheme
          return (
            <Box
              h={formattedSize}
              w={width}
              roundedFull
              border={borderWidth}
              borderColor={currentColor}
              bg={currentColor}
              // boxContent
              css={{ boxSizing: 'content-box' }}
            >
              <Box
                circle={formattedSize}
                bgWhite
                // bgGray300--dark
                css={{
                  transform: `translateX(${x})`,
                  transition: 'transform ease 250ms',
                }}
              />
            </Box>
          )
        }}
      />
    )
  }),
)
