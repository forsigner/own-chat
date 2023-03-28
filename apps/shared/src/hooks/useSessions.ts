import { useStore } from 'stook'

type Session = {
  name: string
  date: Date | string
  count: number
}

export const useSessions = () => {
  const [selectedIndex, selectSession] = useStore('selected_index', 0)
  const list: Session[] = [
    {
      name: '珠海的邮编',
      date: '2023/3/27 22:31:29',
      count: 10,
    },
    {
      name: '英文翻译',
      date: '2023/3/27 22:31:29',
      count: 10,
    },

    {
      name: 'pdf 帮助',
      date: '2023/3/27 22:31:29',
      count: 10,
    },
  ]

  const [sessions, setSession] = useStore<Session[]>('sessions', list)

  function addSession() {
    setSession([
      ...sessions,
      {
        name: 'Untitle',
        date: '2023/3/27 22:31:29',
        count: 10,
      },
    ])
  }

  return {
    selectedIndex,
    sessions,
    selectSession,
    addSession,
  }
}
