import { useEffect, useCallback } from 'react'
import { useAsyncStorage } from 'stook-async-storage'
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
      sessions.push({
        id: nanoid(),
        name: 'New Chat',
        date: '2023/3/27 22:31:29',
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
        state[0].selected = true
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

  return {
    selectSession,
    addSession,
    deleteSession,
    loading,
    sessions,
    setSessions,
  }
}
