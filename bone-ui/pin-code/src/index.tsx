import React, { ChangeEvent, KeyboardEvent, FC, useState } from 'react'
import MultiRef from 'react-multi-ref'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { Input, InputProps } from '@bone-ui/input'

export type PinCodeSize = 'sm' | 'md' | 'lg' | number

export interface PintCodeProps extends InputProps {
  containerCSS?: any
  placeholder?: string
  disabled?: boolean
  size?: PinCodeSize
  mask?: boolean
  length?: number
  value?: any[]
  onChange?: (newValue: any, e?: ChangeEvent<HTMLInputElement>) => any
}

const sizes: Record<PinCodeSize, number> = { sm: 32, md: 40, lg: 48 }

export const PintCode: FC<PintCodeProps> = forwardRef((props: PintCodeProps, ref) => {
  const { containerCSS = {}, ...rest } = props
  const [inputRefs] = useState(() => new MultiRef())

  return (
    <Box className="bone-pin-input" ref={ref} spaceX2 toLeft css={containerCSS}>
      {props?.value?.map((_, i) => (
        <PinCodeItem key={i} inputRefs={inputRefs} index={i} {...rest} />
      ))}
    </Box>
  )
})

interface PinCodeItemProps extends PintCodeProps {
  inputRefs: any
  index: number
}

function PinCodeItem(props: PinCodeItemProps) {
  const {
    placeholder = '○',
    inputRefs,
    disabled,
    value = [],
    onChange = () => {},
    mask,
    index,
    size = 'md',
    ...rest
  } = props

  const [isFocus, setFocus] = useState(false)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value: eventValue } = event.target

    /** handle copy and paste */
    if (eventValue.length > 2 && /^[0-9]+$/.test(eventValue)) {
      onChange(eventValue.split('').slice(0, 4), event)
      return
    }

    /** handle delete */
    if (eventValue === '') {
      const newValue = value.slice()
      newValue[index] = ''
      onChange(newValue, event)
      return
    }

    const currentValue = value[index]

    const getNextValue = (eventValue: string) => {
      let nextValue = eventValue
      if (currentValue[0] === eventValue[0]) {
        nextValue = eventValue[1]
      } else if (currentValue[0] === eventValue[1]) {
        nextValue = eventValue[0]
      }
      return nextValue
    }

    const nextValue = getNextValue(eventValue)

    // only handle number value
    if (/^[0-9]$/.test(nextValue)) {
      const newValue = value.slice() // copy value
      newValue[index] = nextValue

      onChange(newValue, event)

      if (index < value.length - 1) {
        const inputRef = inputRefs.map.get(index + 1) as HTMLInputElement
        if (inputRef && inputRef.focus) inputRef.focus()
      }
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Backspace' && value[index] === '' && index > 0) {
      const inputRef = inputRefs.map.get(index - 1) as HTMLInputElement
      if (inputRef && inputRef.focus) inputRef.focus()
    }
  }

  return (
    <Input
      ref={inputRefs.ref(index)}
      className="bone-pin-input-field"
      placeholder={isFocus ? '' : placeholder}
      type={mask ? 'password' : 'text'}
      disabled={!!disabled}
      size={size}
      value={value[index] || ''}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      w={sizes[size] || size}
      px0
      textCenter
      {...rest}
    />
  )
}
