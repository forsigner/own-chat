import { useEffect, useRef, useCallback } from 'react'
interface currentType {
  timer: any
  fn: Function
}
export default function useDebounce(fn: Function, delay: number, dep = []) {
  const { current } = useRef<currentType>({ fn, timer: null })
  useEffect(
    function () {
      current.fn = fn
    },
    [fn],
  )

  return useCallback((...args) => {
    if (current.timer) {
      clearTimeout(current.timer)
    }
    current.timer = setTimeout(() => {
      current.fn.call(null, ...args)
    }, delay)
  }, dep)
}
