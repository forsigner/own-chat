import { Box } from '@fower/react'
import { useRouter } from 'next/router'
import { Button, CheckOutline } from 'bone-ui'
import { useUser } from '../../stores'
import { useTeams } from '../chat/hooks/useTeams'
import { PlanType } from '@own-chat/api-sdk'

type PlanItem = {
  type: PlanType
  title: string
  desc: string
  price: string
  priceDesc?: string
  features: string[]
  isCurrentPlan?: boolean
}

interface Props {
  canUpgrade?: boolean
  onUpgrade?(): any
}

export function PlanList({ canUpgrade = false, onUpgrade }: Props) {
  const { push } = useRouter()
  const { activeTeam } = useTeams()

  const plans: PlanItem[] = [
    {
      type: PlanType.Free,
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
      isCurrentPlan: activeTeam?.plan?.type === PlanType.Free,
    },

    {
      type: PlanType.Plus,
      title: 'Plus',
      desc: 'Advanced collaboration for individuals and teams',
      price: '$2',
      priceDesc: 'per user / month',
      features: [
        'Unlimited collaboration',
        'Export session data',
        'Share session data',
        'Use all type of provider',
        'Sync data for all devices',
        'Token count',
      ],
      isCurrentPlan: activeTeam?.plan?.type === PlanType.Plus,
    },

    {
      type: PlanType.Enterprise,
      title: 'Customized',
      desc: 'Advanced controls & support to your team',
      price: 'Contact',
      isCurrentPlan: activeTeam?.plan?.type === PlanType.Enterprise,
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
    <Box columnGap-20 columnGap-0={canUpgrade} rowGap-20 grid gridTemplateColumns={[1, 1, 3]}>
      {plans.map((item, index) => {
        return (
          <Box
            key={item.title}
            border
            borderGray200
            px4
            roundedXL
            py6
            roundedNone={canUpgrade}
            mr--1={canUpgrade}
          >
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
            <Box textLG h-60 textSM={canUpgrade}>
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

            {canUpgrade && (
              <Button
                w-100p
                disabled={item.isCurrentPlan}
                variant={item.isCurrentPlan ? 'light' : 'filled'}
                colorScheme={item.isCurrentPlan ? 'gray700' : 'brand500'}
                onClick={() => {
                  // if(item.)
                  onUpgrade?.()
                }}
              >
                {item.isCurrentPlan ? 'Current Plan' : 'Upgrade'}
              </Button>
            )}

            {!canUpgrade && (
              <Button w-100p colorScheme="brand500" mt8 onClick={() => push('/')}>
                Get started
              </Button>
            )}
            <Box mt-40 leadingLoose>
              {item.features.map((f) => (
                <Box key={f} toCenterY spaceX2 textBase textSM={canUpgrade}>
                  <CheckOutline size={20} gray500 />
                  <Box>{f}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}
