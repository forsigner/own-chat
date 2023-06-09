import { Box } from '@fower/react'
import { css } from '@fower/core'
import TextareaAutosize from 'react-textarea-autosize'
import { Button, PaperAirplaneSolid } from 'bone-ui'
import { useState } from 'react'
import { CHAT_WIDTH } from '../common'
import { useTranslation } from 'react-i18next'
import { useChatStatus } from '../modules/chat/hooks/useChatStatus'

interface Props {
  onSendMessage(value: string): Promise<any>
}

export const SendMessageBox = ({ onSendMessage }: Props) => {
  const [value, setValue] = useState('')
  const { t } = useTranslation('common')
  const { isStreaming, isNormal, isFinished, isFetching } = useChatStatus()

  async function send() {
    if (!value) return
    setValue('')
    await onSendMessage?.(value)
  }

  const disabled = isStreaming || isFetching

  return (
    <Box toCenterY toCenterX py4 px4>
      <Box
        toCenterY
        flex-1
        maxW={CHAT_WIDTH}
        shadowXL
        border
        borderGray100
        rounded2XL
        borderTransparent--dark
        bgGray800--dark
      >
        <Box flex-1 minH={[56, 80]} toCenterY>
          <TextareaAutosize
            placeholder={t('send-message')}
            className={css(
              'm0 borderNone w-100p outlineNone px3 py3 flex placeholderGray400 bgWhite textBase gray300--dark bgTransparent bgTransparent--dark',
            )}
            disabled={disabled}
            style={{ resize: 'none', cursor: disabled ? 'not-allowed' : 'text' }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.shiftKey) {
                return
              }

              if (e.key === 'Enter') {
                send()
                e.preventDefault()
                return
              }
            }}
          />
        </Box>
        <Button
          colorScheme="gray400"
          variant="ghost"
          disabled={!value}
          icon={<PaperAirplaneSolid rotate-90 />}
          mr2
          onClick={() => send()}
        />
      </Box>
    </Box>
  )
}
