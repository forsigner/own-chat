import { format } from 'date-fns'
import { Box } from '@fower/react'
import { UserOutline } from 'bone-ui'
import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import IconChatgpt from './icon-chatgpt.svg'
import ChatLoading from './chat-loading.svg'
import { Message } from '../../../hooks'
import { memo } from 'react'
import { Markdown } from '../../Markdown'

interface Props {
  message: Message
}

const ChatItem = ({ message }: Props) => {
  const isUser = ChatCompletionResponseMessageRoleEnum.User === message.role

  return (
    <Box toLeft py3>
      <Box mr-10>
        {!isUser && <IconChatgpt style={{ width: 32 }} />}
        {isUser && (
          <Box square-32 toCenter bgSlate100 rounded>
            <UserOutline gray400 square-24 />
          </Box>
        )}
      </Box>

      <Box w="80%">
        <Box mb2 toLeft columnGap-8>
          <Box>
            {!isUser && <Box fontMedium>AI</Box>}
            {isUser && <Box fontMedium>User</Box>}
          </Box>
          <Box textXS gray400 selfBottom>
            {format(new Date(message.date), 'yyyy-MM-dd HH:mm:ss')}
          </Box>
        </Box>
        {message.streaming && <ChatLoading />}
        {!message.streaming && (
          <Box leadingRelaxed>
            {isUser && message.content}
            {!isUser && <Markdown content={message.content} />}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default memo(ChatItem, (prev, next) => {
  return prev.message.content === next.message.content
})
