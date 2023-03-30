import { Box } from '@fower/react'
import { EasyModal } from '@own-chat/easy-modal'
import { Button, ChevronDownOutline } from 'bone-ui'
import { NAV_HEIGHT } from '../../../common'
import { useSessions } from '../../../hooks'
import { ModalSessionList } from '../ModalSessionList'

export const ChatHeader = () => {
  const { currentSession } = useSessions()
  return (
    <Box h={NAV_HEIGHT} borderBottom borderBottomGray100 p4 toCenterY columnGap-4>
      <Box textLG fontBold>
        {currentSession?.name}
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
