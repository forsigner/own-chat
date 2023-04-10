import { format } from 'date-fns'
import { Box } from '@fower/react'
import {
  Avatar,
  Button,
  ClipboardCopyOutline,
  RefreshOutline,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TrashOutline,
} from 'bone-ui'
import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import { memo, useState } from 'react'
import { Message } from '@own-chat/api-sdk'
import { useUser } from '../../stores'
import { Markdown } from '../Markdown'
import { IconChatLoading } from '../../icons/IconChatLoading'
import { IconChatgpt } from '../../icons/IconChatgpt'
import { useCopyToClipboard } from '../../hooks'

interface Props {
  message: Message
}

const MessageItem = ({ message }: Props) => {
  const isUser = ChatCompletionResponseMessageRoleEnum.User === message.role
  const { user } = useUser()
  const { copy } = useCopyToClipboard()
  const [copyTips, setCopyTips] = useState('Copy')

  return (
    <Box className="messageItem" toLeft py3>
      <Box mr-10>
        {!isUser && <IconChatgpt />}
        {isUser && <Avatar roundedLG src={user?.avatar} name={user?.nickname || 'U'} />}
      </Box>

      <Box flex-1>
        <Box mb2 toCenterY toBetween columnGap-8>
          <Box>
            <Box>
              {!isUser && <Box fontMedium>AI</Box>}
              {isUser && <Box fontMedium>User</Box>}
            </Box>
            <Box textXS gray400 selfBottom>
              {message.createdAt && format(new Date(message.createdAt), 'yyyy-MM-dd HH:mm:ss')}
            </Box>
          </Box>

          <Box toCenterY columnGap-8 hidden inlineFlex--$messageItem--hover transitionAll>
            <Tooltip placement="top">
              <TooltipTrigger>
                <Button
                  size={28}
                  p1
                  variant="filled"
                  colorScheme="white"
                  icon={<ClipboardCopyOutline gray600 />}
                  onClick={() => {
                    copy(message.content)
                    setCopyTips('Copied')
                  }}
                />
              </TooltipTrigger>
              <TooltipContent>{copyTips}</TooltipContent>
            </Tooltip>

            {!isUser && (
              <Tooltip placement="top">
                <TooltipTrigger>
                  <Button
                    size={28}
                    p1
                    variant="filled"
                    colorScheme="white"
                    icon={<RefreshOutline gray600 />}
                  />
                </TooltipTrigger>
                <TooltipContent>Regenerate response</TooltipContent>
              </Tooltip>
            )}

            <Tooltip placement="top">
              <TooltipTrigger>
                <Button
                  size={28}
                  p1
                  variant="filled"
                  colorScheme="white"
                  icon={<TrashOutline gray600 />}
                />
              </TooltipTrigger>
              <TooltipContent>Delete message</TooltipContent>
            </Tooltip>
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
