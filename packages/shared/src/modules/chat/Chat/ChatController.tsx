import { Button, RefreshOutline, Spinner, StopSolid } from 'bone-ui'
import { Box } from '@fower/react'
import { useRegenerateResponse } from '../hooks/useRegenerateResponse'
import { useChatStatus } from '../hooks/useChatStatus'
import { emitter } from '../../../common/emitter'
import { useMessages } from '../hooks/useMessages'

export const ChatController = () => {
  const { regenerateResponse } = useRegenerateResponse()
  const { messages } = useMessages()
  const { isStreaming, isNormal, isFinished, isFetching } = useChatStatus()
  let leftIcon = <RefreshOutline size={20} />
  if (isStreaming) leftIcon = <StopSolid size={20} />
  if (isFetching) leftIcon = <Spinner gray500 square5 />

  if (!messages.length) return null

  return (
    <Box toCenter>
      <Button
        leftIcon={leftIcon}
        roundedFull
        colorScheme="white"
        shadow
        w-200
        borderNone
        gray500--i
        gray100--hover
        disabled={isFetching}
        onClick={async () => {
          if (isFetching) return
          if (isStreaming) {
            emitter.emit('ABORT', '')
            return
          }
          await regenerateResponse()
        }}
      >
        {isFetching && 'Waiting response'}
        {isStreaming && 'Stop generation'}
        {(isNormal || isFinished) && 'Regenerate response'}
      </Button>
    </Box>
  )
}
