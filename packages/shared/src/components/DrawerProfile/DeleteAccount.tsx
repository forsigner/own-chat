import { Box } from '@fower/react'
import { Button } from 'bone-ui'
import { TrashSolid } from '@bone-ui/icons'
import { getUser } from '../../stores'

export const DeleteAccount = () => {
  const user = getUser()
  return (
    <Box>
      <Box toCenterY gray400 mt8 mb3 spaceX2>
        <TrashSolid square4 />
        <Box>DELETE ACCOUNT</Box>
      </Box>

      <Box>
        <Button colorScheme="red500">Delete your account</Button>
      </Box>
    </Box>
  )
}
