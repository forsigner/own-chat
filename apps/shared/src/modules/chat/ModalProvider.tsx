import { Box } from '@fower/react'
import { Modal, ModalOverlay, ModalContent, Button } from 'bone-ui'
import { ModalCloseButton } from '@bone-ui/modal'
import { useModal } from '@own-chat/easy-modal'
import { Settings } from './Settings/Settings'
import { useLogout } from '../../hooks/useLogout'

export const ModalProvider = () => {
  const { register, hide } = useModal()
  const { logout } = useLogout()

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
          <Box toCenter py4>
            <Button
              w-200
              colorScheme="red500"
              onClick={() => {
                logout()
                hide()
              }}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  )
}
