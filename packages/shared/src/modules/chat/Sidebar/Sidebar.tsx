import { Box } from '@fower/react'
import { SIDEBAR_WIDTH } from '../../../common'
import { AddSessionButton } from '../AddSessionButton'
import { CurrentProvider } from './CurrentProvider'
import { SessionList } from './SessionList'

export const Sidebar = () => {
  return (
    <Box
      column
      w={SIDEBAR_WIDTH}
      pb4
      h-100p
      borderRight
      borderRightGray100
      borderRightGray800--dark
      display={['none', 'flex']}
    >
      <CurrentProvider />

      <Box flex-1 overflowYAuto pb6 px5>
        <SessionList />
      </Box>
      <Box toBetween toCenterY columnGap-8 px5>
        <AddSessionButton />
      </Box>
    </Box>
  )
}
