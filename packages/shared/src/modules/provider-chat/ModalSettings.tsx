import { Box } from '@fower/react'
import { request } from '@boter/request'
import { Modal, ModalOverlay, ModalContent, Button, ModalCloseButton } from 'bone-ui'
import { useModal } from '@own-chat/easy-modal'
import { Settings } from './Settings/Settings'
import { useRouter } from 'next/router'

export const ModalSettings = () => {
  const { register, hide } = useModal()
  const { push } = useRouter()

  async function logout() {
    await request('/api/logout')
    push('/login')
  }

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
              onClick={async () => {
                await logout()
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
