import { Box } from '@fower/react'
import { Button } from 'bone-ui'
import { Popover, PopoverContent, PopoverTrigger } from 'bone-ui'
import { Session } from '@own-chat/api-sdk'
import { HOST } from '../../../common'

interface Props {
  session: Session
}

export function ShareButton({ session }: Props) {
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button size={28} colorScheme="gray400" variant="light">
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent onClick={(e) => e.stopPropagation()}>
        {({ close }) => (
          <Box toCenterY p3 spaceX2>
            <Box>{`${HOST}/c/${session.slug}`}</Box>
          </Box>
        )}
      </PopoverContent>
    </Popover>
  )
}
