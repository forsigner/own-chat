import { Box } from '@fower/react'
import { EasyModal } from '@own-chat/easy-modal'
import { Button, CogSolid, PlusOutline, Tooltip } from 'bone-ui'
import { Logo } from '../../../components'
import { UserAvatarPopover } from '../../../components/UserAvatarPopover'
import { ModalUpsertTeam } from '../modals/ModalUpsertTeam'
import { ModalSettings } from '../modals/ModalSettings'
import { TeamList } from './TeamList'

export const TeamBar = () => {
  return (
    <Box
      slate100
      w-68
      h-100vh
      borderRight
      borderRightGray100
      column
      borderRightGray800--dark
      display={['none', 'flex']}
    >
      <Box h-64 toCenter>
        <Logo showText={false} />
      </Box>
      <Box flex-1>
        <TeamList />
        <Box mt4 toCenter>
          <Tooltip content="Add new Team" placement="right-center">
            <Button
              colorScheme="gray500"
              variant="ghost"
              icon={<PlusOutline />}
              onClick={() => {
                EasyModal.show(ModalUpsertTeam)
              }}
            />
          </Tooltip>
        </Box>
      </Box>
      <Box toCenter py4 column rowGap-8>
        <Button
          size="lg"
          colorScheme="gray500"
          variant="ghost"
          icon={<CogSolid square5 cursorPointer gray500 gray600--hover />}
          onClick={() => {
            EasyModal.show(ModalSettings)
          }}
        />

        <UserAvatarPopover />
      </Box>
    </Box>
  )
}
