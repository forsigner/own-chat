import { Box } from '@fower/react'
import { Member } from '@own-chat/api-sdk'
import {
  Avatar,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
  Tag,
} from 'bone-ui'
import { useMembers } from '../hooks/useMembers'

function MemberItem({ item }: { item: Member }) {
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
          <Tag colorScheme="brand500">{item.roleType}</Tag>
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
        <MemberItem key={item.id} item={item} />
      ))}
    </Box>
  )
}
