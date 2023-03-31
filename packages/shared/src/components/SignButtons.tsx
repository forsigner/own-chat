import { Box } from '@fower/react'
import { useTranslation } from 'react-i18next'
import { LoginButton } from './LoginButton'
import { RegisterButton } from './RegisterButton'

export const SignButtons = () => {
  const { t } = useTranslation('common')
  return (
    <Box toLeft spaceX2 mt10>
      <LoginButton>{t('login')}</LoginButton>
      <RegisterButton>{t('register')}</RegisterButton>
    </Box>
  )
}
