import { FC } from 'react'
import { NodeProps } from 'fomir'
import { Input as BoneInput } from '@bone-ui/input'
import { FormField } from '../FormField'
import { NumberInputNode } from '../bone-ui-node'

export const NumberInput: FC<NodeProps<NumberInputNode>> = (props) => {
  const { value, disabled, componentProps } = props.node
  return (
    <FormField node={props.node}>
      <BoneInput
        disabled={disabled}
        type={'text'}
        value={value || ''}
        onChange={props.handler.handleChange}
        {...componentProps}
      />
    </FormField>
  )
}
