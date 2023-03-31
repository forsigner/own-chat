import { FC } from 'react'
import { NodeProps } from 'fomir'
import { Select as BoneSelect } from '@bone-ui/select'
import { FormField } from '../FormField'
import { SelectNode } from '../bone-ui-node'

export const Select: FC<NodeProps<SelectNode>> = (props) => {
  const { value, componentProps, options = [], display, wrapper } = props.node

  return (
    <FormField node={props.node} hidden={!display}>
      <BoneSelect
        {...componentProps}
        // TODO: handle any
        options={options as any}
        value={value}
        onChange={props.handler.handleChange}
      />
    </FormField>
  )
}
