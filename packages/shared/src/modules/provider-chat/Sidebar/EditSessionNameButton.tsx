import { Box } from '@fower/react'
import { PencilSolid } from '@bone-ui/icons'
import { Button } from 'bone-ui'
import { Popover, PopoverContent, PopoverTrigger } from 'bone-ui'
import { Input } from 'bone-ui'
import { Session, useSessions } from '../hooks'

interface Props {
  session: Session
}

export function EditSessionNameButton({ session }: Props) {
  const { currentSession, updateSessionName } = useSessions()
  const { selected } = session

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
              value={currentSession.name}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  close()
                }
              }}
              onChange={(e) => {
                const name = e.target.value
                updateSessionName(session.id, name)
              }}
            />
            <Button
              onClick={async () => {
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
