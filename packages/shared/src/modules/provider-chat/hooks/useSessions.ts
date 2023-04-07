import { useEffect, useCallback, useMemo } from 'react'
import { getStorage, useAsyncStorage } from 'stook-async-storage'
import { nanoid } from 'nanoid'

export type Session = {
  id: string
  name: string
  date: string
  count: number
  selected?: boolean
}

const key = 'sessions'

export const useSessions = () => {
  const { loading, data: sessions = [], setData: setSessions } = useAsyncStorage<Session[]>(key, [])

  const addSession = useCallback(() => {
    setSessions((sessions) => {
      for (const session of sessions) {
        session.selected = false
      }
      sessions.unshift({
        id: nanoid(),
        name: 'New Chat',
        date: new Date().toLocaleDateString(),
        count: 10,
        selected: true,
      })
    })
  }, [setSessions])

  const deleteSession = useCallback(
    (id: string) => {
      setSessions((state) => {
        const index = state.findIndex((item) => item.id === id)
        state.splice(index, 1)
        if (state[0]) state[0].selected = true
      })
    },
    [setSessions],
  )

  const updateSessionName = useCallback(
    (id: string, name: string) => {
      setSessions((state) => {
        const index = state.findIndex((item) => item.id === id)
        state[index].name = name
      })
    },
    [setSessions],
  )

  const selectSession = useCallback(
    (id: string) => {
      setSessions((state) => {
        for (const session of state) {
          session.selected = session.id === id
        }
      })
    },
    [setSessions],
  )

  useEffect(() => {
    if (!loading && !sessions?.length) {
      addSession()
    }
  }, [sessions, addSession, loading])

  const currentSession = useMemo(() => sessions.find((item) => item.selected)!, [sessions])

  return {
    currentSession,
    selectSession,
    updateSessionName,
    addSession,
    deleteSession,
    loading,
    sessions,
    setSessions,
  }
}

export function getCurrentSession() {
  const sessions = getStorage(key) as Session[]
  return sessions.find((item) => item.selected)!
}
