import { Box } from '@fower/react'
import { EasyModal } from '@own-chat/easy-modal'
import { Button, ChevronDownOutline } from 'bone-ui'
import { NAV_HEIGHT } from '../../../common'
import { useSessions } from '../../../hooks'
import { MemberList } from '../Members/MemberList'
import { AddMemberButton } from '../Members/AddMemberButton'
import { ModalSessionList } from '../ModalSessionList'

export const ChatHeader = () => {
  const { currentSession } = useSessions()

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
      <Box toCenterY spaceX2 pr2>
        <MemberList />
        <AddMemberButton />
      </Box>
    </Box>
  )
}
