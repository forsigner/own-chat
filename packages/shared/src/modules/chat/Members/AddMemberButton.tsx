import { Box } from '@fower/react'
import { EasyModal } from '@own-chat/easy-modal'
import { Button, PlusOutline, toast } from 'bone-ui'
import { useIsOwner } from '../hooks/useIsOwner'
import { ModalAddMember } from './ModalAddMember'

export function AddMemberButton() {
  const { isOwner } = useIsOwner()
  return (
    <Box
      cursorPointer
      toCenterY
      columnGap-4
      gray400
      gray500--hover
      onClick={() => {
        if (!isOwner) {
          toast.info('Only the owner can add member')
          return
        }
        EasyModal.show(ModalAddMember)
      }}
    >
      <Button
        size="sm"
        borderDashed
        variant="light"
        colorScheme="gray500"
        icon={<PlusOutline />}
        roundedFull
      />
      <Box textSM>添加成员</Box>
    </Box>
  )
}
