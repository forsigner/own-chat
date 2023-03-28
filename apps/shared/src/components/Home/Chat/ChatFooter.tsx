import { Box } from '@fower/react'
import { css } from '@fower/core'
import TextareaAutosize from 'react-textarea-autosize'
import { Button, PaperAirplaneSolid } from 'bone-ui'

export const ChatFooter = () => {
  return (
    <Box borderTop borderTopGray100 toCenterY>
      <Box flex-1>
        <TextareaAutosize
          placeholder="请输入..."
          className={css(
            'm0 borderNone w-100p outlineNone px3 py4  flex placeholderGray400 bgWhite',
          )}
          style={{ resize: 'none' }}
        />
      </Box>
      <Button colorScheme="gray400" variant="ghost" icon={<PaperAirplaneSolid rotate-90 />} mr2 />
    </Box>
  )
}
