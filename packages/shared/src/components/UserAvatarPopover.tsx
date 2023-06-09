import { FC } from 'react'
import { Popover, PopoverContent, PopoverTrigger, Avatar, Menu, MenuItem } from 'bone-ui'
import { Box } from '@fower/react'
import { useTranslation } from 'react-i18next'
import { useUser } from '../stores'
import { EasyModal } from '@own-chat/easy-modal'
import { useLogout } from '../hooks/useLogout'
import { useMounted } from '../hooks/useMounted'
import { DrawerProfile } from './DrawerProfile'

interface Props {}

export const UserAvatarPopover: FC<Props> = () => {
  const { t } = useTranslation('common')
  const { mounted } = useMounted()
  const { user } = useUser()
  const { logout } = useLogout()

  function onLogout() {
    logout()
  }

  if (!mounted) return null
  if (!user) return null

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Avatar cursorPointer src={user.avatar} name={user.nickname} />
      </PopoverTrigger>
      <PopoverContent shadow rounded overflowHidden bgGray800--T20--dark>
        {({ close }) => (
          <>
            <Box p4>
              <Box toCenterY spaceX2>
                <Avatar src={user.avatar} name={user.nickname} circle12></Avatar>
                <Box>
                  <Box textLG fontBold>
                    {user.login}
                  </Box>
                  <Box gray600>{user.nickname}</Box>
                </Box>
              </Box>
            </Box>
            <MenuItem
              onClick={() => {
                EasyModal.show(DrawerProfile)
                close()
              }}
            >
              {t('settings')}
            </MenuItem>
            {/* <MenuItem onClick={onLogout}>{t('personal-token')}</MenuItem> */}
            <MenuItem onClick={onLogout}>{t('logout')}</MenuItem>
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}
