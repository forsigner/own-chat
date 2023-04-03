import { Box } from '@fower/react'
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from 'bone-ui'
import { useModal } from '@own-chat/easy-modal'
import { SessionList } from '../Sidebar/SessionList'
import { AddSessionButton } from '../AddSessionButton'

export const ModalSessionList = () => {
  const { register } = useModal()

  return (
    <Modal {...register('bone-ui')}>
      <ModalOverlay />
      <ModalContent w={['100vw', 460]} maxH-100vh h={['100vh', 'auto']} rounded={[0, 6]}>
        <ModalCloseButton />
        <ModalBody>
          <Box fontBold textXL leadingLoose mb2>
            Sessions
          </Box>

          <Box>
            <SessionList />
            <Box mt6 mb3>
              <AddSessionButton />
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
