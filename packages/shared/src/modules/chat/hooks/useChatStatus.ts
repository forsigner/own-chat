import { useCallback } from 'react'
import { getState, useStore } from 'stook'

const key = 'Chat_status'

type Status = 'normal' | 'fetching' | 'streaming' | 'finished'

export function useChatStatus() {
  const [status, setStatus] = useStore<Status>(key, 'normal')

  const setChatStatus = useCallback(
    (newStatus: Status) => {
      if (getState(key) !== newStatus) {
        setStatus(newStatus)
      }
    },
    [setStatus],
  )

  return {
    status,
    setStatus: setChatStatus,
    isNormal: status === 'normal',
    isFetching: status === 'fetching',
    isStreaming: status === 'streaming',
    isFinished: status === 'finished',
  }
}
