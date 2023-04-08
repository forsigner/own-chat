import { useState } from 'react'
import { Button, Input, toast } from 'bone-ui'
import { request } from '@boter/request'
import { useLocalStorage } from 'stook-localstorage'
import { Box } from '@fower/react'
import { useRouter } from 'next/router'

export const Login = () => {
  const [value, setValue] = useState('')
  const [, setCode] = useLocalStorage('authorizationCode')
  const { push } = useRouter()

  async function login() {
    try {
      await request('/api/login', {
        method: 'POST',
        body: {
          authorizationCode: value,
        },
      })

      setCode(value)
      push('/')

      toast.success('Login success')
    } catch (error) {
      // TODO: handle any
      toast.error((error as any).message)
    }
  }

  return (
    <Box p4>
      <Box mb3>
        <Box textXL mb3>
          Authorization code
        </Box>
        <Box gray600>Please input your Authorization code</Box>
      </Box>

      <Input
        placeholder="Authorization code"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={async (e) => {
          if (e.key === 'Enter') {
            await login()
          }
        }}
      />
      <Button
        w-100p
        mt4
        onClick={async () => {
          await login()
        }}
      >
        Confirm
      </Button>
    </Box>
  )
}
