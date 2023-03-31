import React, { FC } from 'react'
import { NodeProps } from 'fomir'
import { Checkbox as BoneCheckbox } from '@bone-ui/checkbox'
import { FormField } from '../FormField'
import { CheckboxNode } from '../bone-ui-node'

export const Checkbox: FC<NodeProps<CheckboxNode>> = (props) => {
  const { value } = props.node

  function handleChange(e: any) {
    props.handler.handleChange(e.target.checked)
  }

  return (
    <FormField node={props.node}>
      <BoneCheckbox checked={value} onChange={handleChange} />
    </FormField>
  )
}
