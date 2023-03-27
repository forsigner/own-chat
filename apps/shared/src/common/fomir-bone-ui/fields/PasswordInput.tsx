import React, { FC, useState } from 'react'
import { NodeProps } from 'fomir'
import { EyeOffSolid, EyeSolid } from '@bone-ui/icons'
import { Input as BoneInput, InputElement, InputGroup } from '@bone-ui/input'
import { FormField } from '../FormField'
import { InputNode } from '../bone-ui-node'

export const PasswordInput: FC<NodeProps<InputNode>> = (props) => {
  const { value, disabled, componentProps } = props.node
  const [type, setType] = useState<'password' | 'text'>('password')

  return (
    <FormField node={props.node}>
      <InputGroup w-100p>
        <BoneInput
          disabled={disabled}
          type={type}
          value={value || ''}
          onChange={props.handler.handleChange}
          {...componentProps}
        />
        <InputElement spaceX2>
          {type === 'password' && (
            <EyeOffSolid
              cursorPointer
              gray400
              gray500--hover
              size={20}
              onClick={() => setType('text')}
            />
          )}

          {type === 'text' && (
            <EyeSolid
              cursorPointer
              gray400
              gray500--hover
              size={20}
              onClick={() => setType('password')}
            />
          )}
        </InputElement>
      </InputGroup>
    </FormField>
  )
}
