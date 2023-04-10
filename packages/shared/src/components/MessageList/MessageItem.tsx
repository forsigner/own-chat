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
} from 'bone-ui'
import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import { memo, useState } from 'react'
import { Message } from '@own-chat/api-sdk'
import { useUser } from '../../stores'
import { Markdown } from '../Markdown'
import { IconChatLoading } from '../../icons/IconChatLoading'
import { IconChatgpt } from '../../icons/IconChatgpt'
import { useCopyToClipboard } from '../../hooks'
import RemoveMessage from './RemoveMessage'
import { useHover } from '../../hooks/useHover'

interface Props {
  message: Message
}

const MessageItem = ({ message }: Props) => {
  const isUser = ChatCompletionResponseMessageRoleEnum.User === message.role
  const { user } = useUser()
  const { copy } = useCopyToClipboard()
  const [copyTips, setCopyTips] = useState('Copy')
  const [hoverRef, isHovered] = useHover<HTMLDivElement>()

  return (
    <Box toLeft py3 ref={hoverRef}>
      <Box mr-10>
        {!isUser && <IconChatgpt />}
        {isUser && <Avatar roundedLG src={user?.avatar} name={user?.nickname || 'U'} />}
      </Box>

      <Box flex-1>
        <Box mb2 toCenterY toBetween h-30>
          <Box toCenterY columnGap-8>
            <Box>
              {!isUser && <Box fontMedium>AI</Box>}
              {isUser && <Box fontMedium>User</Box>}
            </Box>
            <Box textXS gray400 selfBottom>
              {message.createdAt && format(new Date(message.createdAt), 'yyyy-MM-dd HH:mm:ss')}
            </Box>
          </Box>

          {isHovered && (
            <Box toCenterY columnGap-8 transitionAll h-28>
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

              {/* {!isUser && (
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
              )} */}

              {!isUser && <RemoveMessage message={message} />}
            </Box>
          )}
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
