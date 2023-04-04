import { Box } from '@fower/react'
import { PlanList } from '../../../plan/PlanList'
import { Title } from './Title'

export const Plan = () => {
  return (
    <Box>
      <Title text="Plan"></Title>

      <Box textSM gray500>
        current plan
      </Box>
      <Box text2XL bgGray100 rounded2XL inlineFlex px8 py3 mt2 mb4 column>
        <Box fontBold>Free Plan</Box>
      </Box>
      <PlanList canUpgrade />
    </Box>
  )
}
