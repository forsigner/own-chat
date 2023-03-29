import { Box } from '@fower/react'
import { Modal, ModalOverlay, ModalContent } from 'bone-ui'
import { ModalCloseButton } from '@bone-ui/modal'
import { useModal } from '@one-chat/easy-modal'
import { Settings } from './Settings/Settings'

export const ModalSettings = () => {
  const { register } = useModal()

  return (
    <Modal {...register('bone-ui')}>
      <ModalOverlay />
      <ModalContent w-600--i>
        <ModalCloseButton />
        <Box px8 py2>
          <Box fontBold textXL leadingLoose mb2>
            Settings
          </Box>

          <Settings />
        </Box>
      </ModalContent>
    </Modal>
  )
}
