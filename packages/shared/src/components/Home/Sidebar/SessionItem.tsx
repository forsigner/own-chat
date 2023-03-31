import { Box } from '@fower/react'
import { useModal } from '@own-chat/easy-modal'
import { Button, ChatOutline, TrashOutline } from 'bone-ui'
import { Session, useSessions } from '../../../hooks'
import { EditSessionNameButton } from './EditSessionNameButton'

interface Props {
  session: Session
}

export const SessionItem = ({ session }: Props) => {
  const { selectSession, deleteSession } = useSessions()
  const { hide } = useModal()
  const { selected } = session

  return (
    <Box
      pl4
      pr2
      py2
      bgSlate100={selected}
      rounded
      toCenterY
      toBetween
      columnGap-8
      cursorPointer
      bgSlate100--hover
      transitionCommon
      onClick={() => {
        selectSession(session.id)
        hide()
      }}
      h-50
    >
      <Box toCenterY columnGap-8>
        <ChatOutline gray500 size={20} />
        <Box textBase>{session.name}</Box>
      </Box>
      <Box toCenterY>
        <EditSessionNameButton session={session} />

        <Button
          flex={selected}
          hidden={!selected}
          size={28}
          colorScheme="gray400"
          variant="ghost"
          icon={<TrashOutline gray400 />}
          onClick={(e) => {
            e.stopPropagation()
            deleteSession(session.id)
          }}
        />
      </Box>
    </Box>
  )
}
