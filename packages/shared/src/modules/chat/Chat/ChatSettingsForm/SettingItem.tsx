import { Box } from '@fower/react'
import { InformationCircleSolid } from 'bone-ui'
import { Tooltip, TooltipTrigger, TooltipContent } from '@bone-ui/tooltip'
import { PropsWithChildren } from 'react'

interface Props {
  name: string
  desc?: string
}

export const SettingItem = ({ children, name, desc }: PropsWithChildren<Props>) => {
  return (
    <Box toCenterY toBetween py2>
      <Box mr-40 flex-1 toCenterY spaceX2>
        <Box textSM>{name}</Box>
        <Tooltip>
          <TooltipTrigger>
            <InformationCircleSolid size={20} gray500 />
          </TooltipTrigger>
          <TooltipContent>{desc}</TooltipContent>
        </Tooltip>
      </Box>
      <Box flex-1 toRight>
        {children}
      </Box>
    </Box>
  )
}
