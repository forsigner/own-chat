import { Box } from '@fower/react'
import { PencilSolid } from '@bone-ui/icons'
import { Button } from 'bone-ui'
import { Popover, PopoverContent, PopoverTrigger } from 'bone-ui'
import { Input } from 'bone-ui'
import { Session } from '@own-chat/api-sdk'
import { useSetting } from '../hooks/useSetting'
import { useSessions } from '../hooks/useSessions'
import { useUpdateSession } from '../hooks/useUpdateSession'
import { useState } from 'react'

interface Props {
  session: Session
}

export function EditSessionNameButton({ session }: Props) {
  const [name, setName] = useState(session.name)
  const { setting } = useSetting()
  const { updateSession } = useUpdateSession()
  const selected = setting.activeSessionId === session.id

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          size={28}
          colorScheme="gray400"
          variant="ghost"
          icon={<PencilSolid gray400 />}
          flex={selected}
          hidden={!selected}
        />
      </PopoverTrigger>
      <PopoverContent>
        {({ close }) => (
          <Box toCenterY p3 spaceX2>
            <Input
              px2
              autoFocus
              value={name}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  close()
                }
              }}
              onChange={(e) => {
                const name = e.target.value
                setName(name)
              }}
            />
            <Button
              onClick={async () => {
                await updateSession({
                  where: { id: session.id },
                  data: { name },
                })
                close()
              }}
            >
              Save
            </Button>
          </Box>
        )}
      </PopoverContent>
    </Popover>
  )
}
