import { Box } from '@fower/react'
import { Button } from 'bone-ui'
import { TrashSolid } from '@bone-ui/icons'
import { useTranslation } from 'react-i18next'

export const DeleteAccount = () => {
  const { t } = useTranslation('common')
  return (
    <Box>
      <Box toCenterY gray400 mt8 mb3 spaceX2>
        <TrashSolid square4 />
        <Box>{t('delete-account').toUpperCase()}</Box>
      </Box>

      <Box>
        <Button colorScheme="red500" disabled>
          {t('delete-account-button-text')}
        </Button>
      </Box>
    </Box>
  )
}
