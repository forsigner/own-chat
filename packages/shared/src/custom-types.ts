import { HtmlInputProps } from 'bone-ui'
import { FieldNode } from 'fomir'
import { BoneUINode } from './common/fomir-bone-ui'

export interface DatePickerNode extends FieldNode {
  component: 'DatePicker'
  // value?: string
  // componentProps?: HtmlInputProps
}

export interface DateRangePickerNode extends FieldNode {
  component: 'DateRangePicker'
}

export interface PercentInputNode extends FieldNode {
  component: 'PercentInput'
  value?: string
  componentProps?: HtmlInputProps
}

export interface PlanIntervalNode extends FieldNode {
  component: 'PlanInterval'
  value?: string
}

type CustomNode =
  | BoneUINode
  | DatePickerNode
  | DateRangePickerNode
  | PercentInputNode
  | PlanIntervalNode

declare module 'fomir' {
  interface CustomTypes {
    Node: CustomNode & { updatable?: boolean }
    // | {
    //     component: CustomNode['component'] | ({} & string)
    //     [key: string]: any
    //   }
  }
  interface Validators {
    moreThan?: [string, string]
  }
}
