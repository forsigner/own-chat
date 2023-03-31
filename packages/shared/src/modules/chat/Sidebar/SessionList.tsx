import { Box } from '@fower/react'
import { useSessions } from '../hooks/useSessions'
import { SessionItem } from './SessionItem'

export const SessionList = () => {
  const { sessions = [], loading } = useSessions()
  if (loading) return null
  return (
    <Box column mt6 rowGap-8>
      {sessions.map((item) => (
        <SessionItem key={item.id} session={item} />
      ))}
    </Box>
  )
}
