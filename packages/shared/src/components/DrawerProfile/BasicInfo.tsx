import { Box } from '@fower/react'
import { Avatar } from 'bone-ui'
import { useUser } from '../../stores'
import { EditNamePopover } from './EditNamePopover'

export const BasicInfo = () => {
  const { user } = useUser()
  return (
    <Box toCenterY spaceX3>
      <Box>
        <Avatar name={user.nickname} size={80} />
      </Box>
      <Box column rowGap-8>
        <Box toCenterY spaceX2>
          <Box fontMedium textLG>
            {user.nickname}
          </Box>
          <EditNamePopover />
        </Box>
      </Box>
    </Box>
  )
}
