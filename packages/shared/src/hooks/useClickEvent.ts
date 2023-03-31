import { useState } from 'react'
import { getClickEvent } from '../common'

/**
 * 单击双击事件处理
 * @param singleCb 单击回调
 * @param doubleCb 双击回调
 */
export function useClickEvent(singleCb?: () => any, doubleCb?: () => any) {
  const [focus, setFocus] = useState(false)
  const [op, setOp] = useState(false)
  const { onSingleClick, onDoubleClick } = getClickEvent()

  function handleClick() {
    onSingleClick(() => {
      setOp(false)
      setFocus(true)
      singleCb && singleCb()
    })
  }

  function handleDoubleClick() {
    onDoubleClick(() => {
      setOp(true)
      setFocus(true)
      doubleCb && doubleCb()
    })
  }

  return {
    focus,
    op,
    handleClick,
    handleDoubleClick,
  }
}
