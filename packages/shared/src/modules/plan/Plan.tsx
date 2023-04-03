import { Box } from '@fower/react'
import { useRouter } from 'next/router'
import { Button, CheckOutline } from 'bone-ui'
import { useTranslation } from 'react-i18next'

type PlanItem = {
  title: string
  desc: string
  price: string
  priceDesc?: string
  features: string[]
}

export function Plan() {
  const { t } = useTranslation('home')
  const { push } = useRouter()

  const plans: PlanItem[] = [
    {
      title: 'Free',
      desc: 'The basics for individuals',
      price: 'Free',
      features: [
        'Collaboration for 3 users',
        'Export session data',
        'Share session data',
        'Use all type of provider',
        'Sync data for all devices',
      ],
    },

    {
      title: 'Plus',
      desc: 'Advanced collaboration for individuals and teams',
      price: '$1',
      priceDesc: 'per user / month',
      features: [
        'Unlimited collaboration',
        'Export session data',
        'Share session data',
        'Use all type of provider',
        'Sync data for all devices',
        'Token count',
      ],
    },

    {
      title: 'Self-Hosted',
      desc: 'Advanced controls & support to your team',
      price: 'Contact',
      features: [
        'Unlimited collaboration',
        'Export session data',
        'Share session data',
        'Use all type of provider',
        'Sync data for all devices',
        'Private Network',
        'Workspace analytics',
        'Advanced security & controls',
      ],
    },
  ]

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

      <Box columnGap-20 rowGap-20 grid gridTemplateColumns={[1, 1, 3]}>
        {plans.map((item, index) => {
          return (
            <Box key={item.title} border px4 roundedXL py6>
              <Box
                text2XL
                fontBold
                mb2
                yellow500={index === 0}
                red500={index === 1}
                purple500={index === 2}
              >
                {item.title}
              </Box>
              <Box textLG h-60>
                {item.desc}
              </Box>
              <Box>
                <Box text3XL fontBold>
                  {item.price}
                </Box>
                <Box gray500 textSM h-2em>
                  {item.priceDesc}
                </Box>
              </Box>
              <Button w-100p colorScheme="brand500" mt8 onClick={() => push('/')}>
                Get started
              </Button>
              <Box mt-40 leadingLoose>
                {item.features.map((f) => (
                  <Box key={f} toCenterY spaceX2 textBase>
                    <CheckOutline size={20} gray500 />
                    <Box>{f}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
