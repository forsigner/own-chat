import { Box } from '@fower/react'
import { EasyModal } from '@own-chat/easy-modal'
import { Button, PlusOutline, Tooltip } from 'bone-ui'
import { Logo } from '../../../components'
import { ModalAddProvider } from '../ModalAddProvider'
import { ProviderList } from './ProviderList'

export const ProviderBar = () => {
  return (
    <Box slate100 w-68 h-100vh borderRight borderRightGray100>
      <Box h-64 toCenter>
        <Logo showText={false} />
      </Box>
      <ProviderList />
      <Box mt4 toCenter>
        <Tooltip content="Add new Provider" placement="right-center">
          <Button
            colorScheme="gray500"
            variant="ghost"
            icon={<PlusOutline />}
            onClick={() => {
              EasyModal.show(ModalAddProvider)
            }}
          />
        </Tooltip>
      </Box>
    </Box>
  )
}
