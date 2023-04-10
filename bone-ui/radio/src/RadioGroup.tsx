import React, { FC, useMemo } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { RadioGroupProvider } from './radioGroupContext'
import { Radio } from './Radio'
import { defaultRender } from './defaultRender'
import { RadioGroupContext, RadioGroupProps, RadioProps } from './types'
import { useRadioGroup } from './useRadioGroup'

function checkIsControlled(props: RadioGroupProps) {
  if (Reflect.has(props, 'value') && !Reflect.has(props, 'onChange')) {
    console.error(
      'when using radio group with controlled mode, value and onChange Props is required',
    )
  }
}

export const RadioGroup: FC<RadioGroupProps> = forwardRef((props: RadioGroupProps, ref) => {
  const {
    defaultValue,
    labelWidth,
    value: propValue,
    onChange: onChangeProp,
    options = [],
    renderItem,
    children,
    ...rest
  } = props

  const { value, onChange, setValue, controlled, name } = useRadioGroup(props)

  const ctxValue: RadioGroupContext = useMemo(
    () => ({
      controlled,
      onChange,
      value,
      setValue,
      name,
      labelWidth,
    }),
    [controlled, value, onChange, setValue, name, labelWidth],
  )

  if (renderItem) ctxValue.renderItem = renderItem

  checkIsControlled(props)

  return (
    <RadioGroupProvider value={ctxValue}>
      <Box ref={ref} toLeft spaceX-8 {...rest}>
        {options.map((item, index) => {
          const radioProps: RadioProps = {
            disabled: item.disabled,
            value: item.value,
            name: ctxValue.name,
          }

          if (renderItem) {
            radioProps.render = (state) => {
              const defaultRadio = defaultRender(state)
              return renderItem({ ...state, defaultRadio, item, index })
            }
          } else {
            radioProps.children = item.label
          }

          return <Radio key={index} {...radioProps} />
        })}
        {!options.length && children}
      </Box>
    </RadioGroupProvider>
  )
})
