import { FC } from 'react'
import { NodeProps } from 'fomir'
import { Input as BoneInput, InputGroup, InputElement } from '@bone-ui/input'
import { FormField } from '../FormField'
import { CounterInputNode } from '../bone-ui-node'
import { MinusSolid, PlusSolid } from 'bone-ui'

export const CounterInput: FC<NodeProps<CounterInputNode>> = (props) => {
  const { value, disabled, componentProps } = props.node

  return (
    <FormField node={props.node}>
      <InputGroup>
        <InputElement
          cursorPointer
          cursorNotAllowed={componentProps?.min === Number(value)}
          onClick={() => {
            if (componentProps?.min === Number(value)) return
            props.handler.handleChange(Number(value) - 1)
          }}
        >
          <MinusSolid gray500 />
        </InputElement>

        <BoneInput
          textCenter
          disabled={disabled}
          type={'text'}
          value={value || ''}
          onChange={props.handler.handleChange}
          {...componentProps}
        />

        <InputElement cursorPointer onClick={() => props.handler.handleChange(Number(value) + 1)}>
          <PlusSolid gray500 />
        </InputElement>
      </InputGroup>
    </FormField>
  )
}
