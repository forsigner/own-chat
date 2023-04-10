import { Alert } from 'bone-ui'
import { ProviderList } from './ProviderList'
import { UpdateTeamForm } from './UpdateTeamForm'
import { Box } from '@fower/react'
import { useModal } from '@own-chat/easy-modal'
import { useTranslation } from 'react-i18next'

export const General = () => {
  const { data } = useModal<{ tips: boolean }>()
  const { t } = useTranslation('common')
  return (
    <Box>
      <UpdateTeamForm />

      {data?.tips && (
        <Alert mt8 type="warning">
          {t('provider-tips')}
        </Alert>
      )}

      <ProviderList />
    </Box>
  )
}
