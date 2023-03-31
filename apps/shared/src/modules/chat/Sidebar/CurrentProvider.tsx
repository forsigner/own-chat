import { Box } from '@fower/react'
import { EasyModal } from '@own-chat/easy-modal'
import { Avatar, Button, CogSolid } from 'bone-ui'
import { NAV_HEIGHT } from '../../../common'
import { useProviders } from '../hooks/useProviders'
import { ModalUpsertProvider } from '../ModalUpsertProvider'

export const CurrentProvider = () => {
  const { activeProvider } = useProviders()

  return (
    <Box
      toBetween
      toCenterY
      columnGap-8
      pl3
      pr2
      h={NAV_HEIGHT}
      borderBottom
      borderBottomGray100
      borderBottomGray800--dark
    >
      <Box toCenterY columnGap-8>
        <Avatar roundedLG name={activeProvider?.name} />
        <Box>
          <Box textBase fontSemibold>
            {activeProvider?.name}
          </Box>
          <Box textXS gray400>
            3 members
          </Box>
        </Box>
      </Box>

      <Button
        size="md"
        colorScheme="gray500"
        variant="ghost"
        icon={<CogSolid square5 cursorPointer gray600--hover />}
        onClick={() => {
          EasyModal.show(ModalUpsertProvider, activeProvider)
        }}
      />
    </Box>
  )
}
