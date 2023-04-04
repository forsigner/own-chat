import { Box } from '@fower/react'
import { Button, PlusOutline, Popover, PopoverBody, PopoverContent, PopoverTrigger } from 'bone-ui'
import { useIsOwner } from '../../hooks/useIsOwner'
import AddMemberContainer from './AddMemberContainer'

export function AddMemberButton() {
  const { isOwner } = useIsOwner()
  if (!isOwner) return null
  return (
    <Popover>
      <PopoverTrigger>
        <Box inlineFlex cursorPointer toCenterY columnGap-4 gray400 gray500--hover>
          <Button
            size="sm"
            borderDashed
            variant="light"
            colorScheme="gray500"
            icon={<PlusOutline />}
            roundedFull
          />
          <Box textSM>添加成员</Box>
        </Box>
      </PopoverTrigger>
      <PopoverContent w-300>
        <PopoverBody>
          <Box text2XL fontMedium mb2>
            Add Member
          </Box>
          <AddMemberContainer />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
