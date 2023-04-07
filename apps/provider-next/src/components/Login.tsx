import { useState } from 'react'
import { Input, toast } from 'bone-ui'
import { request } from '@boter/request'
import { useLocalStorage } from 'stook-localstorage'

interface Props {
  onLoginSuccess(): void
}
export const Login = ({ onLoginSuccess }: Props) => {
  const [value, setValue] = useState('')
  const [, setCode] = useLocalStorage('authorizationCode')

  async function login() {
    try {
      await request('/api/login', {
        method: 'POST',
        body: {
          authorizationCode: value,
        },
      })

      onLoginSuccess?.()
      setCode(value)

      toast.success('Login success')
    } catch (error) {
      // TODO: handle any
      toast.error((error as any).message)
    }
  }

  return (
    <Input
      ring-0--focus
      placeholder="Authorization code"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={async (e) => {
        if (e.key === 'Enter') {
          await login()
        }
      }}
    />
  )
}
