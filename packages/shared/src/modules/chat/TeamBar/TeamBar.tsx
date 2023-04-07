import { Box } from '@fower/react'
import { EasyModal } from '@own-chat/easy-modal'
import { Button, PlusOutline, Tooltip } from 'bone-ui'
import { Logo } from '../../../components'
import { UserAvatarPopover } from '../../../components/UserAvatarPopover'
import { TeamList } from './TeamList'
import { ModalAddTeam } from '../modals/ModalAddTeam'
import { useTranslation } from 'react-i18next'

export const TeamBar = () => {
  const { t } = useTranslation('common')
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
          <Tooltip content={t('create-team-tips')} placement="right-center">
            <Button
              colorScheme="gray500"
              variant="ghost"
              icon={<PlusOutline />}
              onClick={() => {
                EasyModal.show(ModalAddTeam)
              }}
            />
          </Tooltip>
        </Box>
      </Box>
      <Box toCenter py4 column rowGap-8>
        <UserAvatarPopover />
      </Box>
    </Box>
  )
}
