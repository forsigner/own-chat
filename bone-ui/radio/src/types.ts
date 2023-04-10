import { FowerColor, FowerHTMLProps } from '@fower/core'
import { ReactNode } from 'react'

export type StringOrNumber = string | number

export type RenderItem = (props: RadioRenderItemProps) => ReactNode

export type HtmlInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export interface RadioProps extends FowerHTMLProps<'input'> {
  render?: (props: RadioRenderProps) => ReactNode

  colorScheme?: FowerColor

  /**
   * Render children or not
   */
  shouldRenderChildren?: boolean
}

export interface RadioRenderProps {
  checked?: boolean

  disabled?: boolean

  focused?: boolean

  item?: RadioOption

  children?: ReactNode
}

export interface RadioRenderItemProps extends RadioRenderProps {
  index: number
  item: RadioOption
  defaultRadio: ReactNode
}

export interface RadioHooksResult {
  inputProps: HtmlInputProps

  renderItem?: RenderItem

  state: {
    checked?: boolean
    disabled?: boolean
  }
}

export interface RadioOption {
  label: React.ReactNode
  value: any
  disabled?: boolean
  icon?: any
  [key: string]: any
}

export type DefaultRender = (props: RadioRenderProps & { colorScheme?: string }) => ReactNode

export interface RadioGroupProps
  extends Omit<FowerHTMLProps<'div'>, 'onChange' | 'value' | 'defaultValue'> {
  value?: StringOrNumber

  defaultValue?: StringOrNumber

  options?: RadioOption[]

  name?: string

  renderItem?: RenderItem

  labelWidth?: number | string

  onChange?(nextValue: StringOrNumber): void
}

export interface UseRadioGroupReturn {
  name: string
  controlled: boolean
  value?: StringOrNumber
  onChange: any
  setValue: any
  // inputProps: InputProps
  // state: {
  //   checked?: boolean
  //   disabled?: boolean
  // }
  [key: string]: any
}

// export interface RadioGroupContext extends Pick<UseRadioGroupReturn, 'onChange' | 'value'> {
//   // TODO: handle any
//   setValue: any

//   controlled: boolean
// }

export interface RadioGroupContext {
  /**
   * radio group unique name
   */
  name?: string

  labelWidth?: number | string

  /**
   * radio group name, string or number
   */
  value: any

  setValue: any

  renderItem?(props: RadioRenderItemProps): ReactNode
}
