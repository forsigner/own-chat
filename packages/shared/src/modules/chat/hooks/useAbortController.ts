import { useEffect, useRef } from 'react'
import { emitter } from '../../../common/emitter'

export function useAbortController() {
  const abortControllerRef = useRef(new AbortController())

  useEffect(() => {
    emitter.on('ABORT', () => {
      const abortController = abortControllerRef.current
      if (!abortController.signal.aborted) {
        abortController.abort()
      }
    })
  }, [])

  return {
    getAbortController: () => abortControllerRef.current,
  }
}
