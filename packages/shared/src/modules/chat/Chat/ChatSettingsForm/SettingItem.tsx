import { Box } from '@fower/react'
import { InformationCircleSolid, Tooltip } from 'bone-ui'
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
        {desc && (
          <Tooltip content={desc}>
            <InformationCircleSolid size={20} gray500 />
          </Tooltip>
        )}
      </Box>
      <Box flex-1 toRight>
        {children}
      </Box>
    </Box>
  )
}
