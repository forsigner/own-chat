import { Box } from '@fower/react'
import { PropsWithChildren } from 'react'

interface Props {
  name: string
  desc?: string
}

export const SettingItem = ({ children, name, desc }: PropsWithChildren<Props>) => {
  return (
    <Box toCenterY toBetween py2>
      <Box mr-40 flex-1>
        <Box textBase textSM>
          {name}
        </Box>
        {desc && (
          <Box textXS gray600>
            {desc}
          </Box>
        )}
      </Box>
      <Box flex-1 toRight>
        {children}
      </Box>
    </Box>
  )
}
