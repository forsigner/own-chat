import { useState } from 'react'
import { Box } from '@fower/react'
import { Hooks } from '@own-chat/api-sdk'
import { Select } from 'bone-ui'
import { useRouter } from 'next/router'

export const StrategySelect = () => {
  const [value, setValue] = useState<number | string>('ALL')
  const { data = [] } = Hooks.useStrategys()
  const options = data.map((i) => ({ label: i.name, value: i.id }))

  const { push } = useRouter()

  return (
    <Box>
      <Select
        roundedFull
        bgWhite
        width={200}
        // size="sm"
        options={[{ label: 'All strategies', value: 'ALL' }, ...options]}
        value={value}
        onChange={(v: string) => {
          setValue(v)
          const queryParams = new URLSearchParams(location.href.split('?')[1] || '')
          queryParams.set('strategyId', v)

          push(`/dashboard/bots?${queryParams.toString()}`)
        }}
      />
    </Box>
  )
}
