import React, { ChangeEvent, FC } from 'react'
import { NodeProps } from 'fomir'
import { Switch as BoneSwitch } from '@bone-ui/switch'
import { FormField } from '../FormField'

export const Switch: FC<NodeProps<any>> = (props) => {
  const { value, label, componentProps } = props.node

  function handleChange(e: ChangeEvent<any>) {
    props.handler.handleChange(e.target.checked)
  }

  return (
    <FormField node={props.node} showLabel={false}>
      <BoneSwitch {...componentProps} checked={value} onChange={handleChange}>
        {label}
      </BoneSwitch>
    </FormField>
  )
}
