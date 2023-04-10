import React, { FC } from 'react'
import InputNumber, { InputNumberProps } from 'rc-input-number'
import { forwardRef, __DEV__ } from '@bone-ui/utils'
import { css } from '@fower/core'
import { Colors } from '@fower/core'
import { AtomicProps } from '@fower/atomic-props'
import { upFirst } from '@fower/utils'
import { Placement, useInputGroupContext } from './context'
import { Id } from './types'

type Size = 'sm' | 'md' | 'lg' | number

export interface NumberInputProps extends Omit<InputNumberProps, 'size'> {
  colorScheme?: keyof Colors

  size?: Size

  variant?: 'outline' | 'unstyled' | 'filled'
}

interface Attrs extends AtomicProps {
  [key: string]: any
}

function useStyles(props: NumberInputProps, h: any) {
  // let attrs: Attrs = { rounded: true }
  let attrs: Attrs = {}
  const ctx = useInputGroupContext()

  // pure input, not with input group
  if (!ctx.placementMap) return attrs

  const { placementMap } = ctx
  const { placement } = placementMap.get(props)!
  const mapArr = Array.from(placementMap.values())
  const first = mapArr[0]
  const last = mapArr.pop()

  if (first.id === Id.InputElement) {
    attrs['pl--i'] = h
  }

  if (last?.id === Id.InputElement) {
    attrs['pr--i'] = h
  }

  if (first.id === Id.InputAddon) {
    attrs['roundedLeft--i'] = 0
  }

  if (last?.id === Id.InputAddon) {
    attrs['roundedRight--i'] = 0
  }

  attrs['zIndex--focus'] = 1

  if (placement === Placement.middle) {
    attrs.borderLeft = 1
  }

  if (placement === Placement.start) {
    attrs.borderLeft = 1
  }

  if (placement === Placement.end) {
    attrs.borderRight = 1
  }

  return attrs
}

interface Sizes {
  [key: string]: {
    h: number
    text: number
    px?: number
    rounded?: number
  }
}

function getSizeStyle(size: Size) {
  const sizes: Sizes = {
    sm: { px: 12, h: 32, text: 14, rounded: 6 },
    md: { px: 16, h: 40, text: 16, rounded: 8 },
    lg: { px: 16, h: 48, text: 18, rounded: 10 },
  }

  if (typeof size === 'string') return sizes[size]
  return {
    h: size,
    px: size * 0.35,
    text: size * 0.35,
    rounded: size * 0.2,
  }
}

export const NumberInput: FC<NumberInputProps> = forwardRef((props: NumberInputProps, ref) => {
  const { colorScheme = 'brand500', size = 'md', variant = 'outline', ...rest } = props
  const { disabled } = props
  const sizesStyle = getSizeStyle(size)

  const attrs = useStyles(props, sizesStyle.h)

  if (variant !== 'unstyled') {
    attrs[`ring${upFirst(colorScheme)}-1--focus`] = true
    // attrs[`ring${upFirst(colorScheme)}-1--focus`] = true
    attrs['borderTransparent--focus'] = true
  }

  const c = css({
    w: '100p',
    gray800: true,
    'bgTransparent--focus': true,
    bgWhite: true,
    outlineNone: true,
    placeholderGray400: true,
    'opacity-40': !!disabled,
    cursorNotAllowed: !!disabled,
    transitionCommon: true,
    duration: 300,
  })

  return <InputNumber ref={ref} defaultValue={10} className={c} {...rest} />
})

if (__DEV__) {
  NumberInput.displayName = 'NumberInput'
}

;(NumberInput as any).id = 'NumberInput'
