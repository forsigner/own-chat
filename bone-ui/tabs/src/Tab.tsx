import React, { FC, ReactNode } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { FowerColor } from '@fower/core'
import { Radio, RadioProps, useRadioGroupContext } from '@bone-ui/radio'

export interface TabProps extends RadioProps {
  colorScheme?: FowerColor

  /**
   * Switch size, you can set any size
   */
  label?: ReactNode
}

export const Tab: FC<TabProps> = forwardRef((props: TabProps, ref) => {
  const { colorScheme = 'brand500', label, ...rest } = props

  const context = useRadioGroupContext()
  return (
    <Radio
      ref={ref}
      {...rest}
      value={props.value || (props.label as any)}
      shouldRenderChildren={false}
      render={({ checked, disabled }) => {
        if (context?.renderItem) {
          return context?.renderItem({
            checked,
            disabled,
            item: { label: props.label, value: props.value },
          } as any)
        }
        return (
          <Box
            borderColor={checked ? colorScheme : 'transparent'}
            borderBottom-2
            py2
            px1
            mb--1
            text-16
          >
            {label}
          </Box>
        )
      }}
    />
  )
})
