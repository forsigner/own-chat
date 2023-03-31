import { useState } from 'react'
import { Box } from '@fower/react'
import { css } from '@fower/core'
import TextareaAutosize from 'react-textarea-autosize'
import { Button, PaperAirplaneSolid } from 'bone-ui'
import { useSendMessage } from '../../../hooks'
import { KeyCode_Enter } from '../../../common/utils'

export const ChatFooter = () => {
  const { sendMessage } = useSendMessage()
  const [value, setValue] = useState('')

  async function send() {
    if (!value.trim()) return
    sendMessage(value)
    setValue('')
  }

  const onKeyDown = (e: any) => {
    const keyCode = e.nativeEvent.keyCode;
    if (keyCode === KeyCode_Enter && e.nativeEvent.ctrlKey) {
      setValue(value + '\n')
      return
    }

    if (keyCode === KeyCode_Enter) {
      send()
      e.preventDefault();
      return
    }
  }


  return (
    <Box borderTop borderTopGray100 toCenterY>
      <Box flex-1 minH-80 toCenterY>
        <TextareaAutosize
          autoFocus={true}
          maxRows={20}
          minRows={1}
          className={css(
            'm0 borderNone w-100p outlineNone px3 py3 flex placeholderGray400 bgWhite',
          )}
          style={{ resize: 'none' }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="请输入..."
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
  )
}
