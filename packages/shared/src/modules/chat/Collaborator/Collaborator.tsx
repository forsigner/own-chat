import { Box } from '@fower/react'
import { Avatar, Button, PlusOutline } from 'bone-ui'
import { useCollaborators } from '../hooks/useCollaborators'
import { useProviders } from '../hooks/useProviders'

export function Collaborator() {
  const { loading, collaborators = [] } = useCollaborators()

  if (loading) return null
  console.log('collaborators:', collaborators)

  return (
    <Box toCenterY columnGap-8 pr4>
      {collaborators.map((item) => (
        <Box key={item.id} cursorPointer>
          <Avatar src={item.user.avatar} />
        </Box>
      ))}
      <Box cursorPointer toCenterY columnGap-4 gray400 gray500--hover>
        <Button
          size="sm"
          borderDashed
          variant="light"
          colorScheme="gray500"
          icon={<PlusOutline />}
          roundedFull
        />
        <Box textSM>邀请</Box>
      </Box>
    </Box>
  )
}
