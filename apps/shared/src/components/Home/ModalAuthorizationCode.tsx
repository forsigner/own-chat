import { Box } from '@fower/react'
import { Modal, ModalOverlay, ModalContent, Input } from 'bone-ui'
import { useModal } from '@one-chat/easy-modal'
import { useState } from 'react'

export const ModalAuthorizationCode = () => {
  const { register } = useModal()
  const [value, setValue] = useState('')

  return (
    <Modal {...register('bone-ui')} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <Box>
          <Input
            ring-0--focus
            placeholder="Authorization code"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                console.log('enter......')
              }
            }}
          />
        </Box>
      </ModalContent>
    </Modal>
  )
}
