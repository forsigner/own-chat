import { useRemoveSession } from '../hooks/useRemoveSession'
import { useVisit } from '../hooks/useVisit'
import { TrashOutline } from '@bone-ui/icons'
import { Session } from '@own-chat/api-sdk'
import { Button, PopoverBody, PopoverHeader } from 'bone-ui'
import { Popover, PopoverContent, PopoverTrigger } from 'bone-ui'
import { useTranslation } from 'react-i18next'

interface Props {
  session: Session
}

export function RemoveSessionButton({ session }: Props) {
  const { t } = useTranslation('common')
  const { visit } = useVisit()
  const { removeSession } = useRemoveSession()
  const selected = visit.activeSessionId === session.id

  return (
    <Popover trigger="manual">
      <PopoverTrigger>
        <Button
          flex={selected}
          hidden={!selected}
          size={28}
          colorScheme="gray400"
          variant="ghost"
          icon={<TrashOutline gray400 />}
          onClick={(e) => {
            e.stopPropagation()
          }}
        />
      </PopoverTrigger>
      <PopoverContent onClick={(e) => e.stopPropagation()}>
        {({ close }) => (
          <>
            <PopoverHeader>{t('delete-session-title')}</PopoverHeader>
            <PopoverBody spaceX3>
              <Button variant="light" size="sm" onClick={close} colorScheme="gray600">
                {t('cancel')}
              </Button>
              <Button
                size="sm"
                onClick={async () => {
                  close()
                  await removeSession(session.id)
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
