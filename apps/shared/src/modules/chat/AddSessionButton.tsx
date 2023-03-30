import { useModal } from '@own-chat/easy-modal'
import { Button, PlusOutline } from 'bone-ui'
import { useSessions } from '../../hooks'

export const AddSessionButton = () => {
  const { addSession } = useSessions()
  const { hide } = useModal()

  return (
    <Button
      w-100p
      size="lg"
      colorScheme="white"
      flex-1
      variant="light"
      textSM--i
      leftIcon={<PlusOutline gray500 mr2 square6 textBase--i />}
      onClick={() => {
        addSession()
        hide()
      }}
    >
      新建聊天
    </Button>
  )
}
