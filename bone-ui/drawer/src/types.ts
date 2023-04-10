import { FowerHTMLProps } from '@fower/core'
import { ReactNode } from 'react'

export interface DrawerState {
  isOpen: boolean
}

export interface DrawerContext {
  state: DrawerState

  setState: any

  open(): void
  close(): void
}

export interface DrawerRenderProps {
  isOpen: boolean
  open(): void
  close(): void
}

export interface DrawerOwnProps {
  isLazy?: boolean

  /**
   * 初始化时是否打开
   */
  isOpen?: boolean

  /**
   * 点击 body 是否自动关闭
   */
  autoClose?: boolean

  portal?: boolean

  /**
   * 关闭时回调
   */
  onClose?(): void

  /**
   * 打开时回调
   */
  onOpen?(): void
}

export interface DrawerOverlayProps extends FowerHTMLProps<'div'> {}

export interface DrawerContentProps extends FowerHTMLProps<'div'> {
  children: ReactNode
}

export interface DrawerProps extends FowerHTMLProps<'div'>, DrawerOwnProps {
  width?: string | number
  children: ReactNode
}
