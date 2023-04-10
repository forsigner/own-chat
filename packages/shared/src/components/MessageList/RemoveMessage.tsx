import { FloatingDelayGroup } from '@floating-ui/react'
import { Box } from '@fower/react'
import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TrashOutline,
} from 'bone-ui'
import { memo } from 'react'
import { Message } from '@own-chat/api-sdk'
import { useRemoveMessagePair } from '../../modules/chat/hooks/useRemoveMessagePair'
import { useTranslation } from 'react-i18next'

interface Props {
  message: Message
}

const RemoveMessage = ({ message }: Props) => {
  const { removeMessagePair } = useRemoveMessagePair()
  const { t } = useTranslation('common')
  return (
    <Popover portal={false}>
      <PopoverTrigger>
        <Box relative>
          <FloatingDelayGroup delay={200}>
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
          </FloatingDelayGroup>
        </Box>
      </PopoverTrigger>

      <PopoverContent>
        {({ close }) => (
          <>
            <PopoverHeader>Sure to delete this message?</PopoverHeader>
            <PopoverBody spaceX3>
              <Button variant="light" size="sm" onClick={close} colorScheme="gray600">
                {t('cancel')}
              </Button>
              <Button
                size="sm"
                onClick={async () => {
                  close()
                  await removeMessagePair(message.id)
                }}
              >
                {t('confirm')}
              </Button>
            </PopoverBody>
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}

export default memo(RemoveMessage, (prev, next) => {
  return prev.message.content === next.message.content
})
