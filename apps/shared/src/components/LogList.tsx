import { format } from 'date-fns'
import { FowerHTMLProps } from '@fower/core'
import { Box } from '@fower/react'
import { memo } from 'react'
import { Log } from '@own-chat/api-sdk'

interface LogItemProps {
  log: Log
}

const LogItem = memo(function Log({ log }: LogItemProps) {
  return (
    <Box key={log.id} mb2>
      <Box toLeft flexDirection={['column', 'column', 'row']}>
        <Box w-160 textSM gray500 flexShrink-0 selfTop>
          {format(new Date(log.createdAt), 'MM-dd HH:mm:ss')}
        </Box>

        <Box as="pre" m0 breakAll maxW-60vw red500={log.type === 'error'}>
          {log.content}
        </Box>
      </Box>
    </Box>
  )
})

interface Props extends FowerHTMLProps<'div'> {
  logs: Log[]
}

export const LogList = ({ logs, ...rest }: Props) => {
  return (
    <Box spaceY2 {...rest}>
      {logs.map((item, index) => (
        <LogItem key={item.id || index} log={item}></LogItem>
      ))}
    </Box>
  )
}
