import { Box } from '@fower/react'
import { Member } from '@own-chat/api-sdk'
import {
  Avatar,
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
  Tag,
} from 'bone-ui'
import { useMembers } from '../hooks/useMembers'
import { useRemoveMember } from '../hooks/useRemoveMember'

function MemberItem({ item, isOwner }: { item: Member; isOwner: boolean }) {
  const { removeMember } = useRemoveMember()
  return (
    <Popover>
      <PopoverTrigger>
        <Box key={item.id} cursorPointer>
          <Avatar src={item.user.avatar} />
        </Box>
      </PopoverTrigger>
      <PopoverContent minW-100>
        <PopoverTitle toCenterX>@{item.user.nickname}</PopoverTitle>
        <PopoverBody column toCenterX>
          {isOwner && <Tag colorScheme="brand500">Owner</Tag>}
          {!isOwner && (
            <Box>
              <Button size="sm" colorScheme="red500" onClick={() => removeMember(item.id)}>
                移除该成员
              </Button>
            </Box>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export function MemberList() {
  const { members, loading } = useMembers()

  if (loading) return null

  return (
    <Box toCenterY columnGap-8>
      {members.map((item, index) => (
        <MemberItem key={item.id} isOwner={index === 0} item={item} />
      ))}
    </Box>
  )
}
