import { Box } from '@fower/react'
import { ModalCloseButton, Modal, ModalOverlay, ModalContent, ModalHeader } from 'bone-ui'
import { useModal } from '@own-chat/easy-modal'
import { Settings } from '../Settings/Settings'

export const ModalSettings = () => {
  const { register } = useModal()

  return (
    <Modal {...register('bone-ui')}>
      <ModalOverlay />
      <ModalContent w-600--i>
        <ModalCloseButton />
        <ModalHeader>Settings</ModalHeader>
        <Box px8 py2>
          <Box fontBold textXL leadingLoose mb2></Box>
          <Settings />
        </Box>
      </ModalContent>
    </Modal>
  )
}
