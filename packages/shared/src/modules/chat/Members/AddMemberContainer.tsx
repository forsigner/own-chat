import { useMemo, useState } from 'react'
import { Input } from '@bone-ui/input'
import { Button } from '@bone-ui/button'
import { Box } from '@fower/react'
import { Hooks, Refetcher, RoleType, User } from '@own-chat/api-sdk'
import useDebounce from '../../../common/useDebounce'
import { Avatar, CloseButton, Menu, MenuItem, Spinner, Tag } from 'bone-ui'
import { useAddMember } from '../hooks/useAddMember'
import { useUser } from '../../../stores'
import { useMembers } from '../hooks/useMembers'

export default function AddMemberContainer() {
  const { user } = useUser()
  const { addMember } = useAddMember()
  const { members } = useMembers()
  const [q, setQ] = useState('')
  const [selectedUser, setSelectedUser] = useState<User>()
  const { data = [] } = Hooks.useSearchUsers({ q: '' })

  const onChangeInput = useDebounce(async (val: string) => {
    if (!val) return
    Refetcher.refetchSearchUsers({ q: val })
  }, 300)

  const selectUser = (item: User) => {
    setQ('')
    setSelectedUser(item)
  }

  const users = useMemo(() => {
    return data.filter((item) => {
      if (item.id === user.id) return false
      const find = members.find((m) => m.user.id === item.id)
      if (find) return false
      return true
    })
  }, [data, members, user])

  return (
    <Box>
      {selectedUser && (
        <Box bgSlate100 toBetween py2 px4 roundedLG>
          <Box toCenterY spaceX2>
            <Avatar src={selectedUser.avatar} name={selectedUser.nickname} />
            <Box>{selectedUser.nickname}</Box>
          </Box>
          <CloseButton onClick={() => setSelectedUser(null as any)} />
        </Box>
      )}
      <div>
        {!selectedUser && (
          <Input
            onChange={(e) => {
              setQ(e.target.value)
              onChangeInput(e.target.value)
            }}
            value={q}
            placeholder="输入用户名、id、邮箱搜索"
            size="sm"
            h-40
          />
        )}

        {q && (
          <Box>
            {!users.length && (
              <Box shadow rounded py2 toCenter h-60>
                <Box>Can not find a account</Box>
              </Box>
            )}

            {!!users.length && (
              <Menu>
                {users.map((item) => {
                  return (
                    <MenuItem key={item.id} onClick={() => selectUser(item)}>
                      <Avatar src={item.avatar} />
                      <Box>{item.nickname}</Box>
                    </MenuItem>
                  )
                })}
              </Menu>
            )}
          </Box>
        )}

        <Button
          w-100p
          mt4
          onClick={() => {
            if (!selectedUser) return
            addMember(selectedUser.id)
          }}
          disabled={!selectedUser}
        >
          Add {selectedUser?.nickname} to this provider
        </Button>
      </div>
    </Box>
  )
}
