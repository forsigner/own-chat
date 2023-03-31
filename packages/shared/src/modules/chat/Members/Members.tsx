import { Box } from '@fower/react'
import { EasyModal } from '@own-chat/easy-modal'
import { Avatar, Button, PlusOutline } from 'bone-ui'
import { useMembers } from '../hooks/useMembers'
import { ModalAddMember } from './ModalAddMember'

export function Members() {
  const { members, loading } = useMembers()

  if (loading) return null

  return (
    <Box toCenterY columnGap-8 pr4>
      {members.map((item) => (
        <Box key={item.id} cursorPointer>
          <Avatar src={item.user.avatar} />
        </Box>
      ))}
      <Box
        cursorPointer
        toCenterY
        columnGap-4
        gray400
        gray500--hover
        onClick={() => EasyModal.show(ModalAddMember)}
      >
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
