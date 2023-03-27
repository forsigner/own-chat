import React, { FC } from 'react'
import { NodeProps } from 'fomir'
import { CheckboxGroup as BoneCheckboxGroup, Checkbox } from '@bone-ui/checkbox'
import { FormField } from '../FormField'
import { CheckboxGroupNode } from '../bone-ui-node'

export const CheckboxGroup: FC<NodeProps<CheckboxGroupNode>> = (props) => {
  const { value, options = [] } = props.node

  return (
    <FormField node={props.node}>
      <BoneCheckboxGroup value={value} onChange={props.handler.handleChange}>
        {options.map((item: any) => (
          <Checkbox key={item.value} value={item.value}>
            {item.label}
          </Checkbox>
        ))}
      </BoneCheckboxGroup>
    </FormField>
  )
}
