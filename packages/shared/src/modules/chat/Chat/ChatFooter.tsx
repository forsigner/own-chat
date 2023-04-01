import { Box } from '@fower/react'
import { css } from '@fower/core'
import TextareaAutosize from 'react-textarea-autosize'
import { Button, PaperAirplaneSolid } from 'bone-ui'
import { useState } from 'react'
import { useSendMessage } from '../hooks/useSendMessage'
import { CHAT_WIDTH } from '../../../common'

export const ChatFooter = () => {
  const { sendMessage: initMessage } = useSendMessage()
  const [value, setValue] = useState('')

  async function send() {
    if (!value) return
    await initMessage(value)
    setValue('')
  }

  return (
    <Box shadow2XL toCenterY toCenterX py4 px4>
      <Box toCenterY flex-1 maxW={CHAT_WIDTH} shadowXL border borderGray100 rounded2XL>
        <Box flex-1 minH={[56, 80]} toCenterY>
          <TextareaAutosize
            placeholder="请输入..."
            className={css(
              'm0 borderNone w-100p outlineNone px3 py3 flex placeholderGray400 bgWhite textBase',
            )}
            style={{ resize: 'none' }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
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
