import { useTranslation } from 'react-i18next'
import { NAV_HEIGHT } from '../../../common'
import { useSessions } from '../hooks/useSessions'
import { ModalSessionList } from '../modals/ModalSessionList'
import { ChatSettings } from './ChatSettings'
import { ShareButton } from './ShareButton'
import { Box } from '@fower/react'
import { EasyModal } from '@own-chat/easy-modal'
import { Button, ChevronDownOutline } from 'bone-ui'

export const ChatHeader = () => {
  const { activeSession } = useSessions()
  const { t } = useTranslation('common')

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
          {activeSession?.name || t('new-chat')}
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
        <ChatSettings />
        {activeSession && <ShareButton session={activeSession!} />}
      </Box>
    </Box>
  )
}
