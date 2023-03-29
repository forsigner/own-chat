import React from 'react'
import { init } from '@owned-chat/shared'
import { Sidebar } from './Sidebar'
import { Box } from '@fower/react'
import { usePage } from './hooks/usePage'

init()

const Newtab = () => {
  const { PageComponent } = usePage()

  return (
    <Box black toLeft h-100vh bgWhite bgSlate800--dark>
      <Sidebar />
      <Box flex-1 h-100vh overflowAuto relative>
        <Box h="calc(100vh - 72px)">{!!PageComponent && <PageComponent />}</Box>
      </Box>
    </Box>
  )
}

export default Newtab
