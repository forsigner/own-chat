import { Box } from '@fower/react'
import { Button, CogSolid, PlusOutline } from 'bone-ui'
import { Logo } from '../../Logo'
import { AddSessionButton } from '../AddSessionButton'
import { SessionList } from './SessionList'

export const Sidebar = () => {
  return (
    <Box column w-300 px5 py6 h-100p borderRight borderRightGray100 display={['none', 'flex']}>
      <Box flex-1>
        <Logo />
        <SessionList />
      </Box>
      <Box toBetween toCenterY columnGap-8>
        <AddSessionButton />

        <Button
          size="lg"
          colorScheme="white"
          variant="light"
          icon={<CogSolid square5 cursorPointer gray500 gray600--hover />}
        ></Button>
      </Box>
    </Box>
  )
}
