import { Box } from '@fower/react'
import { Refetcher, Session } from '@own-chat/api-sdk'
import { useModal } from '@own-chat/easy-modal'
import { Button, ChatOutline, TrashOutline } from 'bone-ui'
import { updateVisit, useVisit } from '../hooks/useVisit'
import { EditSessionNameButton } from './EditSessionNameButton'
import { RemoveSessionButton } from './RemoveSessionButton'

interface Props {
  session: Session
}

export const SessionItem = ({ session }: Props) => {
  const { visit } = useVisit()
  const { hide } = useModal()
  const selected = visit.activeSessionId === session.id

  return (
    <Box
      pl4
      pr2
      py2
      bgSlate100={selected}
      bgSlate800--dark={selected}
      rounded
      toCenterY
      toBetween
      columnGap-8
      cursorPointer
      bgSlate100--hover
      transitionCommon
      onClick={async () => {
        await Promise.all([
          updateVisit({ activeSessionId: session.id }),
          await Refetcher.refetchMessages({
            where: { sessionId: session.id },
          }),
        ])
        hide()
      }}
      h-50
    >
      <Box toCenterY columnGap-8>
        <ChatOutline gray500 size={20} />
        <Box textBase>{session.name || 'New chat'}</Box>
      </Box>
      <Box toCenterY>
        <EditSessionNameButton session={session} />
        <RemoveSessionButton session={session} />
      </Box>
    </Box>
  )
}
