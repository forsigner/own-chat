import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
} from 'bone-ui'
import { useModal } from '@own-chat/easy-modal'
import AddMemberContainer from './AddMemberContainer'

export const ModalAddMember = () => {
  const { register } = useModal()

  return (
    <Modal {...register('bone-ui')}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Add member</ModalHeader>
        <ModalBody>
          <AddMemberContainer />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
