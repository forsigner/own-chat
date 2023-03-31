import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { Menu, MenuItem } from '@bone-ui/menu'
import { Button } from '@bone-ui/button'
import { IconDropDown } from '../../../icons'
import { RoleType } from '@own-chat/api-sdk'

interface Props {
  onRoleItem(roleType: RoleType, memberId: number): void
  roleName: RoleType
  memberId: number
}

export const RoleItemMenu = (props: Props) => {
  const { onRoleItem, roleName, memberId } = props
  const asMember = (_roleType: RoleType) => {
    onRoleItem(_roleType, memberId)
  }
  return (
    <Popover>
      <PopoverTrigger>
        <Button size={18} borderNone ml1 icon={<IconDropDown></IconDropDown>}></Button>
      </PopoverTrigger>
      <PopoverContent>
        {({ close }) => (
          <Menu>
            <MenuItem
              onClick={() => {
                asMember(RoleType.Admin)
                close()
              }}
              bgGray100={roleName === RoleType.Admin}
              bgGray200--hover
            >
              <div>管理员</div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                asMember(RoleType.Editor)
                close()
              }}
              bgGray100={roleName === RoleType.Editor}
              bgGray200--hover
            >
              <div>编辑者</div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                asMember(RoleType.Commenter)
                close()
              }}
              bgGray100={roleName === RoleType.Commenter}
              bgGray200--hover
            >
              <div>评论者</div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                asMember(RoleType.Reader)
                close()
              }}
              bgGray100={roleName === RoleType.Reader}
              bgGray200--hover
            >
              <div>只读</div>
            </MenuItem>
          </Menu>
        )}
      </PopoverContent>
    </Popover>
  )
}
