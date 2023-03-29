import { Box } from '@fower/react'
import { EasyModal } from '@own-chat/easy-modal'
import { Button, CogSolid } from 'bone-ui'
import { Logo } from '../../Logo'
import { AddSessionButton } from '../AddSessionButton'
import { ModalSettings } from '../ModalSettings'
import { SessionList } from './SessionList'

export const Sidebar = () => {
  return (
    <Box column w-300 py6 h-100p borderRight borderRightGray100 display={['none', 'flex']}>
      <Box px5>
        <Logo />
      </Box>
      <Box flex-1 overflowYAuto pb6 px5>
        <SessionList />
      </Box>
      <Box toBetween toCenterY columnGap-8 px5>
        <AddSessionButton />

        <Button
          size="lg"
          colorScheme="white"
          variant="light"
          icon={<CogSolid square5 cursorPointer gray500 gray600--hover />}
          onClick={() => {
            EasyModal.show(ModalSettings)
          }}
        />
      </Box>
    </Box>
  )
}
