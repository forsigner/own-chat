import { FC, useRef } from 'react'
import { NodeProps, useFormContext } from 'fomir'
import { XCircleSolid } from '@bone-ui/icons'
import { Input as BoneInput, InputElement, InputGroup } from '@bone-ui/input'
import { FormField } from '../FormField'
import { InputNode } from '../bone-ui-node'

export const Input: FC<NodeProps<InputNode>> = (props) => {
  const form = useFormContext()
  const { value = '', focused, disabled, name, componentProps } = props.node
  const ref = useRef<HTMLInputElement>(null)
  const { w = '100p' } = componentProps || {}

  return (
    <FormField node={props.node}>
      <InputGroup w={w}>
        <BoneInput
          ref={ref}
          disabled={disabled}
          type={'text'}
          value={value || ''}
          onFocus={() => {
            form.setFieldState(name, { focused: true })
          }}
          onBlur={() => {
            form.setFieldState(name, { focused: false })
          }}
          onChange={props.handler.handleChange}
          {...componentProps}
        />
        {!!value?.length && focused && (
          <InputElement>
            <XCircleSolid
              cursorPointer
              gray400
              gray500--hover
              size={20}
              onClick={() => {
                props.handler.handleChange('')
                ref.current?.focus()
              }}
            />
          </InputElement>
        )}
      </InputGroup>
    </FormField>
  )
}
