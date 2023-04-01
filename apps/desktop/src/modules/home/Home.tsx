import { Box } from '@fower/react'
import { Button, Input } from 'bone-ui'
import { useState } from 'react'
import { useLogin } from './hooks/useLogin'

export function Home() {
  const [token, setToken] = useState('')
  const { login } = useLogin()

  return (
    <Box toCenter column h-100vh>
      <Box column rowGap-12 mb4 toCenter fontBold text3XL w-360>
        <Box>Login to Own.Chat</Box>
        <Input
          size="lg"
          placeholder="Your personal token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <Button
          size="lg"
          w-100p
          onClick={async () => {
            await login(token)
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  )
}
