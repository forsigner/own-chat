import { Box } from '@fower/react'
import { EasyModal } from '@own-chat/easy-modal'
import { Button, CogSolid, Tag } from 'bone-ui'
import { NAV_HEIGHT } from '../../../common'
import { useIsOwner } from '../hooks/useIsOwner'
import { useTeams } from '../hooks/useTeams'
import { ModalUpsertTeam } from '../modals/ModalUpsertTeam'

export const CurrentTeam = () => {
  const { activeTeam } = useTeams()
  const { isOwner, loading } = useIsOwner()

  if (loading) return null

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
      <Box column toCenterY rowGap-2>
        <Box textBase fontSemibold>
          {activeTeam?.name}
        </Box>
        <Box toCenterY spaceX2>
          <Box textXS gray400>
            3 members
          </Box>
          {isOwner && (
            <Tag size={20} variant="light">
              owner
            </Tag>
          )}
        </Box>
      </Box>

      {isOwner && (
        <Button
          size="md"
          colorScheme="gray500"
          variant="ghost"
          icon={<CogSolid square5 cursorPointer gray600--hover />}
          onClick={() => {
            EasyModal.show(ModalUpsertTeam, activeTeam)
          }}
        />
      )}
    </Box>
  )
}
