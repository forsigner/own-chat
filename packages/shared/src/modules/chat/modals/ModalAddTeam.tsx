import { Box } from '@fower/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Button } from 'bone-ui'
import { useModal } from '@own-chat/easy-modal'
import { Form } from 'fomir'
import { useAddTeamForm } from '../hooks/useAddTeamForm'

export const ModalAddTeam = () => {
  const { register, hide, data } = useModal()
  const form = useAddTeamForm()

  return (
    <Modal {...register('bone-ui')}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box toCenter>{!!data ? 'Edit Team' : 'Create a new Team'} </Box>
        </ModalHeader>
        <ModalBody>
          <Form
            form={form}
            suffix={
              <Box toCenterX spaceX2>
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
