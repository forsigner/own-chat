import { Box } from '@fower/react'
import { PlanList } from './PlanList'

export function Plan() {
  return (
    <Box column mb-80 maxW-960 mx-auto px5>
      <Box my-100>
        <Box textXL text3XL--md text4XL--lg gray400>
          Plans
        </Box>
        <Box text2XL text5XL--md text6XL--lg fontBold>
          Own a Chat AI with collaboration
        </Box>
      </Box>
      <PlanList />
    </Box>
  )
}
