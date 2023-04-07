import { ChatSettingsForm } from './ChatSettingsForm/ChatSettingsForm'
import { Box } from '@fower/react'
import { Hooks } from '@own-chat/api-sdk'
import { Button } from 'bone-ui'
import { Popover, PopoverContent, PopoverTrigger } from 'bone-ui'
import { useTranslation } from 'react-i18next'

export function ChatSettings() {
  const { t } = useTranslation('common')
  const { loading, data } = Hooks.useChatSettings()
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button size={28} colorScheme="gray400" variant="light">
          {t('chatgpt-settings')}
        </Button>
      </PopoverTrigger>
      <PopoverContent onClick={(e) => e.stopPropagation()} w-480>
        <Box column p4>
          <Box fontBold textBase mb3>
            {t('chatgpt-settings')}
          </Box>
          {!loading && <ChatSettingsForm chatSettings={data} />}
        </Box>
      </PopoverContent>
    </Popover>
  )
}
