import { Box } from '@fower/react'
import { EasyModal } from '@own-chat/easy-modal'
import { Button, CogSolid, PlusOutline, Tooltip } from 'bone-ui'
import { Logo } from '../../../components'
import { UserAvatarPopover } from '../../../components/UserAvatarPopover'
import { ModalUpsertProvider } from '../ModalUpsertProvider'
import { ModalSettings } from '../ModalSettings'
import { ProviderList } from './ProviderList'

export const ProviderBar = () => {
  return (
    <Box slate100 w-68 h-100vh borderRight borderRightGray100 column borderRightGray800--dark>
      <Box h-64 toCenter>
        <Logo showText={false} />
      </Box>
      <Box flex-1>
        <ProviderList />
        <Box mt4 toCenter>
          <Tooltip content="Add new Provider" placement="right-center">
            <Button
              colorScheme="gray500"
              variant="ghost"
              icon={<PlusOutline />}
              onClick={() => {
                EasyModal.show(ModalUpsertProvider)
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
