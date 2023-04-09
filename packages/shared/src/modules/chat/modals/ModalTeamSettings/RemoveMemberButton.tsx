import { Member } from '@own-chat/api-sdk'
import { Button } from 'bone-ui'

import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@bone-ui/popover'
import { useRemoveMember } from '../../hooks/useRemoveMember'

interface Props {
  item: Member
}

export function RemoveMemberButton({ item }: Props) {
  const { removeMember } = useRemoveMember()
  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme="red500" size="sm">
          移除
        </Button>
      </PopoverTrigger>
      <PopoverContent minW-100>
        {({ close }) => (
          <>
            <PopoverHeader>确定删除该成员？</PopoverHeader>
            <PopoverBody spaceX3>
              <Button variant="light" size="sm" onClick={close} colorScheme="gray600">
                取消
              </Button>
              <Button
                size="sm"
                onClick={async () => {
                  await removeMember(item.id)
                  close()
                }}
              >
                确定
              </Button>
            </PopoverBody>
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}
