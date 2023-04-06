import { ProviderList } from './ProviderList'
import { UpdateTeamForm } from './UpdateTeamForm'
import { Box } from '@fower/react'

export const General = () => {
  return (
    <Box>
      <UpdateTeamForm />
      <ProviderList />
    </Box>
  )
}
