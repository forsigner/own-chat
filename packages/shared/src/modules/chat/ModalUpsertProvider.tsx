import { Box } from '@fower/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Button,
} from 'bone-ui'
import { useModal } from '@own-chat/easy-modal'
import { Form } from 'fomir'
import { useUpsertProviderForm } from './hooks/useUpsertProviderForm'

export const ModalUpsertProvider = () => {
  const { register, hide, data } = useModal()
  const form = useUpsertProviderForm()

  return (
    <Modal {...register('bone-ui')}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>{!!data ? 'Edit Provider' : 'Add Provider'} </ModalHeader>
        <ModalBody>
          <Form
            form={form}
            suffix={
              <Box toRight spaceX2>
                <Button type="button" variant="ghost" colorScheme="gray600" onClick={hide}>
                  Cancel
                </Button>
                <Button type="submit">Submit</Button>
              </Box>
            }
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
