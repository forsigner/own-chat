import { format } from 'date-fns'
import { Box } from '@fower/react'
import { Avatar } from 'bone-ui'
import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import { memo } from 'react'
import { Message } from '@own-chat/api-sdk'
import { useUser } from '../../stores'
import { Markdown } from '../Markdown'
import { IconChatLoading } from '../../icons/IconChatLoading'
import { IconChatgpt } from '../../icons/IconChatgpt'

interface Props {
  message: Message
}

const MessageItem = ({ message }: Props) => {
  const isUser = ChatCompletionResponseMessageRoleEnum.User === message.role
  const { user } = useUser()

  return (
    <Box toLeft py3>
      <Box mr-10>
        {!isUser && <IconChatgpt />}
        {isUser && <Avatar roundedLG src={user?.avatar} name={user?.nickname || 'U'} />}
      </Box>

      <Box>
        <Box mb2 toLeft columnGap-8>
          <Box>
            {!isUser && <Box fontMedium>AI</Box>}
            {isUser && <Box fontMedium>User</Box>}
          </Box>
          <Box textXS gray400 selfBottom>
            {message.createdAt && format(new Date(message.createdAt), 'yyyy-MM-dd HH:mm:ss')}
          </Box>
        </Box>
        {message.streaming && <IconChatLoading />}
        {!message.streaming && <Markdown content={message.content} />}
      </Box>
    </Box>
  )
}

export default memo(MessageItem, (prev, next) => {
  return prev.message.content === next.message.content
})
