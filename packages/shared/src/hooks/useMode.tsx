import { store } from '@fower/core'
import { setCookie, getCookie } from 'cookies-next'
import { useState, useEffect } from 'react'
interface Result {
  mode: string
  setMode: (mode: string) => void
}

export function useMode(): Result {
  const [state, setState] = useState<string>('')

  useEffect(() => {
    const mode = getCookie('fower-mode') as string

    setMode(mode || 'light')
  }, [])

  function setMode(mode: string) {
    setState(mode)
    setCookie('fower-mode', mode)
    store.setMode(mode)
  }

  return { mode: state, setMode } as Result
}
