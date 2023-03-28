import { Box } from '@fower/react'
import { EasyModal } from '@one-chat/easy-modal'
import { Button, ChevronDownOutline } from 'bone-ui'
import { ModalSessionList } from '../ModalSessionList'

export const ChatHeader = () => {
  return (
    <Box h-72 borderBottom borderBottomGray100 p4 toCenterY columnGap-4>
      <Box textLG fontBold>
        珠海邮编
      </Box>
      <Button
        p1
        colorScheme="gray400"
        variant="ghost"
        size="sm"
        icon={<ChevronDownOutline />}
        onClick={() => EasyModal.show(ModalSessionList)}
      />
    </Box>
  )
}
