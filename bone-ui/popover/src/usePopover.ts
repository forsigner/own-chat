import { useState, useMemo, useCallback } from 'react'
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  // useHover,
  useDismiss,
  useRole,
  useInteractions,
  Placement,
} from '@floating-ui/react'

export interface PopoverOptions {
  isLazy?: boolean

  isDisabled?: boolean

  /**
   * 初始化时是否打开
   */
  initialOpened?: boolean

  placement?: Placement

  portal?: boolean

  modal?: boolean

  isOpen?: boolean

  onOpenChange?: (open: boolean) => void

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
}

export function usePopover({
  initialOpened = false,
  placement = 'bottom',
  modal = true,
  portal = true,
  isOpen: controlledOpen,
  onOpenChange: setControlledOpen,
  onClose,
  onOpen,
  isDisabled,
}: PopoverOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpened)

  const [labelId, setLabelId] = useState<string | undefined>()

  const [descriptionId, setDescriptionId] = useState<string | undefined>()

  const [triggerWidth, setTriggerWidth] = useState<string | null>(null)

  const isOpen = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  const data = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [offset(5), flip(), shift()],
  })

  const context = data.context

  const click = useClick(context, {
    enabled: controlledOpen == null,
  })

  // const hover = useHover(context, {
  //   enabled: controlledOpen == null,
  // })

  const dismiss = useDismiss(context)

  const role = useRole(context, { role: 'tooltip' })

  const interactions = useInteractions([click, dismiss, role])

  const open = useCallback(() => {
    setOpen(true)
    onOpen?.()
  }, [setOpen, onOpen])

  const close = useCallback(() => {
    setOpen(false)
    onClose?.()
  }, [setOpen, onClose])

  return useMemo(
    () => ({
      isDisabled,

      isOpen,
      setOpen,

      close,
      open,

      ...interactions,
      ...data,
      modal,
      portal,

      labelId,
      setLabelId,

      descriptionId,
      setDescriptionId,

      triggerWidth,
      setTriggerWidth,
    }),
    [
      isOpen,
      setOpen,
      interactions,
      data,
      portal,
      modal,
      labelId,
      descriptionId,
      close,
      open,
      isDisabled,
      triggerWidth,
    ],
  )
}
