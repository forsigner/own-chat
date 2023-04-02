import { Box } from '@fower/react'
import { TrashOutline } from '@bone-ui/icons'
import { Button, PopoverBody, PopoverTitle } from 'bone-ui'
import { Popover, PopoverContent, PopoverTrigger } from 'bone-ui'
import { Input } from 'bone-ui'
import { Session } from '@own-chat/api-sdk'
import { useSetting } from '../hooks/useSetting'
import { useState } from 'react'
import { useRemoveSession } from '../hooks/useRemoveSession'

interface Props {
  session: Session
}

export function RemoveSessionButton({ session }: Props) {
  const [name, setName] = useState(session.name)
  const { setting } = useSetting()
  const { removeSession } = useRemoveSession()
  const selected = setting.activeSessionId === session.id

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
            <PopoverTitle>确定删除该对话？</PopoverTitle>
            <PopoverBody spaceX3>
              <Button variant="light" size="sm" onClick={close} colorScheme="gray600">
                取消
              </Button>
              <Button
                size="sm"
                onClick={async () => {
                  await removeSession(session.id)
                  close()
                }}
              >
                确定
              </Button>
            </PopoverBody>
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}
