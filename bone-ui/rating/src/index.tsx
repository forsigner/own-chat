import React, { FC, useState, cloneElement, ReactNode, isValidElement } from 'react'
import { Box } from '@fower/react'
import { FowerColor, FowerHTMLProps } from '@fower/core'
import { forwardRef } from '@bone-ui/utils'
import { StarOutline } from '@bone-ui/icons'

type Size = 'sm' | 'md' | 'lg' | number

const sizes: Record<Size, number> = { sm: 20, md: 24, lg: 32 }

export interface RatingProps extends Omit<FowerHTMLProps<'div'>, 'value' | 'onChange'> {
  value?: number
  count?: number
  colorScheme?: FowerColor
  size?: Size
  disabled?: boolean
  icon?: ReactNode
  onChange?: (value: number) => any
}

function renderIcon(Icon: any) {
  if (isValidElement(Icon)) return Icon
  return <Icon />
}

export const Rating: FC<RatingProps> = forwardRef((props: RatingProps, ref) => {
  const {
    value: initValue,
    count = 5,
    colorScheme = 'yellow400',
    size = 'md',
    disabled,
    icon = <StarOutline />,
    onChange,
    ...rest
  } = props
  const Icon = renderIcon(icon)
  const [value, setValue] = useState(initValue || 0)
  const [hoveringIndex, setHoveringIndex] = useState(-1)

  const unActiveColor = 'gray200'

  const handelChange = (index: number) => {
    setValue(index)
    onChange?.(index)
  }

  const getColor = (index: number) => {
    return hoveringIndex >= 0
      ? hoveringIndex >= index
        ? colorScheme
        : unActiveColor
      : value > index
      ? colorScheme
      : unActiveColor
  }

  return (
    <Box ref={ref} className="bone-rating" row flexWrap="nowrap">
      {Array.from({ length: count }, (_, index) => {
        return (
          <Box key={index} {...rest}>
            {cloneElement(Icon, {
              size: sizes[size] || size,
              fill: 'currentColor',
              cursorPointer: !disabled,
              color: getColor(index),
              onClick: !disabled ? () => handelChange(index + 1) : undefined,
              onMouseEnter: !disabled ? () => setHoveringIndex(index) : undefined,
              onMouseLeave: !disabled ? () => setHoveringIndex(-1) : undefined,
            })}
          </Box>
        )
      })}
    </Box>
  )
})
