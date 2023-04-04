import { AtomicProps } from '@fower/atomic-props'
import { InputHTMLAttributes } from 'react'
import { FieldNode, BaseNode, Node } from 'fomir'
import { RadioGroupProps } from '@bone-ui/radio'
import { InputProps } from '@bone-ui/input'
import { SelectProps } from '@bone-ui/select'
import { ButtonProps } from '@bone-ui/button'
import { SwitchProps } from '@bone-ui/switch'

export interface InputNode extends FieldNode {
  component: 'Input'
  value?: string | null
  componentProps?: InputProps
}

export interface NumberInputNode extends FieldNode {
  component: 'NumberInput'
  value?: number
  componentProps?: InputProps
}

export interface CounterInputNode extends FieldNode {
  component: 'CounterInput'
  value?: number
  componentProps?: InputProps
}

export interface PasswordInputNode extends FieldNode {
  component: 'PasswordInput'
  value?: string
  componentProps?: InputProps
}

export interface SelectNode extends FieldNode {
  component: 'Select'
  componentProps?: SelectProps
}

export interface CheckboxNode extends FieldNode {
  component: 'Checkbox'
  componentProps?: InputHTMLAttributes<HTMLInputElement>
}

export interface CheckboxGroupNode extends FieldNode {
  component: 'CheckboxGroup'
}

export interface RadioGroupNode extends FieldNode {
  component: 'RadioGroup'
  componentProps?: RadioGroupProps
}

export interface TextareaNode extends FieldNode {
  component: 'Textarea'
}

export interface SwitchNode extends FieldNode {
  component: 'Switch'
  componentProps?: SwitchProps & AtomicProps
}

export interface ResetNode extends BaseNode {
  component: 'Reset'
  text: string
  componentProps?: ButtonProps & AtomicProps
}

export interface SubmitNode extends BaseNode {
  component: 'Submit'
  text: string
  componentProps?: ButtonProps & Omit<AtomicProps, 'hidden'>
}

export interface BoxNode extends BaseNode {
  component: 'Box'
  id?: string
  css?: string
  text?: string
  children?: Node[]
}

export type BoneUINode =
  | InputNode
  | PasswordInputNode
  | NumberInputNode
  | SelectNode
  | CheckboxNode
  | CheckboxGroupNode
  | RadioGroupNode
  | TextareaNode
  | SwitchNode
  | ResetNode
  | SubmitNode
  | BoxNode
  | CounterInputNode
