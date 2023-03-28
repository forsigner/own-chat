import { Box } from '@fower/react'
import { useModal } from '@one-chat/easy-modal'
import { Button, ChatOutline, PencilSolid, TrashOutline } from 'bone-ui'
import { useSessions } from '../../../hooks'

export const SessionList = () => {
  const { sessions, selectedIndex, selectSession } = useSessions()
  const { hide } = useModal()

  return (
    <Box column mt6 rowGap-8>
      {sessions.map((item, i) => (
        <Box
          key={i}
          pl4
          pr2
          py2
          bgSlate100={selectedIndex === i}
          rounded
          toCenterY
          toBetween
          columnGap-8
          cursorPointer
          bgSlate100--hover
          transitionCommon
          onClick={() => {
            selectSession(i)
            hide()
          }}
          h-50
        >
          <Box toCenterY columnGap-8>
            <ChatOutline gray500 size={20} />
            <Box textBase>{item.name}</Box>
          </Box>
          <Box toCenterY>
            <Button
              flex={selectedIndex === i}
              hidden={selectedIndex !== i}
              size={28}
              colorScheme="gray400"
              variant="ghost"
              icon={<PencilSolid gray400 />}
            />

            <Button
              flex={selectedIndex === i}
              hidden={selectedIndex !== i}
              size={28}
              colorScheme="gray400"
              variant="ghost"
              icon={<TrashOutline gray400 />}
            />
          </Box>
        </Box>
      ))}
    </Box>
  )
}
