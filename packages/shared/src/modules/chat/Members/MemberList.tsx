import { Box } from '@fower/react'
import { Avatar } from 'bone-ui'
import { useMembers } from '../hooks/useMembers'

export function MemberList() {
  const { members, loading } = useMembers()

  if (loading) return null

  return (
    <Box toCenterY columnGap-8>
      {members.map((item) => (
        <Box key={item.id} cursorPointer>
          <Avatar src={item.user.avatar} />
        </Box>
      ))}
    </Box>
  )
}
