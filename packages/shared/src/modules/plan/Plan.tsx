import { Box } from '@fower/react'
import { useTranslation } from 'react-i18next'

type PlanItem = {
  title: string
}

export function Plan() {
  const { t } = useTranslation('home')

  const plans: PlanItem[] = [
    {
      title: 'Free',
    },

    {
      title: 'Plus',
    },

    {
      title: 'Self-Hosted',
    },
  ]

  return (
    <Box column mb-80>
      <Box text3XL fontBold my-100>
        Your personal Chat AI but collaborative
      </Box>

      <Box columnGap-20 grid gridTemplateColumns={[1, 3, 3]}>
        {plans.map((item) => (
          <Box key={item.title} border>
            <Box>gogo</Box>
            ...
          </Box>
        ))}
      </Box>
    </Box>
  )
}
