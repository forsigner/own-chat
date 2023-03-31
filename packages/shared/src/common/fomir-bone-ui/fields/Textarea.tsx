import React, { FC } from 'react'
import { NodeProps } from 'fomir'
import { Textarea as BoneTextarea } from '@bone-ui/textarea'
import { FormField } from '../FormField'
import { TextareaNode } from '../bone-ui-node'

export const Textarea: FC<NodeProps<TextareaNode>> = (props) => {
  const { value, componentProps } = props.node

  return (
    <FormField node={props.node}>
      <BoneTextarea
        placeholder={componentProps.placeholder}
        value={value}
        onChange={props.handler.handleChange}
      />
    </FormField>
  )
}
