import React, { ChangeEvent, FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { cx } from '@bone-ui/utils'
import { css } from '@fower/core'
import { Box } from '@fower/react'
import { useCheckbox } from './useCheckbox'
import { CheckboxProps } from './types'
import { useCheckboxGroupContext } from './checkboxGroupContext'
import { checkboxDefaultRender } from './checkboxDefaultRender'

export const Checkbox: FC<CheckboxProps> = forwardRef((props: CheckboxProps, ref) => {
  const {
    children,
    colorScheme = 'brand500',
    render = checkboxDefaultRender,
    value,
    defaultChecked,
    disabled: propDisabled,
    onChange: propOnChnage,
    ...rest
  } = props
  const context = useCheckboxGroupContext()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    context?.onChange(e)
    return props?.onChange?.(e)
  }

  const { inputProps, state } = useCheckbox({ ...props, onChange })
  const { disabled } = state

  // TODO: need refactor
  let checkedProps: any = {}
  if (Reflect.has(props, 'defaultChecked')) {
    checkedProps.defaultChecked = defaultChecked
  } else {
    checkedProps.checked = state.checked
  }

  return (
    <Box
      as="label"
      className="bone-checkbox"
      inlineFlex
      toCenterY
      toLeft
      cursorPointer={!disabled}
      cursorNotAllowed={disabled}
      opacity-50={disabled}
      {...rest as any}
    >
      <input
        ref={ref}
        className={cx('bone-checkbox-input', css('square0', 'opacity-0', 'hidden'))}
        type="checkbox"
        value={value}
        {...checkedProps}
        {...inputProps}
      />

      {render({ ...state, children, colorScheme })}

      {children && (
        <Box className="bone-checkbox-label" ml-8 leading-1em>
          {children}
        </Box>
      )}
    </Box>
  )
})
