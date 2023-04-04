import { Box } from '@fower/react'
import { Title } from './Title'
import { useMembers } from '../../hooks/useMembers'
import { Avatar, Button } from 'bone-ui'
import { RemoveMemberButton } from './RemoveMemberButton'
import { RoleType } from '@own-chat/api-sdk'
import { AddMemberButton } from './AddMemberButton'

export const Members = () => {
  const { loading, members } = useMembers()

  if (loading) return null
  return (
    <Box>
      <Title text="Members" />
      <Box toBetween gray500 py2 mb3 borderBottom-1 borderGray200 borderGray800--dark>
        <Box flex-1>Name</Box>
        <Box flex-1>Role</Box>
        <Box flex-1 toRight>
          Operations
        </Box>
      </Box>
      <Box column rowGap-12 mb6>
        {members.map((item) => (
          <Box key={item.id} toBetween toCenterY>
            <Box flex-1 toCenterY spaceX2>
              <Avatar src={item.user.avatar} />
              <Box>{item.user.nickname}</Box>
            </Box>
            <Box flex-1>{item.roleType}</Box>
            <Box flex-1 toRight>
              {item.roleType === RoleType.Owner && (
                <Button size="sm" colorScheme="red500" disabled>
                  移除
                </Button>
              )}
              {item.roleType !== RoleType.Owner && <RemoveMemberButton item={item} />}
            </Box>
          </Box>
        ))}
      </Box>
      <AddMemberButton />
    </Box>
  )
}
