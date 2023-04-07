import { Box } from '@fower/react'
import { Drawer, DrawerContent, DrawerOverlay } from 'bone-ui'
import { useModal } from '@own-chat/easy-modal'
import { BasicInfo } from './BasicInfo'
import { PersonalToken } from './PersonalToken'
import { DeleteAccount } from './DeleteAccount'
import { Theme } from './Theme'
import { useUser } from '../../stores'
import { Lang } from './Lang'
import { useTranslation } from 'react-i18next'

export const DrawerProfile = () => {
  const { register } = useModal()
  const { user } = useUser()
  const { t } = useTranslation('common')

  if (!user) return null

  return (
    <Drawer {...register()}>
      <DrawerOverlay />
      <DrawerContent w={['100%', 600]}>
        <Box p8>
          <Box text2XL fontBold mb6>
            {t('settings')}
          </Box>
          <BasicInfo />
          <PersonalToken />
          <Lang />
          <Theme />
          <DeleteAccount />
        </Box>
      </DrawerContent>
    </Drawer>
  )
}
