import { Box } from '@fower/react'
import { SessionItem } from './SessionItem'
import { useSessions } from '../hooks'

export const SessionList = () => {
  const { sessions, loading } = useSessions()
  if (loading) return null
  return (
    <Box column mt6 rowGap-8>
      {sessions.map((item) => (
        <SessionItem key={item.id} session={item} />
      ))}
    </Box>
  )
}
