import { Box } from '@fower/react'
import { useRouter } from 'next/router'

export default function Home() {
  const { push } = useRouter()

  return (
    <Box bgSlate100 h-100vh>
      <div onClick={() => push('/')}>Back</div>
      <Box></Box>
    </Box>
  )
}
