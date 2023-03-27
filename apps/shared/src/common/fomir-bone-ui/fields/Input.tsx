import React, { FC, useRef } from 'react'
import { NodeProps } from 'fomir'
import { XCircleSolid } from '@bone-ui/icons'
import { Input as BoneInput, InputElement, InputGroup } from '@bone-ui/input'
import { FormField } from '../FormField'
import { InputNode } from '../bone-ui-node'

export const Input: FC<NodeProps<InputNode>> = (props) => {
  const { value = '', disabled, componentProps } = props.node
  const ref = useRef<HTMLInputElement>(null)

  return (
    <FormField node={props.node}>
      <InputGroup w-100p>
        <BoneInput
          ref={ref}
          disabled={disabled}
          type={'text'}
          value={value || ''}
          onChange={props.handler.handleChange}
          {...componentProps}
        />
        {!!value?.length && (
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
