import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { useRadio } from './useRadio'
import { defaultRender } from './defaultRender'
import { RadioProps } from './types'
import { cx } from '@bone-ui/utils'
import { css } from '@fower/core'
import { useRadioGroupContext } from './radioGroupContext'

export const Radio: FC<RadioProps> = forwardRef((props: RadioProps, ref) => {
  const {
    children,
    shouldRenderChildren = true,
    render = defaultRender,
    colorScheme = 'brand500',
    ...rest
  } = props

  const { labelWidth } = useRadioGroupContext()
  const { inputProps, state } = useRadio(props)
  const { disabled } = state

  return (
    <Box
      as="label"
      className="bone-radio"
      toCenterY
      toLeft
      w={labelWidth}
      cursorPointer={!disabled}
      cursorNotAllowed={disabled}
      opacity-50={disabled}
    >
      <input
        className={cx('bone-radio-input', css('square0', 'opacity-0', 'hidden'))}
        ref={ref}
        type="radio"
        {...inputProps}
        {...rest}
      />
      {render({ ...state, children, colorScheme })}

      {shouldRenderChildren && children && (
        <Box className="bone-radio-label" ml-8>
          {children}
        </Box>
      )}
    </Box>
  )
})
