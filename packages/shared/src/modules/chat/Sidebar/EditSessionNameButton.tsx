import { Box } from '@fower/react'
import { PencilSolid } from '@bone-ui/icons'
import { Button } from 'bone-ui'
import { Popover, PopoverContent, PopoverTrigger } from 'bone-ui'
import { Input } from 'bone-ui'
import { Session } from '@own-chat/api-sdk'
import { useSetting } from '../hooks/useSetting'
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

  async function updateName() {
    await updateSession({
      where: { id: session.id },
      data: { name },
    })
  }

  return (
    <Popover trigger="manual">
      <PopoverTrigger>
        <Button
          size={28}
          colorScheme="gray400"
          variant="ghost"
          icon={<PencilSolid gray400 />}
          flex={selected}
          hidden={!selected}
          onClick={(e) => {
            e.stopPropagation()
            //
          }}
        />
      </PopoverTrigger>
      <PopoverContent onClick={(e) => e.stopPropagation()}>
        {({ close }) => (
          <Box toCenterY p3 spaceX2>
            <Input
              px2
              autoFocus
              value={name}
              onClick={(e) => {
                e.stopPropagation()
              }}
              onKeyDown={async (e) => {
                e.stopPropagation()
                if (e.key === 'Enter') {
                  close()
                  await updateName()
                }
              }}
              onChange={(e) => {
                const name = e.target.value
                setName(name)
              }}
            />
            <Button
              onClick={async () => {
                await updateName()
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
