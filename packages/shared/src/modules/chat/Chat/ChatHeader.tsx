import { Box } from '@fower/react'
import { EasyModal } from '@own-chat/easy-modal'
import { Button, ChevronDownOutline } from 'bone-ui'
import { NAV_HEIGHT } from '../../../common'
import { MemberList } from '../Members/MemberList'
import { AddMemberButton } from '../Members/AddMemberButton'
import { ModalSessionList } from '../modals/ModalSessionList'
import { ShareButton } from './ShareButton'
import { useSessions } from '../hooks/useSessions'

export const ChatHeader = () => {
  const { activeSession } = useSessions()

  return (
    <Box
      h={NAV_HEIGHT}
      // borderBottom
      // borderBottomGray100
      // borderBottomGray800--dark
      p4
      toCenterY
      columnGap-4
      toBetween
    >
      <Box toCenterY>
        <Box textLG fontBold>
          {activeSession?.name}
        </Box>
        <Button
          display={['flex', 'none']}
          p1
          colorScheme="gray400"
          variant="ghost"
          size="sm"
          icon={<ChevronDownOutline />}
          onClick={() => EasyModal.show(ModalSessionList)}
        />
      </Box>
      <Box toCenterY columnGap-12 pr2>
        <MemberList />
        <AddMemberButton />
        <ShareButton session={activeSession!} />
      </Box>
    </Box>
  )
}
