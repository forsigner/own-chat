import { ReactNode } from 'react'
import { Placement } from '@floating-ui/react'

export interface PopoverContext {
  popoverProps: PopoverProps

  triggerProps: any
  setOpen: any

  isOpen: boolean

  isDisabled?: boolean

  renderLayer: any
  layerProps: any
  arrowProps: any

  /**
   * Open popover content
   */
  open(): void

  /**
   * Close popover content
   */
  close(): void

  getRenderProps(): {
    isOpen: boolean
    open(): void
    close(): void
  }

  triggerWidth: string | null
  setTriggerWidth: any
}

export interface PopoverRenderProps {
  isOpen: boolean
  open(): void
  close(): void
}

export interface PopoverProps {
  isLazy?: boolean

  isDisabled?: boolean

  /**
   * 初始化时是否打开
   */
  initialOpened?: boolean

  /**
   * controlled popover
   */
  opened?: boolean

  /**
   * 放置位置
   */
  placement?: Placement

  /**
   * 点击 body 是否自动关闭
   */
  autoClose?: boolean

  showMask?: boolean

  trigger?: 'click' | 'hover' | 'manual'

  /**
   * 关闭时回调
   */
  onClose?(): void

  /**
   * 打开时回调
   */
  onOpen?(): void

  children: ((props: PopoverRenderProps) => ReactNode) | ReactNode
}

export interface UsePopoverReturn extends PopoverContext {}
