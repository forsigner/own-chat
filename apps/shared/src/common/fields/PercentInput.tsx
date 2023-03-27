import React, { FC } from 'react'
import { NodeProps } from 'fomir'
import { Input as BoneInput, InputElement, InputGroup } from 'bone-ui'
import { PercentInputNode } from '../../custom-types'
import { FormField } from '../fomir-bone-ui'

export const PercentInput: FC<NodeProps<PercentInputNode>> = (props) => {
  const { value, disabled, componentProps } = props.node
  return (
    <FormField node={props.node}>
      <InputGroup w-100p>
        <BoneInput
          disabled={disabled}
          type={'text'}
          value={value || ''}
          onChange={props.handler.handleChange}
          {...componentProps}
        />
        <InputElement>%</InputElement>
      </InputGroup>
    </FormField>
  )
}
